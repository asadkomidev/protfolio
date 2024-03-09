"use server";

import { z } from "zod";
import { Resend } from "resend";

import { contactSchema } from "@/schemas/contact-schema";
import { ContactEmail } from "@/components/contact/email-template";

type ContactFormInputs = z.infer<typeof contactSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = contactSchema.safeParse(data);

  if (result.success) {
    const { fullname, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: "asadkomi.dev@gmail.com",
        subject: "Message from Portfolio",
        react: ContactEmail({ fullname, email, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

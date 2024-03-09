"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { contactSchema } from "@/schemas/contact-schema";
import { createContact } from "@/actions/contact";

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

 async function onSubmit(data: ContactFormValues) {

  try {
    await createContact(data);

    toast({
      title: "Thanks for reaching out!",
      description: "I'll get back to you as soon as possible.",
    });
  } catch (error) {
    toast({
      title: "Error sending message!",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    
    form.reset({
      fullname: "",
      email: "",
      message: "",
    });

  }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="youremail@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" className="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Send
        </Button>
      </form>
    </Form>
  );
}

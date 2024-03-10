import { z } from 'zod'

export const contactSchema = z.object({
    fullname: z
      .string()
      .min(2, {
        message: "Full name must be at least 2 characters.",
      })
      .max(30, {
        message: "Full name must not be longer than 30 characters.",
      }),
    email: z
      .string({
        required_error: "Please provide an email.",
      })
      .email(),
    message: z.string().min(4),
  })
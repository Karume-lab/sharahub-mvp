import { z } from "zod";

export const getInTouchWithUsSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)"),
  email: z.email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .regex(/^\+?[0-9\s\-()]+$/, "Invalid phone number format"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type GetInTouchWithUsSchema = z.infer<typeof getInTouchWithUsSchema>;

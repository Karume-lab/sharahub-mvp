import z from "zod";

export const signInSchema = z.object({
  email: z.email("Please enter your email address"),
  password: z.string().min(1, "Please enter your password"),
  rememberMe: z.boolean().default(false),
});
export type SignInSchema = z.infer<typeof signInSchema>;

export const signUpSchema = z.object();
export type SignUpSchema = z.infer<typeof signUpSchema>;

export const forgotPasswordSchema = z.object({
  email: z.email("Please enter your email address"),
});
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

import {z} from "zod";

const mailFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" })
    .refine((email) => {
      // More strict email validation
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }, { message: "Please enter a valid email address" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  company: z.string().min(1, { message: "Company name is required" }),
  message: z.string().optional(),
});

export default mailFormSchema;
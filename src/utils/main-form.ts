import {z} from "zod";

const mailFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().min(1, { message: "Phone is required" }),
  company: z.string().min(1, { message: "Company name is required" }),
  message: z.string().optional(),
});

export default mailFormSchema;
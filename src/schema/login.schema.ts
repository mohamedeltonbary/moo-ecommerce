import { error } from "console";
import * as z from "zod";

export const LoginSchema = z.object({

    email: z.string().email("invalid email"),
    password: z.string().min(6, "min length 6").max(20, "max length 20"),


})

export type LoginSchemaType = z.infer<typeof LoginSchema>; // نا هنا استخدمت تايب اوف اهوو


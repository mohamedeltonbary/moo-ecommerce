import { error } from "console";
import * as z from "zod";

export const registerSchema = z.object({
    name: z.string().min(2, "min length 2").max(20, "max length 20"),
    email: z.string().email("invalid email"),
    password: z.string().min(6, "min length 6").max(20, "max length 20"),
    rePassword: z.string().min(6, "min length 6").max(20, "max length 20"),
    phone: z.string().regex(/^(01[0125][0-9]{8})$/, "invalid phone"),
}).refine(function (object) {
    if (object.password === object.rePassword) {
        {  // ركز هنا انا عملت {} تحت الاساسيه
            return true;
        }
        return false;
    }
}, {
    path: ["rePassword"],
    message: "passwords do not match",
})

export type RegisterSchemaType = z.infer<typeof registerSchema>; // نا هنا استخدمت تايب اوف اهوو


    "use server"

    import { cookies } from "next/headers";
    import { decode } from "next-auth/jwt"; // ← بدل punycode

    export async function getMyToken() {
        const x = (await cookies()).get("next-auth.session-token")?.value
        const token = await decode({
            token: x,
            secret: process.env.NEXTAUTH_SECRET!
        })
        return token?.token 
    }
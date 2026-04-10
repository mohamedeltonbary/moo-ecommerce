    // "use server"

    // import { cookies } from "next/headers";
    // import { decode } from "next-auth/jwt"; // ← بدل punycode

    // export async function getMyToken() {
    //     const x = (await cookies()).get("next-auth.session-token")?.value
    //     const token = await decode({
    //         token: x,
    //         secret: process.env.NEXTAUTH_SECRET!
    //     })
    //     return token?.token 
    // }

    "use server";

import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export async function getMyToken() {
  const cookieStore = await cookies();

  const rawToken =
    cookieStore.get("__Secure-next-auth.session-token")?.value ||
    cookieStore.get("next-auth.session-token")?.value;

  if (!rawToken) {
    return null;
  }

  const token = await decode({
    token: rawToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  return token?.token ?? null;
}
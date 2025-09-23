
import { AuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

import { jwtDecode } from "jwt-decode";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const response = await fetch(`${process.env.API}/auth/signin`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                    headers: { "Content-Type": "application/json" },
                });
                const payload = await response.json();
                console.log('Response status:', response.status);
                console.log(payload);
                if (payload.message === "success") {
                    const { id }: { id:string } = jwtDecode(payload.token);

                    // console.log(id); 
                    return {
                        id: id,
                        user: payload.user,
                        token: payload.token
                    };
                }
                throw new Error(payload.message || "Invalid credentials");

                //  return ;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user?.user
                token.token = user?.token
            }
            return token
        },

          async session({ session, token }) {
            if (token) {
                session.user = token?.user

            }
            return session
        }
    }
}





// import { AuthOptions } from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";

// // هنا استخدمنا named import بدل default
// import { jwtDecode } from "jwt-decode";

// export const authOptions: AuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: 'Credentials',
//             credentials: {
//                 email: { label: "Username", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password" },
//             },
//             authorize: async (credentials) => {
//                 const response = await fetch(`${process.env.API}/auth/signin`, {
//                     method: "POST",
//                     body: JSON.stringify({
//                         email: credentials?.email,
//                         password: credentials?.password,
//                     }),
//                     headers: { "Content-Type": "application/json" },
//                 });
//                 const payload = await response.json();
//                 console.log('Response status:', response.status);
//                 console.log(payload);

//                 if (payload.message === "success") {
//                     // هنا استخدمنا any عادي
//                     const { id }: { id: string } = jwtDecode(payload.token) as any;

//                     return {
//                         id: id,
//                         user: payload.user,
//                         token: payload.token
//                     } as any;
//                 }

//                 throw new Error(payload.message || "Invalid credentials");
//             },
//         }),
//     ],
//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) {
//                 (token as any).user = (user as any).user;
//                 (token as any).token = (user as any).token;
//             }
//             return token;
//         },

//         async session({ session, token }) {
//             if (token) {
//                 (session as any).user = (token as any).user;
//             }
//             return session;
//         }
//     }
// };


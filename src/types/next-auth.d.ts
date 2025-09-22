import NextAuth from "next-auth"
import { int } from "zod"
import { to } from './../../.next/server/chunks/ssr/[turbopack]_browser_dev_hmr-client_hmr-client_ts_818f0fdf._';

declare module "next-auth" {

    interface User {
        token: string,
        user:{name:string,email:string,role:string}
    }

    interface Session {
      user: User.user
    }
}
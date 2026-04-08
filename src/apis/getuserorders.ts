// "use server";

// import { getMyToken } from "@/utilites/token";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

// export async function getuserorder() {
//   const token = await getMyToken();
//   if (!token) {
//     throw new Error("not found");
//   }
//   const { id } = jwtDecode(token);

//   const data = await axios.get(
//     `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
//   );
//   return data;
// }

"use server";

import { getMyToken } from "@/utilites/token";
import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface MyToken extends JwtPayload {
  id: string;
}

export async function getuserorder() {
  const token = await getMyToken();

  if (!token || typeof token !== "string") {
    throw new Error("Token not found");
  }

  const { id } = jwtDecode<MyToken>(token);

  const { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
  );

  return data;
}

// "use server";

// import { getMyToken } from "@/utilites/token";
// import axios from "axios";
// import { jwtDecode, JwtPayload } from "jwt-decode"; // ✅ الاستيراد الصحيح

// // ✅ عرف نوع للـ payload عشان TypeScript يعرف إن فيه id
// interface MyToken extends JwtPayload {
//   id: string;
// }
// export async function getuserorder() {
//   const token = await getMyToken();
//   // ✅ افحص التوكن قبل ما تعمل decode
//   if (!token) {
//     throw new Error("Token not found");
//   }

//   // ✅ حدد النوع MyToken عشان تقدر تستخرج id بدون Error
//   const { id } = jwtDecode<MyToken>(token);

//   const { data } = await axios.get(
//     `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
//   );

//   return data;
// }

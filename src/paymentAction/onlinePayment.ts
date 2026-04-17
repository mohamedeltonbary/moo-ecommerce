// "use server";

// import { getMyToken } from "@/utilites/token";
// import axios from "axios";

// export async function onlinePaymentAction(id: string, value: object) {
//   const token = await getMyToken();
  // console.log(token)
//   if (!token) {
//     throw new Error("login first");
//   }
//   const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`, value, {
//       headers: {
//           token: token as string
//       }
//   });

//   return data;
// }


"use server";

import { getMyToken } from "@/utilites/token";
import axios from "axios";

export async function onlinePaymentAction(id: string, value: object) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("login first");
  }

  console.log("Checkout session URL:", `${process.env.NEXT_URL}/payment`);

  const { data } = await axios.post(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${process.env.NEXT_URL}/payment`,
    value,
    {
      headers: {
        token: token as string,
      },
    }
  );

  return data;
}
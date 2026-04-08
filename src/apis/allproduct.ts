// export default async function getallproduct() {
//     const response = await fetch("http://localhost:3000/api/users")
//     const { data } = await response.json()
//     // console.log(data);
//     return data
// }

export default async function getAllProduct() {
  const response = await fetch(`${process.env.API}/products`, {
    cache: "no-store",
  });
  const { data } = await response.json();
  return data;
}
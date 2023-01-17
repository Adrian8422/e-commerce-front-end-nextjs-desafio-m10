import { NextApiRequest, NextApiResponse } from "next";

export default async function categories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://e-commerce-backend-desafio-m9.vercel.app/api/products"
  );
  const data = await response.json();
  const categories = data.map((prod: any) => {
    return prod.categories;
  });
  let i = 0;
  while (i < categories.length) {
    let j = i + 1;
    while (j < categories.length) {
      if (categories[i] == categories[j]) categories.splice(j, 1);
      else j++;
    }
    i++;
  }

  res.send(categories);
}

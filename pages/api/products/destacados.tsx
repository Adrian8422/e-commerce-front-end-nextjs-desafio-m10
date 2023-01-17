import { NextApiRequest, NextApiResponse } from "next";

export default async function productsFeatured(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://e-commerce-backend-desafio-m9.vercel.app/api/products"
  );
  const data = await response.json();
  const productosDestacados = data.filter((prod: any) => {
    if (prod.shipment == "free") {
      return prod;
    }
  });

  res.send(productosDestacados);
}

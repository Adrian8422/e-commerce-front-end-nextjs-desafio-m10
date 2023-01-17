import { NextApiRequest, NextApiResponse } from "next";

export default async function findCategorie(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { categoria } = req.query;
  console.log({ categoria });
  const response = await fetch(
    "https://e-commerce-backend-desafio-m9.vercel.app/api/products"
  );
  const data = await response.json();
  const foundCategorie = data.map((prod: any) => prod.categories == categoria);

  console.log({ foundCategorie });
  res.send("warara");
  // const categories = data.map((prod: any) => {
  //   return prod.categories;
  // });
}

///////BORRAR ESTO QUE LO SIMPLIFIQUE BUSCANDO DIRECTAMENTE CAMBIANDO LA QUERY PARA QUE PONGA EL NOMBRE DE LA CATEGORIA SELECCIONANDO APROVECHANDO EL MOTOR DE BUSQUEDA QUE TIENE ALGOLIA :DDD

import Carousel from "nuka-carousel/lib/carousel";
import { useEffect, useState } from "react";

export function CarrouselHome() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    const response = fetch(
      `https://cdn.contentful.com/spaces/skgryj111lli/environments/master/entries?access_token=ZXDkJG8r9m5QSZwIoZEbcNyzcJwv-8uC547M-AQg6CM&&content_type=carousel`
    )
      .then((res) => res.json())
      .then((data) => {
        setPics(data.includes.Asset);
      });
  }, []);

  return (
    <Carousel
      cellAlign={"center"}
      slideIndex={1}
      wrapAround={true}
      autoplay={true}
    >
      {pics?.map((item: any) => (
        <div key={item.sys.id} style={{}}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={"https:" + item["fields"]["file"]["url"]}
          />
        </div>
      ))}
    </Carousel>
  );
}

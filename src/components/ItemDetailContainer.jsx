import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const [product, setproduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filter = data.find((p) => p.id === Number(id));
      setproduct(filter);
    });
  }, [id]);

  if (!product) return <div>loading</div>;

  return (
    <Container className="mt-4">
      <h1>{product.title}</h1>
      <img src={product.pictureUrl} alt="s" />
    </Container>
  );
};

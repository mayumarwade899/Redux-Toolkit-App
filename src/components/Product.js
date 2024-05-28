import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    setProducts(await data.json());
  };

  useEffect(() => {
    getProducts();
  }, []);

  const cards = products.map((product) => (
    <div
      className="col-md-3 text-center d-flex align-items-center  
                        justify-content-center mb-5"
    >
      <Card key={product.id} className="h-100" style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "130px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>⭐{product.rating.rate}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;

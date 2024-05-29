import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { getProducts } from "../Store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const {data:products} = useSelector(state => state.products);

  // const getProducts = async () => {
  //   const data = await fetch("https://fakestoreapi.com/products");
  //   setProducts(await data.json());
  // };

  useEffect(() => {
    //dispatch an action for fetProducts
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };

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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
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

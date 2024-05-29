import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(remove(id));
  };

  const cards = productCart.map((product) => (
    <div
      className="col-md-12 text-center d-flex align-items-center  
                        justify-content-center mb-5 mt-2"
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
          <Button variant="danger" onClick={() => removeItem(product.id)}>
            Remove item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;

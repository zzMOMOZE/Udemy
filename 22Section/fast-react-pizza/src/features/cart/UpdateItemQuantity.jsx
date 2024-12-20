/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { decItemQty, incItemQty } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decItemQty(pizzaId))}>
        -
      </Button>
      <span className="gap-2 text-sm font-semibold">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(incItemQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

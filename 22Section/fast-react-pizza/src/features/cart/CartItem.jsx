/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    return () => {
      dispatch(deleteItem(id));
    };
  };

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={deleteHandler(pizzaId)}>
          Изтрий
        </Button>
      </div>
    </li>
  );
}

export default CartItem;

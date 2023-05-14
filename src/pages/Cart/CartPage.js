import { CartEmpty } from "./components/CartEmpty"
import { CartList } from "./components/CartList"
import { UseTitle } from "../../hooks/UseTitle"
import { useCart } from "../../context"

export const CartPage = () => {
  const { cartList } = useCart();
  UseTitle(`Cart(${cartList.length})`)

  return (
    <main>
      {!cartList.length ? <CartEmpty /> : <CartList />}
    </main>
  )
}

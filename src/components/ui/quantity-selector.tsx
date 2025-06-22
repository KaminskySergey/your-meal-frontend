import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addToCart, removeFromCart, updateCartQuantity } from "../../redux/cart/cart-slice";
import { IProduct } from "../../types/product";


interface IQuantitySelector {
    min?: number; 
    max?: number; 
    productId: string
    product: IProduct
  }


  export const QuantitySelector = ({ product, productId,  min = 1, max }: IQuantitySelector) => {
    const dispatch = useAppDispatch();
    const quantity = useAppSelector((state) =>
    state.cart.cart.find((item) => item.id === productId)?.quantity || 0
  );

    
    const decrease = () => {
      if (quantity <= min) {
        dispatch(removeFromCart(productId));
      } else {
        dispatch(updateCartQuantity({ productId, quantity: quantity - 1 }));
      }
    };
  
    const increase = () => {
      dispatch(addToCart(product));
      if (max !== undefined && quantity >= max) return;
      dispatch(updateCartQuantity({ productId, quantity: quantity + 1 }));
    };
    
  
    return (
      <div className="inline-flex items-center select-none rounded-[16px] overflow-hidden">
        <button
          onClick={decrease}
          className="w-6 md:w-8 py-2 h-[30px] md:h-[40px] flex items-center justify-center bg-grayDark text-gray-700 hover:bg-gray-100 transition"
          aria-label="decrease"
        >
          −
        </button>
        <span className="w-6 md:w-8 h-[30px] md:h-[40px] flex items-center justify-center bg-grayDark text-gray-900 font-medium text-lg">
          {quantity}
        </span>
        <button
          onClick={increase}
          className="w-6 md:w-8 py-2 h-[30px] md:h-[40px] flex items-center justify-center bg-grayDark text-gray-700 hover:bg-gray-100 transition"
          aria-label="increase"
        >
          +
        </button>
      </div>
    );
};
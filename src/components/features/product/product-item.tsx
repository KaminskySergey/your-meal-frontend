import { Button } from "../../ui/button"
import Modal from "../../ui/modal"
import { ProductModal } from "./product-modal"
import { useToggle } from "../../../hooks/useToggle"
import { useAppDispatch } from "../../../hooks/redux"
import { addToCart } from "../../../redux/cart/cart-slice"
import { IProduct } from "../../../types/product"

interface IProductItem {
    product: IProduct
}

export const ProductItem = ({ product }: IProductItem) => {
    const { isOpen, handleToggle } = useToggle()
    const dispatch = useAppDispatch();

    const handleAddToCartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        dispatch(addToCart(product));
    };
    return <>
        <li onClick={handleToggle} className="p-[4px] bg-white md:p-[12px] rounded-[12px] cursor-pointer shadow-md transition-transform duration-300 ease-in-out
    hover:scale-105">
            <div>
                <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="h-[137px] md:h-[276px] w-full rounded-[12px] object-cover "
                />
            </div>
            <div className="flex flex-col items-start gap-2 mt-2 md:mt-4 mb-4 md:mb-6">
                <p className="text-xl md:text-3xl font-bold text-gray-900">{product.price} $</p>
                <p className="text-lg md:text-2xl text-gray-700 font-semibold leading-tight">
                    {product.name}
                </p>
            </div>
            <div>
                <Button onClick={handleAddToCartClick}>Add to cart</Button>
            </div>
        </li>
        {isOpen && <Modal isProduct onClose={handleToggle}>
            <ProductModal handleAddToCartClick={() => dispatch(addToCart(product))} product={product} />
        </Modal>}
    </>
}

import { Button } from "../../ui/button";
import { QuantitySelector } from "../../ui/quantity-selector";
import { IProduct } from "../../../types/product";

export const ProductModal = ({ product, handleAddToCartClick }: { product: IProduct, handleAddToCartClick: () => void }) => {
    return (
        <div className="flex h-screen sm:h-auto flex-col justify-between">
            <div className="hidden sm:block sm:mb-2 md:mb-3">
                <h2 className="text-[28px] md:text-[48px]  font-bold ">{product.name}</h2>
            </div>
            <div className="sm:flex gap-3">
                <h2 className="text-[28px] sm:hidden font-bold mb-1">{product.name}</h2>
                <div className="w-full sm:w-[226px] md:w-[276px] h-[232px] sm:h-[180px] md:h-[220px] relative mb-4 rounded-xl overflow-hidden shrink-0">
                    <img
                        src={product.imgUrl}
                        alt={product.name}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <p className="text-sm text-gray-700 mb-5">{product.description}</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 ">
                <div className="flex gap-1 flex-1 h-[30px]">
                    <Button  className="sm:w-[218px] md:w-[276px]" onClick={handleAddToCartClick} orange={true}>
                        Add to cart
                    </Button>
                    <QuantitySelector product={product} productId={product.id} />
                </div>
                <div className="text-end flex-1">
                    <p className="text-lg text-green-600 font-semibold mb-3 sm:mb-0">
                        {product.price} €
                    </p>
                </div>
            </div>


        </div>

    )
}




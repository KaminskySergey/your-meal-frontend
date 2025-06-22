import { QuantitySelector } from "../../ui/quantity-selector"
import { IProduct } from "../../../types/product";

interface IAsideCartItem {
    product: IProduct
}

export const AsideCartItem = ({product}: IAsideCartItem) => {
    
    return <li className="flex justify-between border-t last:border-b  pt-2 border-grayDark items-center">
        <div className="flex items-center gap-[6px]">
            <div className="w-[64px] h-[52px]">
                <img  src={product.imgUrl} alt={product.name} className="w-full h-full rounded-md object-cover"/>
            </div>
            <div className="flex flex-col  items-start text-[12px]">
                <p className=" font-semibold">{product.name}</p>
                <p className="font-bold text-green">{product.price} $</p>
            </div>
        </div>
        <div>
            <QuantitySelector product={product} productId={product.id} />
        </div>
    </li>
}
import { useEffect } from "react";
import { List } from "../../ui/list";

import { useParams } from "react-router-dom";
import { ProductItem } from "./product-item";
import { ProductSkeleton } from "./production-skeleton";
import { useAppDispatch } from "../../../hooks/redux";
import { fetchProducts } from "../../../redux/products/operations";
import { useProducts, useProductsLoading } from "../../../redux/products/selectors";




export const ProductSection = () => {
    const dispatch = useAppDispatch()
    const { categoryId, categoryName } = useParams()
    const products = useProducts()
    const isLoading = useProductsLoading()

    useEffect(() => {
        if (!categoryId) return
        dispatch(fetchProducts(categoryId))
    }, [categoryId, dispatch])

    const formattedName = categoryName
        ? categoryName
            .toLowerCase()
            .replace(/-/g, " ")
            .trim()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        : "";
    return <>
        <div className="px-0 py-[30px] md:flex-1 md:py-0 relative">
            <h2 className="md:absolute text-start mb-2 md:mb-0  w-auto top-[-78px] left-0 font-semibold text-[28px] md:text-[40px]">{formattedName}</h2>
            <List className="grid grid-cols-2   sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-[10px] sm:gap-[20px] md:gap-[30px]">
                {isLoading
                    ? Array(3)
                        .fill(null)
                        .map((_, idx) => <ProductSkeleton key={idx} />)
                    : products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
            </List>
        </div>

    </>
}




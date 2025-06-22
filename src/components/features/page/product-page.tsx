import { Container } from "../../ui/container";
import { AsideCart } from "../aside/aside-cart";
import { ProductSection } from "../product/product-section";

export const ProductPage = () => {

    // Тут загрузи товары по categoryName из API или стейта
    // Например:
    // const products = productsByCategory[categoryName];
  
    return (
      <Container className="md:flex md:py-[100px] md:gap-[30px]">
        <AsideCart />
        <ProductSection />
        {/* Рендер товаров */}
      </Container>
    );
}
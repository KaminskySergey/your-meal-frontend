import { FC, SVGProps } from "react";

import { useEffect } from "react"
import { Container } from "../../ui/container"
import { Section } from "../../ui/section"

import IconBurger from "../../../assets/icons/burger.svg"
import IconPizza from "../../../assets/icons/pizza.svg"
import IconSnack from "../../../assets/icons/snacks.svg"
import IconDessert from "../../../assets/icons/dessert.svg"
import IconHotDog from "../../../assets/icons/hotdog.svg"
import { List } from "../../ui/list"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { CategorySkeleton } from "./category-skeleton";
import { useCategories, useCategoriesLoading } from "../../../redux/categories/selectors";
import { useAppDispatch } from "../../../hooks/redux";
import { fetchCategories } from "../../../redux/categories/operations";


const iconsMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
    burgers: IconBurger,
    pizza: IconPizza,
    snacks: IconSnack,
    desserts: IconDessert,
    hotdogs: IconHotDog,
    // ...
};

export const Category = () => {
    const { categoryName } = useParams();
    const category = useCategories()
    const isLoading = useCategoriesLoading()
    const dispatch = useAppDispatch()

    const navigate = useNavigate();
    const location = useLocation();

    
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch]);


    useEffect(() => {
        if (location.pathname === "/" && category.length > 0) {
            const first = category[0];
            const slug = first.name.toLowerCase().replace(/\s+/g, "-");
            navigate(`/category/${slug}/${first.id}`, { replace: true });
        }
    }, [category, location.pathname, navigate]);
    return (
        <Section className="py-[30px] md:py-[30px]">
            <Container className="text-center">
                <List className="flex overflow-x-auto gap-2 px-2 py-2 scrollbar-hide md:justify-center">
                    {isLoading
                        ? Array(Object.keys(iconsMap).length)
                            .fill(null)
                            .map((_, idx) => <CategorySkeleton key={idx} />)
                        : category.map((el) => {
                            const IconComponent =
                                iconsMap[el.name.toLowerCase().replace(/\s+/g, "")];

                            return (
                                <li
                                    key={el.id}
                                    className={`py-[3px] px-[8px] rounded-full hover:bg-yellow-100 ${categoryName === el.name.toLowerCase().replace(/\s+/g, "-")
                                        ? "bg-orange"
                                        : "bg-transparent"
                                        } transition-colors duration-200`}
                                >
                                    <Link
                                        to={`/category/${el.name.toLowerCase().replace(/\s+/g, "-")}/${el.id}`}
                                        className="flex items-center gap-2 md:gap-[12px]"
                                    >
                                        {IconComponent ? (
                                            <IconComponent width={24} height={24} />
                                        ) : (
                                            <div className="w-[24px] h-[24px] bg-transparent" />
                                        )}
                                        <p className="text-[12px] font-normal">{el.name}</p>
                                    </Link>
                                </li>
                            );
                        })}
                </List>
            </Container>
        </Section>
    );
}


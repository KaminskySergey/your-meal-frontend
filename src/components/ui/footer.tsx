import { Logo, LogoTextHeader } from "../icons/logo";
import { Container } from "./container";


export function Footer() {
    return <footer className="pt-[40px] md:pt-[50px] pb-[20px] md:pb-[40px] bg-white">
        <Container className="flex flex-col gap-[24px]">
            <div className="flex items-center justify-center">
                <LogoTextHeader width="150" height="23" color="#FF7020"/>
                <Logo color="#FF7020" width="43" height="43" />
            </div>
            <div>
                 <p className="text-[12px] font-normal">&copy; YouMeal, 2022</p>
            </div>
        </Container>
    </footer>
}

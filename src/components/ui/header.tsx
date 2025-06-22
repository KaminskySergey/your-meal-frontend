import { Logo, LogoTextHeader } from "../icons/logo"
import { Container } from "./container"

export const Header = () => {
    return <header
        className="h-[466px] bg-no-repeat bg-center pt-[24px]"
        style={{ backgroundImage: `url('/background.png')`, backgroundSize: 'auto' }}
    >
        <Container className="flex justify-center items-center flex-col gap-[24px]">
            <div className="flex items-center">
                <LogoTextHeader width="115" height="19"/>
                <Logo color="#FFFFFF" width="35" height="35" />
            </div>
            <div className="flex flex-col sm:flex-row-reverse  items-center gap-[20px]">
                <div>
                    <h1 className="font-extrabold text-white text-[30px] sm:text-start sm:text-[36px] md:text-[50px]">Serving only<hr className="border-none" /> <span className="text-orangeRed">the juiciest burgers!</span></h1>
                </div>
                <div>
                    <img src="/burger.png" alt="burger" className="w-[227px] h-[229px] sm:w-[326px] sm:h-[326px]"/>
                </div>
            </div>
        </Container>
    </header>
    
}



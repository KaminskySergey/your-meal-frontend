import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Category } from "../features/category/Category"
import { Footer } from "./footer"

export const Layout = () => {
    return <>
        <Header />
        <Category />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}
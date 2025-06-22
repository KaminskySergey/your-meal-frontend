import React from "react"
import { cn } from "../../utils/utils"

interface ISection {
    children: React.ReactNode
    className?: string
}
export const Section = ({ children, className }: ISection) => {
    return <section className={cn("", className)}>
        {children}
    </section>
}
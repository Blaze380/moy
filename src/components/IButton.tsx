import { ReactElement, ReactNode } from "react"
import { Button } from "./ui/button"
interface Props {
    variant?: "default" | "outline" | "secondary";
    children: ReactNode;
    bolded?: boolean;
    blackOutline?: boolean
    cta?: boolean;
}
export default function IButton ({ children, variant, bolded, blackOutline, cta }: Props): ReactElement {

    if (cta)
        return (
            <>
                {cta && (
                    <Button data-cal-namespace={`${ cta ? '30min' : "" }`} data-cal-link={`${ cta ? "afiliado-organico-a4lyxl/30min" : "" }`} data-cal-config={`${ cta ? { "layout": "month_view" } : "" }`} className={`bg-transparent  border-2 ${ blackOutline ? "border-black hover:bg-black text-black" : "border-primary text-primary  hover:bg-primary" }  rounded-full   ${ bolded ? "font-medium text-sm" : " font-normal text-xs" }  hover:text-white transition`}>{children}</Button>
                )}
            </>)
    return (
        <>
            {variant == "outline" ?
                <Button className={`bg-transparent  border-2 ${ blackOutline ? "border-black hover:bg-black text-black" : "border-primary text-primary  hover:bg-primary" }  rounded-full   ${ bolded ? "font-medium text-sm" : " font-normal text-xs" }  hover:text-white transition`}>{children}</Button>
                :
                <Button variant={variant} className={`bg-primary rounded-full text-white  ${ bolded ? "font-medium text-sm" : "font-normal text-xs" } hover:opacity-80 transition`}>{children}</Button>
            }
        </>
    )
}
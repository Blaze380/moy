import { ReactElement, ReactNode } from "react"
import { Button } from "./ui/button"
interface Props {
    variant?: "default" | "outline" | "secondary";
    children: ReactNode;
    bolded?: boolean;
}
export default function IButton ({ children, variant ,bolded}: Props): ReactElement {
    return (
        <>
            {variant == "outline" ?
                <Button  className={`bg-transparent border-2 border-primary rounded-full text-primary  ${bolded? "font-medium text-sm":" font-normal text-xs"} hover:bg-primary hover:text-white transition`}>{children}</Button>
                :
                <Button variant={variant} className={`bg-primary rounded-full text-white  ${bolded? "font-medium text-sm":"font-normal text-xs"} hover:opacity-80 transition`}>{children}</Button>
            }
        </>
    )
}
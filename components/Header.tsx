import { useEffect, useState } from "react";
import NormalHeader from "./Header/Normal";
import ResponsiveHeader from "./Header/Responsive";

export default function Header() {
    const [collapseNavbar, setCollapseNavbar] = useState(true);

    return (
        <>
            <header 
                className={`grid grid-cols-7 bg-white text-black font-semibold max-md:hidden shadow-md py-2`}
            >
                <NormalHeader 
                    setCollapseNavbar={setCollapseNavbar}
                />
            </header>

            <header 
                className={`flex ${!collapseNavbar ? "flex-col" : "justify-around max-sm:justify-start"} bg-white text-black font-semibold md:hidden transition-all`}
            >
                <ResponsiveHeader
                    collapseNavbar={collapseNavbar}
                    setCollapseNavbar={setCollapseNavbar}
                />
            </header>
        </>
    )
}
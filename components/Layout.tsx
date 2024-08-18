import { useEffect } from "react";
import Custom404 from "@/pages/404";
import { toast } from "react-toastify";

export default function ProtectedLayout({children}: any) {
    return (
        <div>
            {children}
        </div>
    )
}
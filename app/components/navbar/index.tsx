import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="w-full h-20 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    DICKY
                    <ul className="hidden md:flex gap-x-6 items-center">
                        <li>
                            <Link href={"/about"}>
                                <p> About </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services"}>
                                <p> Services </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/projects"}>
                                <p> Projects </p>
                            </Link>
                        </li>
                        <Button className="py-6 px-11 rounded-full">
                            Let's Talk.
                        </Button>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Navbar;
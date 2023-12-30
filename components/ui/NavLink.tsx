
import { redirect } from "next/navigation";
import Navigation from "../navigation";


const Navbar = async () => {
    

    return ( 
        <div className="border-b border-transparent items-center">
            <div className="flex h-28 items-center justify-center ">
                <Navigation className="mx-6 "/>
            </div>
        </div>
     );
}
 
export default Navbar;

import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react"
//width="131" height="129"
export const Navbar = () => {
    return (
        <div className="">
            <Image src="/profilePage/logo.svg" className="float-left pl-9" style={{height: "65px", width: "65px"}} />
           
           <div className="pr-9">
            <Button className= "float-right" style={{backgroundColor: "#FFDD00", color: "#001429", paddingRight: "18.75px" }}>Claim Profile</Button> 
            </div>
        </div>
    )
};
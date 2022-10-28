import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react"
//width="131" height="129"
export const Navbar = () => {
    return (
        <div >
            <div style={{paddingLeft: "18.75px", paddingTop: "10px"}}>
            <Image src="/profilePage/logo.svg" className="float-left" style={{height: "65px", width: "65px", }} />
           </div>
           <div className="pt-3  m-0" style={{paddingRight: "18.75px" }} >
            <Button  size="sm" color="default" className= "items-center justify-items-center text-center gap-2 float-right rounded-2xl " style={{backgroundColor: "#FFDD00", color: "#001429", width: "150px", height:"35px", border: "2px solid #001429", boxShadow: "-2px 4px 0px #001429" }}><p className="justify-center">Claim Profile</p></Button> 
            </div>
        </div>
    )
};


// paddingLeft: "18.75px", paddingTop: "10px"
//             <button className= "items-center justify-items-center text-center gap-2 float-right rounded-2xl " style={{backgroundColor: "#FFDD00", color: "#001429", width: "150px", height:"35px", border: "2px solid #001429", boxShadow: "-2px 4px 0px #001429" }}><p className="justify-center">Claim Profile</p></button> 

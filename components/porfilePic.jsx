import { Image, Avatar } from "@nextui-org/react";
import { useState } from "react";
//import Image from "next/image";

export const ProfilePic = () => {
  return (
    <Avatar
      src="/profilePage/profilePhoto.png"
      objectFit="cover"
      css={{size:"auto", maxSize: "$40", minSize: "$20"}}
      color="gradient"
      bordered
    
    />
  );
};

// ReferenceError: window is not defined
// className="w-screen pt-10" style={{height: "72px"}}

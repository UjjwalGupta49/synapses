import { Image } from "@nextui-org/react";
import { useState } from "react";
//import Image from "next/image";

export const Banner = () => {
  return (
    <Image
      src="/profilePage/Gradient.jpg"
      objectFit="none"
      width="100vw"
      height={200}
      css={{ minHeight: "min-content", maxHeight: "inherit", minWidth: "min-content", maxWidth: "inherit" }}
    />
  );
};

// height={200}
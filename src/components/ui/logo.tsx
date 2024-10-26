import Image from "next/image";
import React from "react";

interface IProps {
  height?: number;
  width?: number;
}

const Logo = (props: IProps) => {
  const { height = 100, width = 100 } = props;
  return (
    <Image
      src={"/assets/logo.svg"}
      alt="lendsqr-logo"
      height={height}
      width={width}
      className=""
    />
  );
};

export default Logo;

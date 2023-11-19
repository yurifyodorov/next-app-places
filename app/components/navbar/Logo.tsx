'use client';

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="40"
      width="40"
      src="/images/world.png"
      priority={true}
    />
  )
}

export default Logo;

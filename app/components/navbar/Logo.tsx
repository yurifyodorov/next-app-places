'use client';

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="64"
      width="64"
      src="/images/world.png"
      priority={true}
    />
  )
}

export default Logo;

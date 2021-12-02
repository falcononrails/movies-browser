import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="sticky-nav flex justify-between p-4">
      <Link href="/">
        <a className="flex justify-center items-center">
          <Image
            src="/logos/canalplus.png"
            alt="CanalPlus"
            width={175}
            height={45  }
          />
        </a>
      </Link>
    </nav>
  );
}

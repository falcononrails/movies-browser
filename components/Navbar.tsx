import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

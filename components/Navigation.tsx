"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Blog
      </Link>
      <Link
        href="/portfolio"
        className={pathname === "/portfolio" ? "active" : ""}
      >
        Portfolio
      </Link>
    </nav>
  );
}

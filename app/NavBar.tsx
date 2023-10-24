"use client";

import { GiSlicedBread } from "react-icons/gi";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from 'classnames'

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 h-17 py-3">
      <Flex justify="between">
        <Flex align="center" gap='3'>
          <Link href="/" className="mr-6">
            <GiSlicedBread size={50} />
          </Link>
          <NavLinks />
        </Flex>
      </Flex>
    </nav>
  );
};

const NavLinks = () => {
  const links = [
    { label: "Add New Recipe", href: "/add/recipe" },
    { label: "View Recipes", href: "/view/recipes" },
  ];
  const currentPath = usePathname();

  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
                "nav-link": true,
                "!text-zinc-900": link.href === currentPath,
              })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;

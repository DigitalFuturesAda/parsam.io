import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  href: string;
  text: string;
}
const NavLink: React.FC<NavbarProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className="font-semibold hover:text-neutral-500 dark:hover:text-neutral-400 transition-all text-xl fold:text-base items-center justify-center flex">
        {text}
      </a>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex gap-3 mb-6">
      <NavLink href="/" text="Home" />
      <NavLink href="/about" text="About" />
      <NavLink href="/notes" text="Notes" />
      <NavLink href="/articles" text="Articles" />
      <span className="flex-grow" />
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;

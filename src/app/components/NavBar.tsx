import Link from "next/link";
import { links } from "../links";

const NavBar = () => {
    return (
        <nav className="w-full p-4 bg-indigo-900 border-2 border-indigo-700 rounded-lg">
            <ul className="flex justify-end">
                {links.map((link, index) => (
                    <li key={index} className="[&:not(:last-child)]:border-r [&:not(:first-child)]:px-6 first:pr-6 border-indigo-700">
                        <Link className="text-white text-xl" href={link.href}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;
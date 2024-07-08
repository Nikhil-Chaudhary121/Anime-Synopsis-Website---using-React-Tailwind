import { Link } from "react-router-dom";
import { RiMenuSearchLine } from "react-icons/ri";
import userAtom from "../atoms/userAtom";
import { useRecoilValue } from "recoil";
import useLogout from "../hooks/useLogout";
import { HamburgerIcon } from "@chakra-ui/icons";
import { navLinks } from "../constants";
const Nav = () => {
  const user = useRecoilValue(userAtom);
  const { logout } = useLogout();
  return (
    <header className="w-full absolute py-4 px-8">
      <nav className="w-full flex justify-between items-center">
        <a href="/">
          <h1 className="text-3xl font-portings font-[600] text-orange-300 tracking-[0.15em]  capitalize ">
            ANI<span className=" ">M</span>E<span className=" ">X</span>
          </h1>
        </a>
        <ul className=" flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={link.label}>
              <a
                className=" font-montserrat leading-normal text-lg text-slate-gray"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block">
          <img src={HamburgerIcon} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import style from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Navlist from "./Navlist";

const Navbar = () => {
  return (
      <header className={style.main_header}>
        <div className={style.navbar_brand}>
          <Link href="/">
            <Image src="./logo.png" alt="logo image" height={30} width={110} />
          </Link>
        </div>

        <Navlist/>


      </header>
  );
};

export default Navbar;

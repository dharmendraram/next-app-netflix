import style from "@/app/styles/navbar.module.css"
import Link from "next/link"

const Navlist = () => {
  return (
    <nav className={style.navbar}>
        <div>
            <ul className={style.navbarList}>
                <li className={style.navbarItem}>
                    <Link href="/" className={style.navbarLink}>Home</Link>

                </li>
                <li className={style.navbarItem}>
                    <Link href="/about"className={style.navbarLink}>About Us</Link>

                </li>
                <li className={style.navbarItem}>
                    <Link href="/movie"className={style.navbarLink}>Movie</Link>

                </li>
                <li className={style.navbarItem}>
                    <Link href="/contact"className={style.navbarLink}>Contact Us</Link>

                </li>

            </ul>
        </div>
      
    </nav>
  )
}

export default Navlist

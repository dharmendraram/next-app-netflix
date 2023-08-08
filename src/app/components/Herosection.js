import style from "@/app/styles/common.module.css";
import herostyle from "@/app/styles/herosection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Mulish } from "next/font/google";

const roboto = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const Herosection = ({ title, imageUrl }) => {
  return (
    <>
      <main className={herostyle.main_section}>
        <div className={style.container}>
          <div className={style.grid_two_section}>
            <div className={herostyle.hero_content}>
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto obcaecati, modi voluptate laudantium natus accusamus,
                distinctio reprehenderit dolores, omnis perspiciatis iusto ad
                sunt sequi quis aliquam deserunt maxime. Excepturi natus
                officia, quos iure dolorem dolores asperiores quaerat.
              </p>
              <Link href="/movie" className={roboto.className}>
                <button>Explore Movies</button>
              </Link>
            </div>

            <div className={herostyle.hero_image}>
              <Image
                src={imageUrl}
                alt="home page netflix"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
            <div className={ herostyle['custom-shape-divider-bottom-1691491756']}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={herostyle['shape-fill']} />
        </svg>
        </div>

      </main>
    </>
  );
};

export default Herosection;

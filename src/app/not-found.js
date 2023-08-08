import Link from 'next/link'
 import style from "@/app/styles/common.module.css"
export default function NotFound() {
  return (
    <section className={style.container}>
        <div className={style.error_page}>
        <h1>404</h1> <br />
        <h2>Not Found</h2> <br />
      <p>Could not find requested resource</p>
      <Link href="/">
        <button>Return to Home</button>
      </Link>
        </div>
     
    </section>
  )
}
import ContactCard from "../components/ContactCard"
import style from '@/app/contact/contact.module.css'
import ContactForm from "../components/ContactForm"
const page = () => {
  return (
    <>
    <div className={style.container}>
    <h1>Contact Us</h1>
    <ContactCard/>
    </div>
    
    <section className={style.contact_section}>
      <h2>We'd love to hear <span>from you </span></h2>

      <ContactForm/>

    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.621134514508!2d85.32381207537878!3d27.667191176205627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198ceff20941%3A0x12e0bc15376c6c73!2sSwoyambhu%20International%20College!5e0!3m2!1sne!2snp!4v1691494180956!5m2!1sne!2snp" width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={style.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default page

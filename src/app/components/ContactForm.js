import style from "@/app/contact/contact.module.css"
const ContactForm = () => {
  return (
    <>
      <form action=""className={style.contact_form}>
            <div className={style.input_field}>
                <label htmlFor="username" className={style.label}>
                    Full Name
                    <input type="text" id="username" name="username" placeholder="Enter your name" />
                </label>
            </div>

            <div className={style.input_field}>
                <label htmlFor="email" className={style.label}>
                    Email
                    <input type="email" id="emai" name="email" placeholder="Enter your email" />
                </label>
            </div>

            <div className={style.input_field}>
                <label htmlFor="phone" className={style.label}>
                   Phone No.
                    <input type="number" id="phone" name="phone" placeholder="Enter your phone" />
                </label>
            </div>

            <div className={style.input_field}>
                <label htmlFor="message" className={style.label}>
                    Message
                    <textarea name="message" id="message" rows="5" placeholder="Enter your message"></textarea>
                </label>
            </div>

            <div>
                <button type="submit">Send a message</button>
            </div>

      </form>
    </>
  )
}

export default ContactForm

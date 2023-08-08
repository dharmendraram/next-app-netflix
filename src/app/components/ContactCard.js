import style from '@/app/contact/contact.module.css'
import Link from 'next/link';
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
const ContactCard = () => {
  return (
    <div div className={style.section}>
        <div className={style.container}>
            <div className={style.grid}>
                <div className={style.grid_card}>
                    <i><MdEmail/></i>
                    <h2>Email</h2>
                    <p>Monday To Friday Expected</p>
                    <p className={style.last_para}>response time: 72 hours</p>
                    <Link href="/">Send Email <span>-&gt;</span></Link>
                </div>

                <div className={style.grid_card}>
                    <i><MdVoiceChat/></i>
                    <h2>Live Chat</h2>
                    <p>Monday To Friday Expected</p>
                    <p className={style.last_para}>response time: 72 hours</p>
                    <Link href="/">Send Email <span>-&gt;</span></Link>
                </div>

                <div className={style.grid_card}>
                    <i><MdForum/></i>
                    <h2>Coummunity Forum</h2>
                    <p>Monday To Friday Expected</p>
                    <p className={style.last_para}>response time: 72 hours</p>
                    <Link href="/">Send Email <span>-&gt;</span></Link>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default ContactCard

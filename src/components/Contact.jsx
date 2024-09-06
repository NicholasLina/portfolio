import { FaHandshake, FaRegHandPointRight, FaRegPaperPlane } from "react-icons/fa6"
import styles from "../styles/Contact.module.css"

export default function Contact() {
    return(
        <section className={ styles.contact }>
            <div className={ styles.text }>
                <h2>Let's work together!</h2>
                <p>Email me at <a href="mailto:nicktlina@gmail.com">nicktlina@gmail.com</a> and I'll get back to you within 24 hours.</p>
                <div className={ styles.icon }>
                    <FaHandshake />
                </div>
            </div>
            {/* <form className={ styles.form }>
                <input name="name" type="text" placeholder="Name" />
                <input name="name" type="text" placeholder="Email" />
                <textarea cols="30" rows="4" placeholder="How can I help you?"></textarea>
                <button type="submit" value="Submit">Submit</button>
            </form> */}
        </section>
    )
}
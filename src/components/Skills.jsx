import { FaCode } from "react-icons/fa6"
import styles from "../styles/Skills.module.css"

export default function Skills() {
    return (
        <section className={styles.skills}>
            <div className={styles.card}>
                <FaCode />
                <h3>Developer</h3>

                <h4>Highlights:</h4>
                <p>Websites, APIs, Automation Tools</p>

                <h4>Frameworks and tools that I use:</h4>
                <p>MERN, LAMP, GitHub, Docker, Postman</p>
            </div>
            <div className={styles.card}>
                <h3>Designer</h3>

                <h4>Things I've designed:</h4>
                <p>UX/UI, Websites, Logos, Vector Graphics</p>

                <h4>Tools that I use:</h4>
                <ul>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Figma</li>
                    <li>Inkscape</li>
                </ul>
            </div>
        </section>
    )
}
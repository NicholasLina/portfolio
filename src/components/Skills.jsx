import { FaCode, FaPenNib, FaRegLightbulb } from "react-icons/fa6"
import styles from "../styles/Skills.module.css"
import { LuPencilRuler } from "react-icons/lu"
import { PiPencilRuler } from "react-icons/pi"
import { BsLayers } from "react-icons/bs"

export default function Skills() {
    return (
        <section className={styles.skills}>
            <div className={styles.card}>
                <FaCode />
                <h3>Developer</h3>

                <h4>Highlights</h4>
                <p>Websites, UIs, APIs, <br></br>Automation Tools, Digital Artwork</p>

                <h4>Languages</h4>
                <p>TypeScript, JavaScript ES6+, Python,<br></br> Java, CSS, Semantic HTML</p>

                <h4>Technologies that I use</h4>
                <ul>
                    <li>MERN/LAMP</li>
                    <li>Linux</li>
                    <li>GitHub</li>
                    <li>Docker</li>
                    <li>Postman</li>
                    <li>VSCode</li>
                    <li>ViteJS</li>
                </ul>
            </div>
            <div className={styles.card}>
                <FaRegLightbulb />
                <h3>Designer</h3>

                <h4>Philosophy</h4>
                <p>Simplicity and clear intentions make the most effective and versatile designs</p>

                <h4>Experience</h4>
                <p>UX/UI, Websites, Logos, Vector Graphics</p>

                <h4>Tools that I use</h4>
                <ul>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Figma</li>
                    <li>Inkscape</li>
                    <li>ImageMagick</li>
                </ul>
            </div>
        </section>
    )
}
import styles from "../styles/Header.module.css"
import AVATAR from "../assets/avatar.svg"

export default function Header() {
    return(
        <div className={ styles.header }>
            <h1>Developer, Designer + Digital Artist</h1>
            <p className={ styles.tagline }>Code. Craftsmanship. Creation.</p>
            <div className={ styles.avatar }>
                <img src={ AVATAR }></img>
            </div>
        </div>
    )
}
import styles from "../styles/Header.module.css"
import AVATAR from "../assets/avatar.svg"

export default function Header() {
    return(
        <div className={ styles.header }>
            <div className={ styles.avatar }>
                <img src={ AVATAR }></img>
            </div>
            <div>
                <h1>Developer, Designer<br></br> + Digital Artist</h1>
                <p className={ styles.tagline }>I have a passion for solving problems and making cool stuff</p>
            </div>
        </div>
    )
}
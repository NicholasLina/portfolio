import styles from "../styles/Header.module.css"

export default function Header() {
    return(
        <div className={ styles.header }>
            <h1>Developer, Designer + Digital Artist</h1>
            <p className={ styles.tagline }>Code. Craftsmanship. Creation.</p>
        </div>
    )
}
import React from 'react'
import styles from "../styles/Nav.module.css"
import { FaCodepen, FaLinkedin } from "react-icons/fa6";

const Nav = () => {
    return (
        <div className={ styles.nav }>
            <a className={ styles.logo }>Nick Lina</a>
            <div className={ styles.links }>
                <a><FaLinkedin /></a>
                <a><FaCodepen /></a>
            </div>
        </div>
    )
}

export default Nav
import styles from "../styles/Work.module.css"

import CSSYPHUS from "../assets/CSSyphus.webp"
import EMERGE from "../assets/Emerge.webp"
import CONSUMPTION_RENEWAL from "../assets/ConsumptionRenewal.webp"

export default function Work() {
    return(
        <section className={ styles.work }>
            <h2>Some of my work</h2>
            <div className={ styles.grid }>
                <a href="https://emergetheseries.ca/" target="_blank" className={ styles.card }>
                    <img src={ EMERGE }></img>
                    <div className={ styles.cover }>
                        <h3>EMERGE</h3>
                        <p>Companion site and interactive extension of the Canadian drama series EMERGE</p>
                    </div>
                </a>
                <a href="https://codepen.io/nicklina/pen/xxWjpXx" target="_blank" className={ styles.card }>
                    <img src={ CSSYPHUS }></img>
                    <div className={ styles.cover }>
                        <h3>CSSyphus</h3>
                        <p>CSS-only animated depiction of mythological Greek King Sisyphus</p>
                    </div>
                </a>
                <a href="https://codepen.io/nicklina/pen/wvGbWpJ" target="_blank" className={ styles.card }>
                    <img src={ CONSUMPTION_RENEWAL }></img>
                    <div className={ styles.cover }>
                        <h3>Consumption / Renewal</h3>
                        <p>Generative digital artwork that explores patterns in nature using simple AI</p>
                    </div>
                </a>
            </div>
        </section>
    )
}
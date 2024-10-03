import styles from "../styles/Work.module.css"

import WEATHER_APP from "../assets/weather-app.webp"
import TLN from "../assets/TLN.webp"
import EMERGE from "../assets/Emerge.webp"
import CSSYPHUS from "../assets/CSSyphus.webp"
import CONSUMPTION_RENEWAL from "../assets/ConsumptionRenewal.webp"

export default function Work() {
    return (
        <section className={styles.work}>
            <h2>Some of my work</h2>
            <div className={styles.grid}>
                <a href="https://nicklina.com/weather/" target="_blank" className={styles.card}>
                    <img src={WEATHER_APP}></img>
                    <div className={styles.cover}>
                        <h3>Weather</h3>
                        <p>You name the place, and I'll give you the current weather conditions from anywhere in the world.</p>
                    </div>
                </a>
                <a href="https://tln.ca/" target="_blank" className={styles.card}>
                    <img src={TLN}></img>
                    <div className={styles.cover}>
                        <h3>TLN</h3>
                        <p>Show info, events, recipes, schedules, and more all under one roof!</p>
                    </div>
                </a>
                <a href="https://emergetheseries.ca/" target="_blank" className={styles.card}>
                    <img src={EMERGE}></img>
                    <div className={styles.cover}>
                        <h3>EMERGE</h3>
                        <p>Companion site and interactive extension of the Canadian drama series EMERGE</p>
                    </div>
                </a>
                <a href="https://codepen.io/nicklina/pen/xxWjpXx" target="_blank" className={styles.card}>
                    <img src={CSSYPHUS}></img>
                    <div className={styles.cover}>
                        <h3>CSSyphus</h3>
                        <p>CSS-only animated depiction of mythological Greek King Sisyphus</p>
                    </div>
                </a>
                <a href="https://codepen.io/nicklina/pen/wvGbWpJ" target="_blank" className={styles.card}>
                    <img src={CONSUMPTION_RENEWAL}></img>
                    <div className={styles.cover}>
                        <h3>Consumption / Renewal</h3>
                        <p>Generative digital artwork that explores patterns in nature using simple AI</p>
                    </div>
                </a>
            </div>
        </section>
    )
}
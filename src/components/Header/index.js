import React from "react";
import hero from  '../../assets/image/Hero.svg'
import styles from "./Header.module.scss";

const Header = () => {
    console.log('Header')
    return(
        <div className={styles.heroClass}>
            <h1>
                <img className={styles['heroClass__hero']} src={hero} alt=""/>
            </h1>
        </div>
    )
}

export default Header
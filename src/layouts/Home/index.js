import React from "react";
import Header from '../../components/Header'
import ImgMediaCard from '../../components/Card'
import Grid from "@material-ui/core/Grid";
import styles from "./Home.module.scss"
import lampOne from '../../assets/image/lampOne.png'
import lampTwo from '../../assets/image/lampTwo.png'

const Home = () => {
    console.log('Home')
    let arr = [
            {
                title:'Gold',
                price:'$243.00',
                img: lampTwo,
            },
            {
                title:'Blue Desk',
                price:'$250.00',
                img: lampOne,
            }
        ]
    return(
        <>

            <Header className={styles.homeClass}/>
            <Grid container justifyContent="center">
                {arr.map(item => {
                    return <Grid item xs={12} md={6}>
                        <ImgMediaCard title={item.title} price={item.price} img={item.img}/>
                    </Grid>
                })}
            </Grid>
        </>
    )
}

export default Home
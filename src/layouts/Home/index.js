import React from "react";
import Header from '../../components/Header'
import ImgMediaCard from '../../components/Card'
const Home = () => {
    console.log('Home')
    let arr = [{title:'aaaa', price:'10'}, {title:'bbbb', price:'30'}]
    return(
        <>
        <h1>Home</h1>
        <Header/>
            {arr.map(item => {
                return <ImgMediaCard title={item.title} price={item.price}/>
            })}
        </>
    )
}

export default Home
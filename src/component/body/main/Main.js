import React, { useEffect, useState } from 'react';
import "./Main.css"
import Card from '../card/Card';
import Sidebar from '../sidebar/sidebar';
const Main = () => {
        const [cart, setCart] = useState([])
        const [count, setCount] = useState([])
        useEffect(() => {
            fetch("./army.JSON")
                .then(res => res.json())
                .then(details => setCart(details))
        }, [])
        const handlerAddToCart = datas => {
            const newCount = [...count, datas]
            setCount(newCount)
        }

        return (
             <div>
            <div className= "grid mt-5 mx-3">
            <div className= "row row-cols-1 row-cols-md-3 g-4"> 
            { 
            cart.map(d=> <Card cart={d} key={d.name} handler={handlerAddToCart}></Card>)
            } 
            </div> 
            <div>
                <Sidebar count = { count } > </Sidebar> 
            </div> 
            </div> 
                
            </div>
            );
        };

 export default Main;
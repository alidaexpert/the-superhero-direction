import React from 'react';
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    const shoppingCart = <FontAwesomeIcon icon={faList} />
    const {name,img,rank,period,achieve,salary}=props.cart
    return (
 
                <div className="col">
                     <div className="card h-100">
                         <div className="img-div">
                         <img src={img} className="heights" alt="..." height="100%"/>
                         </div>
                           
                            <div className="card-body text-color text-start">
                                <h5 className="card-title">Name: <span className="name-color">{name}</span> </h5>
                                <h6>Rank: <span className="span-color">{rank}</span> </h6>
                                <h6>Achieve: <span className="span-color"> {achieve}</span></h6>
                                <h6>Period: <span className="span-color">{period}</span> </h6>
                                <h6>Salary: <span className="span-color">{salary}</span> </h6>
                            </div>
                            <div className="card-footer">
<button onClick={()=>props.handler(props.cart)} className="btn btn-color text-white">{shoppingCart} Add to list</button>
                            </div>
                        </div>
                </div>
    );
};

export default Card;
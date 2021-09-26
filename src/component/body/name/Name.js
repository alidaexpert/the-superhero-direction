import React from 'react';
import "./Name.css"
const Name = (props) => {
    const {name,img}=props.names
    return (
        <div className="d-flex bg-pink mb-2 p-2 rounded-2">
            <div className="w-25 me-3">
                <img className="rounded-3" src={img} alt="" width="50px" />
            </div>
            <div className="w-75 d-flex align-items-center text-light justify-content-center ">
                <small className=" text-size">{name}</small>
            </div>
        </div>
    );
};

export default Name;
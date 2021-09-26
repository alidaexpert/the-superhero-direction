import React from 'react';
import Name from '../name/Name';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
const Sidebar = (props) => {
    const user = <FontAwesomeIcon icon={faUsers} />
    const {count}=props
    const total=count.reduce((pre,present)=>pre+present.salary,0);
    // let name=[]
    // for (const p of count) {
    //     name=name+p.name
    // }
  
    return (
        <div className="p-4">
            <h4>{user} Chief Army: {count.length}</h4>
            <h4>Total Cost: {total} BDT</h4>
            {
                count.map(names=><Name names={names}></Name>)
            }
            <button className="btn btn-color text-white">Hire Team</button>
        </div>
    );
};

export default Sidebar;
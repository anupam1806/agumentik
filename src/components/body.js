import React from 'react';
import { body } from "../data";

import './body.css'

const Body = () =>
 {
    return ( 
        <>
        <div className='contain'>
            <p className='head2'>{body.title}</p>
            <p className='head1'>{body.name}</p>
            <p className='head5'>{body.head}</p>
            <p className='paragra'>{body.description}</p>
            <button className='order'>ORDER NOW</button>
        </div>
        
        </>
    )}
    
export default Body;
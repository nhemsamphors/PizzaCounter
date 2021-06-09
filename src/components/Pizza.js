import React from 'react';
import pizza from './pizza.png';
class Pizza extends React.Component{
    render(){
        return(
        <div>
        <img calssName="img-pizza" width="200" src={pizza}height="auto" alt="pizza"/>
        </div>
        )
    }
}

export default Pizza;
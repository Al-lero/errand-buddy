import React from "react";
import './Style/photo.css'
import tomatoe from'../Assets/tomatoe.avif'
import buddy from'../Assets/buddy.avif'
import fruits from'../Assets/fruits.avif'
import foodstuff from'../Assets/foodstuff.avif'
import homecleaning from'../Assets/housecleaning.avif'
import drycleaning from'../Assets/drycleaning.avif'

const photo = ()=>{
    return(
        <div className="photo-text">
            <div class = 'container'>
                <img src={tomatoe} alt="tom" />
                <img src={buddy} alt="person" />
                <img src={fruits} alt="oranges" />
                <img src={foodstuff} alt="food" />
                <img src={drycleaning} alt="cloth" />
                <img src={homecleaning} alt="house" />

            </div>
        </div>
    )
}

export default photo
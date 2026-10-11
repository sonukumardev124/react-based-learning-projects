import React from 'react'

const Card = ({ user, age, img }) => {
    console.log(user,age);
    return (
        <div className="card">
            <img src={img} alt="" />
            <h1>{user},{age}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing ad.</p>
            <button className="btn">view profile</button>
        </div>
    )
}

export default Card

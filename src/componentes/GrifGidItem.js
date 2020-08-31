import React from 'react'

export const GrifGidItem = ({title,url}) => {
    
    return (
        <div className="card animate__animated animate__bounce animate__delay-0s">
           <img src={url} alt={title}/>
           <p> {title} </p>
        </div>
    )
}

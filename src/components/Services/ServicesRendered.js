import React from 'react'

const ServicesRendered = ({image, text, smallText}) => {
  return (
    <div>
    <img src={image} alt="training-icon" />
    <h1> {text} </h1>
    <p> {smallText} </p>
    </div>
  )
}

export default ServicesRendered
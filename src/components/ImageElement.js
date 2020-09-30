import React from "react"
import Img from "gatsby-image"
import "./ImageElement.css"

const ImageElement = ({ data }) => {
  return (
    <div className="image-element">
      <img
        className="image-element__img"
        src={data.img.src.childImageSharp.fluid.src}
      />
      <p className="image-element__description">{data.description}</p>
    </div>
  )
}

export default ImageElement

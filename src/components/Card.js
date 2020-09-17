import React from "react"
import Img from "gatsby-image"

import "./Card.css"

const Card = ({ data }) => {
  return (
    <div className="col-3 col-s-5 card">
      <h1 className="card__title">{data.title}</h1>
      <p className="card__description">{data.description}</p>
      <a
        className="card__link"
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className="card__image"
          fluid={data.img.src.childImageSharp.fluid}
          atl={data.img.alt}
        />
      </a>
    </div>
  )
}

export default Card

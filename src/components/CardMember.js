import React from "react"
import "./CardMember.css"
import Img from "gatsby-image"

const CardMember = ({ data }) => {
  return (
    <div className="col-3 col-s-5 cardmember">
      <Img
        className="cardmember__image"
        fluid={data.img.src.childImageSharp.fluid}
      />
      <h1 className="cardmember__title">{data.title}</h1>
      <p className="cardmember__description">{data.description}</p>
    </div>
  )
}

export default CardMember

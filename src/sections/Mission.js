import React from "react"
import Img from "gatsby-image"

import ImageElement from "../components/ImageElement"

import "./Mission.css"

export default function Mission({ data }) {
  console.log(data)
  return (
    <section className="mission">
      <div>
        <div className="mission___introduction">
          <h3 className="mission__title">{data.title}</h3>
          <p className="mission__description">{data.description}</p>
        </div>
        <Img
          className="mission__img"
          fluid={data.img.src.childImageSharp.fluid}
        />
        <div className="mission__values">
          {data.values.map((item, index) => {
            return <ImageElement key={index} data={item} />
          })}
        </div>
      </div>
    </section>
  )
}

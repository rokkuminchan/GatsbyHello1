import React from "react"
import Img from "gatsby-image"
import "./Vision.css"
import ValueList from "./ValueList"

export default function Vision({ data }) {
  return (
    <section className="vision">
      <div className="vision__introduction">
        <h3 className="vision__title">{data.title}</h3>
        <p className="vision__description">{data.description}</p>
      </div>
      <div className="vision__value-list">
        <ValueList data={data.values} />
      </div>
    </section>
  )
}

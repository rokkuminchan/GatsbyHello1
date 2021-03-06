import React from "react"
import Card from "../components/Card.js"
import "./TechnologyList.css"

const TechnologyList = ({ data }) => {
  return (
    <section className="technology-list">
      {data.map((techonology, index) => {
        return <Card key={index} data={techonology} />
      })}
    </section>
  )
}

export default TechnologyList

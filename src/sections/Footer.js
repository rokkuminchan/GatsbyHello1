import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import hinh from "../images/6.jpg"
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "grid",
    height: "100vh",
    width: "100vw",
    gridTemplateColumns: `"1.fr 1.fr"`,
    gridTemplateRows: `"1fr 1fr"`,
    gridTemplateAreas: `
            "text image"
            "info image"
        `,
    overflow: "hidden",
  },
  text: {
    gridArea: "text",
    background: "#A4DAD2",
  },
  info: {
    gridArea: "info",
    background: "#BBE9EF",
  },
  image: {
    position: "relative",
    gridArea: "image",
  },
  image1: {
    position: "absolute",
    gridArea: "image1",
    background: "#A4DAD2",
    width: "100%",
    height: "50%",
    top: "0%",
    left: "0%",
  },
  image2: {
    position: "absolute",
    background: "#BBE9EF",
    width: "100%",
    height: "50%",
    top: "50%",
    left: "0%",
  },
  hinh: {
    position: "absolute",
    width: "50%",
    height: "80%",
    top: "50%",
    left: "50%",
    transform: `translate(-50%,-50%)`,
    objectFit: "cover",
    zIndex: 10,
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
}))

function Fotter() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.text}></div>
      <div className={classes.info}></div>
      <div className={classes.image}>
        <div className={classes.hinh}>
          <img src={hinh}></img>
        </div>

        <div className={classes.image1}></div>
        <div className={classes.image2}></div>
      </div>
    </div>
  )
}

export default Fotter

import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ImageList, Image } from "./BackgroundImageSlider.styles"
import image1 from "../../images/1.jpg"
import image2 from "../../images/2.jpg"
import image3 from "../../images/3.jpg"
import image4 from "../../images/4.jpg"
import image5 from "../../images/5.jpg"
import image6 from "../../images/6.jpg"

const images = [image1, image2, image3, image4, image5, image6]

function BackgroundImageSlider() {
  useEffect(() => {
    let animation = gsap.timeline({ repeat: 20 })
    let targets = document.querySelectorAll(".slider div img")
    let numberOfTargets = targets.length
    let duration = 5
    let pause = 0.75

    let stagger = duration + pause
    let repeatDelay = stagger * (numberOfTargets - 1) + pause

    gsap.set(".slider", { autoAlpha: 1 })
    animation
      .from(targets, {
        yPercent: 0,
        scale: 1.05,
        duration: duration,
        autoAlpha: 0,
        ease: "power3.out",
        stagger: {
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay,
        },
      })
      .to(
        targets,
        {
          y: 0,
          scale: 1.1,
          autoAlpha: 0,
          duration: duration,
          delay: -2,
          ease: "power3.inOut",
          stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay,
          },
        },
        stagger
      )
  }, [])

  return (
    <div>
      <ImageList className="slider">
        {images.map((image, index) => {
          return (
            <Image key={index}>
              <img src={image} alt=""></img>
            </Image>
          )
        })}
      </ImageList>
    </div>
  )
}

export default BackgroundImageSlider

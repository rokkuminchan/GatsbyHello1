import React, { useRef, useEffect } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import University from "./University"
import {
  Wrapper,
  Container,
  UniversitiesList,
  Row,
  BookmarkList,
  Bookmark,
} from "./UniversityList.styles"

gsap.registerPlugin(ScrollTrigger)

const UniversityList = props => {
  let bookmarkRef = useRef(null)
  let rowRef = useRef(null)
  let universityRefs = useRef([])
  universityRefs.current = []
  
  const addToRefs = (el) => {
      if (el && !universityRefs.current.includes(el)) {
          universityRefs.current.push(el)
      }
  }

  useEffect(() => {
    const university = gsap.utils.toArray(universityRefs.current)
    university.forEach(el => {
        const section = el.querySelectorAll('div')
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "80% center",
            }
        })
        tl.from (section, {xPercent: "-20", autoAlpha: 0, ease: "power3.out", stagger: {
            from: "start", each: .1
          }},0)
    })
    
    ScrollTrigger.create({
        trigger: bookmarkRef,
        start: "top 30%",
        end: () => `+=${rowRef.clientHeight/1.45}`,
        pin: true,
    });
  },[])
  return (
    <Wrapper className="wrapper">
      <Container>
        <UniversitiesList>
          <Row ref={el => (rowRef = el)}>
            {props.data.universityItems.map((item, index) => {
              return(
                <div key = {index} ref={addToRefs}>
                   <University item = {item} index ={index} />         
                </div>
              )
            })}
          </Row>
          <BookmarkList>
            <div id="bookmark" ref={el => (bookmarkRef = el)}>
                <Bookmark>
                    <span>W</span>
                    <span>O</span>
                    <span>R</span>
                    <span>L</span>
                    <span>D</span>
                </Bookmark>
                <Bookmark inner>
                    <span>W</span>
                    <span>O</span>
                    <span>R</span>
                    <span>K</span>
                    <span>S</span>
                </Bookmark>
                </div>
        </BookmarkList>
        </UniversitiesList>
      </Container>
    </Wrapper>
  )
}

export default UniversityList

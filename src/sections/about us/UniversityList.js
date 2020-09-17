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
  return (
    <Wrapper className="wrapper">
      <Container>
        <UniversitiesList>
          <Row>
            {props.data.universityItems.map((item, index) => {
              return <University key={index} item={item} index={index} />
            })}
          </Row>
          <BookmarkList>
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
          </BookmarkList>
        </UniversitiesList>
      </Container>
    </Wrapper>
  )
}

export default UniversityList

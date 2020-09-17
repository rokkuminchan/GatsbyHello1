import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"

export const UniversityInner = styled.div(props => ({
    display: "grid",
    width: "100%",
    alignItems: "center",
    gridTemplateAreas: props.index%2 === 0 ? `"image text"` : `"text image"`,
    gridTemplateColumns: `1.5fr minmax(1fr, max-content)`,
    marginBottom: "200px",
     [mq[2]]: {
         alignItems: "start",
         gridTemplateAreas: `"image" "text"`,
         gridTemplateColumns: "1fr",
         gridAutoRows: 'minmax(1fr max-content)',
         gridGap: "200px",
         marginBottom: "200px",
     },
     [mq[0]]: {
        gridGap: "250px",
     },
     
 }))
 
export const UniversityImage = styled.div({
     gridArea: "image",
     position: "relative",
 })
 
export const UniversityImageInner = styled.div(props => ({
     position: "relative",
     height: 0,
     paddingBottom: "56.25%",
     [mq[2]]: {
         paddingBottom: "66.25%",
     },
     [mq[0]]: {
         paddingBottom: "96.25%",
     },
     '&>*': {
         width: props.index%2 === 0 ? "50%" : "55%",
         height: "60%",
         position: "absolute",
         top: "50%",
         left: props.index%2 === 0 ? "52%" : "50%",
         transform: `translate(-50%,-50%)`,
         objectFit: "cover",
         borderRadius: props.index%2 === 0 ? "25px 0 0 25px" : "0 25px 25px 0",
         [mq[2]]: {
             width: "60%",
             height: props.index%2 === 0 ? "60%": "60%",
             left: props.index%2 === 0 ? "60%" : "50%",
         },
     }
 }))
 
export const UniversityImageBackground = styled.div(props => ({
     
     display: "flex",
     flexDirection: "column",
     width: "40%",
     height: "100%",
     position: "absolute",
     top: "50%",
     left: props.index%2 === 0 ? "40%" : "65%",
     transform: `translate(-50%,-50%)`,
     '& div:first-of-type': {
         width: "100%",
         height: "50%",
         background: props.color[0],
         border: 0
     },
     '& div:last-child': {
         width: "100%",
         height: "50%",
         background: props.color[1],
         border: 0,
         marginTop: "-1px"
     },
     [mq[2]]: {
         height: "85%",
         width: "40%",
         left: props.index%2 === 0 ? "40%" : "68%"
     }
 }))
 
export const UniversityContent = styled.div(props => ({
     gridArea: "text",
     position: "relative",
     '&  > div': {
         position: "absolute",
         top: "50%",
         left: props.index%2 === 0 ? "35%" : "65%",
         transform: `translate(-50%,-50%)`,
         width: props.index%2 === 0 ? "100%" : "90%",
         color: "#000",
         textAlign: "justify",
         fontSize: "24px",
         fontWeight: 500,
         letterSpacing: "1px",
         [mq[2]]: {
             left: "50%",
             width: "90%",
             padding: "0 24px",
             fontSize: "10px",
         },
     }
 }))
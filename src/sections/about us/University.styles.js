import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"

export const UniversityInner = styled.div(props => ({
    display: "grid",
    width: "100%",
    alignItems: "center",
    gridTemplateAreas: props.index%2 === 0 ? `"image text"` : `"text image"`,
    gridTemplateColumns: "1.3fr 1fr",
    gridAutoRows: `minmax(1fr min-content)`,
    marginBottom: 0,
    [mq[2]]: {
        alignItems: "start",
        gridTemplateAreas: `"image" "text"`,
        gridTemplateColumns: "1fr",
        gridAutoRows: 'minmax(1fr, max-content)',
        gridGap: "80px",
        marginBottom: "150px",
    },
    [mq[1]]: {
        gridGap: "150px",
        marginBottom: "100px",
    },
    [mq[0]]: {
        marginBottom: "130px",
    },
 }))
 
export const UniversityImage = styled.div({
     gridArea: "image",
     position: "relative",
 })
 
export const UniversityImageInner = styled.div(props => ({
     position: "relative",
     paddingBottom: "56.25%",
     [mq[2]]: {
         paddingBottom: "66.25%",
     },
     [mq[0]]: {
         paddingBottom: "96.25%",
     },
     '&>*': {
        width: "50%",
         height: "60%",
         position: "absolute",
         top: "50%",
         left: props.index%2 === 0 ? "52%" : "50%",
         transform: props.index%2 === 0 ? `translate(-50% ,75%)` : `translate(-50% ,85%)`,
         objectFit: "cover",
         borderRadius: props.index%2 === 0 ? "25px 0 0 25px" : "0 25px 25px 0",
         [mq[2]]: {
            width: "60%",
            height: props.index%2 === 0 ? "60%": "60%",
            left: props.index%2 === 0 ? "60%" : "50%",
            transform: props.index%2 === 0 ? `translate(-55% ,60%)` : `translate(-45% ,70%)`,
        },
        [mq[0]]: {
            width: "60%",
            height: props.index%2 === 0 ? "60%": "60%",
            left: props.index%2 === 0 ? "60%" : "50%",
            transform: props.index%2 === 0 ? `translate(-55% ,90%)` : `translate(-45% ,110%)`,
        },
     }
 }))
 
export const UniversityImageBackground = styled.div(props => ({
     
     display: "flex",
     flexDirection: "column",
     width: "40%",
     height: "65%",
     position: "absolute",
     top: "50%",
     left: props.index%2 === 0 ? "40%" : "65%",
     transform: `translate(-50%,-50%)`,
     [mq[2]]: {
        height: "65%",
        width: "50%",
        left: props.index%2 === 0 ? "45%" : "70%",
        top: "45%"
    },
    [mq[0]]: {
        height: "45%",
        width: "45%",
        left: props.index%2 === 0 ? "40%" : "70%",
        top: "45%"
    },
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
     
 }))
 
export const UniversityContent = styled.div(props => ({
     gridArea: "text",
     position: "relative",
     '& > div': {
         position: "absolute",
         paddingTop: "150px",
         top: "50%",
         left: props.index%2 === 0 ? "40%" : "65%",
         transform: `translate(-50%,-62%)`,
         width: props.index%2 === 0 ? "120%" : "90%",
         [mq[2]]: {
             left: "50%",
             width: "90%",
             padding: 0,
         },
         [mq[1]]: {
            transform: `translate(-50%,-75%)`,
        },
         [mq[0]]: {
            transform: `translate(-50%,-65%)`,
        },
     }
 }))
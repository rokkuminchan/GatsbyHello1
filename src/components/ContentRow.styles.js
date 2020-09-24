import styled from '@emotion/styled'
import {mq} from "../helper/mediaQuery"

export const Title = styled.span({
    display: "flex",
    alignItems: "flex-start",
    color: "#fff",
     '& svg': {
         marginRight: "10px",
     },
     '& p': {
        margin: "0 0 15px 0",
        padding: 0,
         fontSize: "1.2em",
         fontWeight: 520,
         letterSpacing: "2px",
         [mq[2]]: {
            fontSize: "0.9em",
        },
     }
 })
 
 export const Subtitle = styled.div({
     textAlign: "left",
     color: "#fff",
     '& p': {
        margin: "0 0 15px 0",
        padding: 0,
         fontSize: "1em",
         fontWeight: 400,
         letterSpacing: "1px",
         lineHeight: 1.7,
         textAlign: "justify",
         [mq[2]]: {
            fontSize: "0.8em",
        },
     }
 })
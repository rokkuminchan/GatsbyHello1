import styled from '@emotion/styled'
import {mq} from "../helper/mediaQuery"

export const Title = styled.span({
    display: "flex",
    alignItems: "center",
    color: "#fff",
     '& svg': {
         marginRight: "10px",
     },
     '& p': {
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
     marginBottom: "14px",
     '& p': {
         fontSize: "1em",
         fontWeight: 400,
         letterSpacing: "1px",
         lineHeight: 2,
         textAlign: "justify",
         [mq[2]]: {
            fontSize: "0.8em",
        },
     }
 })
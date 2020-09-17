import styled from '@emotion/styled'

export const Title = styled.span({
    display: "flex",
    alignItems: "center",
    color: "#fff",
     '& svg': {
         marginRight: "10px",
     },
     '& p': {
         fontSize: "25px",
         fontWeight: 520,
         letterSpacing: "2px"
     }
 })
 
 export const Subtitle = styled.div({
     textAlign: "left",
     color: "#fff",
     marginBottom: "14px",
     '& p': {
         fontSize: "18px",
         fontWeight: 500,
         textAlign: "justify",
     }
 })
import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"

export const Wrapper = styled.div({
   display: "grid",
//    width: "100vw",
   gridTemplateAreas: `
        "logo background1"
        "content background2"
   `,
   gridTemplateColumns: "1.3fr 1.5fr",
   gridTemplateRows: "0.3fr 0.7fr",
   fontSize: "16px",
   fontWeight: 700,
   [mq[1]]: {
        gridTemplateAreas: `
            "logo"
            "content"
            "background1"
            "background2"
        `,
        gridTemplateColumns: "1fr",
        gridTemplateRows: "0.1fr 0.1fr 0.5fr 0.5fr"
    },
    [mq[2]]: {
        gridTemplateAreas: `
            "logo"
            "content"
            "background1"
            "background2"
        `,
        gridTemplateColumns: "1fr",
        gridTemplateRows: "0.1fr 0.1fr 0.7fr 0.7fr"
    },

})

export const LogoInner = styled.div({
   gridArea: "logo",
   background: "#f8fcff",
   position: "relative",
   width: "100%",
   height: "300px",
    [mq[2]]: {
        height: "250px",
    },
    [mq[1]]: {
        height: "200px",
    },
    [mq[0]]: {
        height: "200px",
    },
    // [mq[3]]: {
    //     height: "280px",
    // },
})

export const Logo = styled.div(props => ({
    position: "absolute",
    fontSize: "5em",
    color: props.upper ? "#fff" : "#053C76",
    top: props.upper ? "62%" : "70%",
    left: props.upper ? "50%" : "49%",
    transform: `translate(-50%, -50%)`,
    [mq[1]]: {
        fontSize:"3em"
    },
    [mq[2]]: {
        top: props.upper ? "40%" : "52%",
        left: props.upper ? "50%" : "49%",
        fontSize:"4em"
    },
    [mq[3]]: {
        fontSize:"3em",
    },
    '& p': {
        textShadow: props.upper ? `
            -1px -1px 0 #C3C6C6,
            1px -1px 0 #C3C6C6,
            -1px 1px 0 #C3C6C6,
            1px 1px 0 #C3C6C6
        `: "none"
    }
 }))

export const Content = styled.div({
   background: "#0c625e",
   gridArea: "content",
   fontSize: "16px",
   fontWeight: 700,
   position: "relative",
   [mq[2]]: {
        background: "#f8fcff",
        height:"50%"
    },
    [mq[0]]: {
        background: "#f8fcff",
        height:"70px",
        bottom:"40px"
    },
   '& p': {
       width: "70%",
       margin: "auto",
       color: "#fff",
       textAlign: "justify",
       position: "absolute",
       top: "40%",
       left: "50%",
       transform: `translate(-50%, -50%)`,
       
    //    [mq[0]]: {
    //     fontSize:"0.9em",
    //     },
       [mq[1]]: {
            color: "#17427A",
            left: "50%",
            top:"20%",
            fontSize:"1em"
        },
    
        [mq[2]]: {
            color: "#17427A",
            top: "100%",
            fontSize:"1em",
        },
        [mq[3]]: {
   
        },
   }

})

export const Background1 = styled.div({
   gridArea: "background1",
   background: "#f8fcff",
   
})

export const Background2 = styled.div({
    gridArea: "background2",
    background: "#0c625e",
    [mq[1]]: {
      
    }
})

export const Image = styled.div({
    gridRow: `background1-start / background2-end`,
    gridColumn: `background1-start / background2-end`,
    width: "70%",
    position: "relative",
    paddingBottom: "50%",
    overflow: "hidden",
    top: "15%",
    left:"15%",
    marginBottom:"0",
    objectFit:"cover",
    [mq[1]]: {
        top:"25%",
        width: "80%",
        left:"10%"
    },
    [mq[2]]: {
        paddingBottom:"40%",
    },
    [mq[0]]: {
        top:"18%",
    },
    [mq[3]]: {
        top:"20%",
    },
})
import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery"
export const Wrapper = styled.header({
    [mq[2]]: {
        padding: "0 20px",
    },
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    padding: "0 100px",
    width: "100vw",
    boxSizing: "border-box",
    background: `rgba(0,0,0,.3)`,
    '& nav': {
        [mq[2]]: {
            display: "none",
        },
        marginRight: "-50px",
        '& ul': {
            margin: 0,
            padding: 0,
            display: "flex",
            '& li': {
                listStyle: "none",
                '& a': {
                    position: "relative",
                    height: "50px",
                    lineHeight: "50px",
                    margin: "10px 0px",
                    padding: "0 20px",
                    color: "#fff",
                    textDecoration: "none",
                    display: "block",
                    textShadow: `0 2px 5px rgba(0,0,0,.5)`,
                    fontWeight: "bold",
                    '&::before': {
                        content: `' '`,
                        position: "absolute",
                        bottom: "5px",
                        left: "10px",
                        width: "100%",
                        height: "5px",
                        background: "#A3C6FA",
                        zIndex: "-1",
                        transform: `scaleX(0)`,
                        transformOrigin: "left",
                        transition: `transform 0.5s`,
                        zIndex: 99
                    },
                    '&:hover::before' : {
                        transform: `scaleX(1)`,
                        zIndex: 99
                    }
                }
            }
        }
    },
})
export const Logo = styled.div({
    margin: "10px 0 0px -80px",
    [mq[2]]: {
        margin: "10px 10px 0 10px"
    },
})
export const ToggleButton = styled.div({
   '& svg':{
        position: "fixed",
        right: "2%",
        top: "2%",
        padding: "5px",
        cursor: "pointer",
        fontSize: "45px",
        display: "none",
        zIndex: 99,
        [mq[2]]: {
            display: "flex",
            zIndex: 99,
        },
    }
})
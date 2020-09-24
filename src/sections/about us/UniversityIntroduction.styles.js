import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"

export const Wrapper = styled.div({
    background: "#0c625e",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

export const Title = styled.div({
    border: `10px solid #D5EEFD`,
    background: "#fff",
    color: "#053C76",
    padding: "24px 70px",
    marginBottom: "5vh",
    [mq[0]]: {
        padding: "14px 30px",
    },
    '& h1':{
        fontSize: "25px",
        fontWeight: 700,
        position: "relative",
        zIndex: 1,
        [mq[0]]: {
            fontSize: "20px",
        },
        '&::before': {
            display: "block",
            position: "absolute",
            bottom: "0%",
            left: "-10%",
            content: `''`,
            width: "120%",
            height: "15px",
            transform: `translateY(-50%)`,
            backgroundColor: "#F3EF55",
            zIndex: "-1",
            [mq[0]]: {
                height: "10px",
            },
        }
    }
})

export const Description = styled.div({
    color: "#fff",
    width: "60%",
    margin: "0 auto",
    marginBottom: "50px",
    '& p': {
        fontSize: "1em",
        fontWeight: 500,
        letterSpacing: "3px",
        lineHeight: 2,
        margin: "24px 0",
        [mq[2]]: {
            fontSize: "0.8em",
        },
    }
})

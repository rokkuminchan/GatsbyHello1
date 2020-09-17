import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery"

export const Wrapper = styled.div({
    position: "relative",
    display: "grid",
    height: "90vh",
    width: "100vw",
    backgroundColor: `rgba(10,34,93,1)`,
    gridTemplateColumns: `1.5fr 3fr 1.5fr`,
    gridTemplateRows: `10fr 1fr`,
    gridTemplateAreas: `
        "left center right"
        "copyright copyright copyright"
    `,
    overflow: "hidden",
    [mq[2]]: {
        height: "100vh",
        gridTemplateAreas: `
        "center"
        "right"
        "left"
        "copyright"
        `,
        gridTemplateRows: `"1fr 1fr 1fr 0.8fr"`,
        gridTemplateColumns: "unset",
    }
})

export const Shape = styled.div({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    overflow: "hidden",
    lineHeight: 0,
    '& svg': {
        position: "relative",
        display: "block",
        height: "90vh",
        width: `calc(132% + 1.3px)`,
        '& path:first-of-type': {
            fill: `rgba(10,34,93,.1)`
        },
    }
})

export const Left = styled.div({
    gridArea: "left",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [mq[2]]: {
        flexDirection: "row",
    },
    '& span':{
        [mq[2]]: {
            marginRight: "20px",
        },
    },
    '&::before': {
        display: "block",
        position: "absolute",
        top: "50%",
        right: 0,
        content: `''`,
        width: "1px",
        height: "20vh",
        transform: `translateY(-50%)`,
        backgroundColor: "#fff",
        
    },
    '&>*':{
        marginBottom: "5vh",
    },
    '& span:first-of-type': {
        fontSize: "2.1em",
        fontWeight: 600,
        letterSpacing: "2px",
        color: "#fff",
        [mq[2]]: {
            display: "none"
        },
    }
})

export const Center = styled.div({
    gridArea: "center",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    [mq[2]]: {
        justifyContent: "center",
    },
    '&::before': {
        display: "block",
        position: "absolute",
        top: "50%",
        right: 0,
        content: `''`,
        width: "1px",
        height: "20vh",
        transform: `translateY(-50%)`,
        backgroundColor: "#fff"
    },
    '& div:first-of-type':{
        margin: 0,
        [mq[2]]: {
            margin: "5vh 0",
        },
    },
    '& span:nth-of-type(1)': {
        fontSize: "2.1em",
        fontWeight: 600,
        letterSpacing: "2px",
        color: "#fff",
    },
    '& div:last-of-type': {
        display: "flex",
        flexDirection: "column",
        [mq[2]]: {
            display: "none"
        },
        '& p': {
            fontSize: "1.3em",
            fontWeight: 600,
            letterSpacing: "2px",
            color: "#fff",
            paddingBottom: "7px"
        }
    },
})

export const Right = styled.div({
    gridArea: "right",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 0,
    [mq[2]]: {
        alignItems: "flex-start",
        paddingLeft: "5vh",
    },
    '&>*':{
        marginBottom: "5vh",
        fontSize: "1.7em",
        fontWeight: 500,
        letterSpacing: "2px",
        color: "#fff",
        [mq[2]]: {
            position: "relative",
            width: "100%",
        },    
        '&:before':{
            display: "none",
            [mq[2]]: {
                display: "block",
                position: "absolute",
                bottom: "-5px",
                left: "-5vw",
                content: `''`,
                width: "100vw",
                height: "1px",
                transform: `translateY(-50%)`,
                backgroundColor: "#fff"
            },
        }
    },
    '& span:first-of-type': {
        fontSize: "2.1em",
        fontWeight: 600,
        [mq[2]]: {
            fontSize: "1.7em",
            fontWeight: 500,
            letterSpacing: "2px",
        },
    }
})

export const Copyright = styled.div({
    gridArea: "copyright",
    fontSize: "1.3em",
    fontWeight: 600,
    color: "#fff",
    textAlign: "center",
    marginBottom: 0,
    [mq[2]]: {
        padding: "0 24px",
        marginBottom: "5vh",
        lineHeight: 2,
    },
})
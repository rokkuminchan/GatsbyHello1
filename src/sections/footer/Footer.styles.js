import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery"

export const Wrapper = styled.div({
    position: "relative",
    display: "grid",
    height: "90vh",
    width: "100vw",
    backgroundColor: `rgba(10,34,93,1)`,
    gridTemplateColumns: `1fr 3fr 1fr`,
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
        gridTemplateRows: `"1fr 5fr 1fr 0.8fr"`,
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
        height: "30vh",
        transform: `translateY(-50%)`,
        backgroundColor: "#fff",
        
    },
    '&>*':{
        marginBottom: "5vh",
    },
    '& span:first-of-type': {
        fontSize: "1.5em",
        fontWeight: 500,
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
    justifyContent: "center",
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
        height: "30vh",
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
        fontSize: "1.5em",
        fontWeight: 600,
        letterSpacing: "2px",
        color: "#fff",
        marginBottom: "100px",
        [mq[2]]: {
            fontSize: "1.5em",
            marginBottom: 0,
        },
    },
    '& div:last-of-type': {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [mq[2]]: {
            display: "none"
        },
        '& p': {
            fontSize: "1em",
            fontWeight: 600,
            letterSpacing: "2px",
            color: "#fff",
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
    marginBottom: 0,
    [mq[2]]: {
        alignItems: "flex-start",
        paddingLeft: "5vh",
        marginBottom: "30px",
    },
    '&>*':{
        marginBottom: "5vh",
        fontSize: "1.5em",
        fontWeight: 500,
        letterSpacing: "2px",
        color: "#fff",
        [mq[2]]: {
            position: "relative",
            width: "100%",
            fontSize: "1em",
        },    
        '&:before':{
            display: "none",
            [mq[2]]: {
                display: "block",
                position: "absolute",
                bottom: "-5px",
                left: "-9vw",
                content: `''`,
                width: "100vw",
                height: "1px",
                transform: `translateY(-50%)`,
                backgroundColor: "#fff"
            },
        }
    },
    '& span:first-of-type': {
        fontSize: "1.5em",
        fontWeight: 500,
        [mq[2]]: {
            fontSize: "1em",
            letterSpacing: "2px",
        },
    }
})

export const Copyright = styled.div({
    gridArea: "copyright",
    fontSize: "1em",
    fontWeight: 600,
    color: "#fff",
    textAlign: "center",
    [mq[2]]: {
        padding: "0 24px",
        lineHeight: 2,
        fontSize: "0.8em",
    },
    '& p': {
        marginBottom: 0,
    }
})
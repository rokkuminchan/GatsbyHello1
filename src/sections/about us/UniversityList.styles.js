import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"
export const Wrapper = styled.div({
    width: "100vw",
    overflow: "hidden",
    
})

export const Container = styled.div({
    width: "100%",
    background: "#0C625E",
})

export const UniversitiesList = styled.div({
    display: "grid",
    gridTemplateAreas: `"list bookmark"`,
    gridTemplateColumns: `1fr 0.1fr`,
    gridAutoRows: "1fr",
    position: "relative"
})

export const Row = styled.div({
    gridArea: "list",
})

export const BookmarkList = styled.div({
    gridArea: "bookmark",
    '& div': {
        position: "relative",
        display: "flex",
    }
})

export const Bookmark = styled.div(props => ({
    position: "absolute",
    width: "2px",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    right: props.inner ? "-45%" : "-75%",
    top: "20%",
    [mq[0]]: {
        right: props.inner ? "-10%" : "-70%",
    },
    '&::before': {
        position: "absolute",
        left: "1px",
        top: "250px",
        content: `''`,
        width: "1px",
        height: props.inner ? "100px": "170px",
        background: "#fff",
        [mq[2]]: {
            top: "190px",
        },
        [mq[0]]: {
            top: "160px",
            height: props.inner ? "70px": "120px",
        },
        },
    '& span': {
        marginBottom: "25px",
        fontWeight: 600,
        fontSize: "1em",
        color: "#fff",
        transform: `rotate(90deg)`,
        [mq[2]]: {
            marginBottom: "10px",
            fontSize: "0.8em",
            fontWeight: 400,
        },
    }
}))
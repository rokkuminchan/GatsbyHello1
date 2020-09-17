import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"
export const Wrapper = styled.div({
    width: "100vw",
    overflow: "hidden"
})

export const Container = styled.div({
    width: "100%",
    background: "#0C625E",
})

export const UniversitiesList = styled.div({
    display: "grid",
    gridTemplateAreas: `"list bookmark"`,
    gridTemplateColumns: `1fr 0.1fr`,
})

export const Row = styled.div({
        gridArea: "list"
})

export const BookmarkList = styled.div({
    gridArea: "bookmark",
    position: "relative",
})

export const Bookmark = styled.div(props => ({
    position: "absolute",
    width: "2px",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    right: props.inner ? "30px" : "70px",
    top: "10vh",
    [mq[2]]: {
        right: props.inner ? "30px" : "60px",
    },
    '&::before': {
        position: "absolute",
        left: "1px",
        top: "230px",
        content: `''`,
        width: "1px",
        height: props.inner ? "170px": "100px",
        background: "#fff",
      
        },
    '& span': {
        marginBottom: "25px",
        fontWeight: 700,
        fontSize: "15px",
        color: "#fff",
        transform: `rotate(90deg)`,
        [mq[2]]: {
            marginBottom: "15px",
            fontSize: "10px",
        },
    }
}))
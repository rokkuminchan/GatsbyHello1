import styled from '@emotion/styled'

export const ImageList = styled.ul({
    position: "relative",
    height: 0,
    width: "100vw",
    paddingBottom: "66.25%",
    overflow: "hidden",  
    marginLeft: 0, 
})
export const Image = styled.div({
    position: "absolute",
    overflow: "hidden",  
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    '&>*' :{
        position: "absolute",
        overflow: "hidden",  
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
        objectFit: "cover",
    }
})
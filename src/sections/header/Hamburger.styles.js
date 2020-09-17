import styled from '@emotion/styled'
export const HamburgerMenu = styled.div({
    display: "none",
    position: "fixed",
    zIndex: "99",
    top :0,
    left: 0,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
})

export const MenuSecondaryBackgroundcolor = styled.div({
    background: `rgba(255,255,255,.9)`,
    position: "fixed",
    top :0,
    left: 0,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    zIndex: "-1",
})

export const MenuLayer = styled.div({
    position: "relative",
    background: `rgba(91,177,207,.9)`,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
})

export const MenuLinks = styled.div({
    position: "relative",
    top: "20vh",
    '& nav': {
        '& ul': {
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            '& li': {
                width: "100%",
                listStyle: "none",
                cursor: "pointer",
                height: "15vh",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                '& a': {
                    position: "absolute",
                    '& span': {
                        fontSize: "30px",
                        fontWeight: 700,
                        letterSpacing: "3px",
                        color: "#fff",
                        display: "inline-block",
                        transition: `all 0.7s`,
                    },
                    '& span:nth-of-type(1)':{
                        backgroundImage: `linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0))`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        '&:hover':{
                            opacity: 0,
                        }
                    },
                    '& span:nth-of-type(2)':{
                        position: "absolute",
                        left: 0,
                        opacity: 0,
                        '&:hover':{
                            opacity: 1,
                        }
                    }
                }    
            }
        }
    }
})

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { MenuOpenRounded, CloseOutlined } from "@material-ui/icons"
import IconButton from "@material-ui/core/IconButton"
import AppBar from "@material-ui/core/AppBar"
import World from "../../images/logo.png"
import Hamburger from "./Hamburger"
import BackgroundImageSlider from "./BackgroundImageSlider"
import { Wrapper, Logo, ToggleButton } from "./Header.styles"

function Header({ history }) {
  const menuOpenIcon = (
    <ToggleButton>
      <MenuOpenRounded color="primary" />
    </ToggleButton>
  )
  const menuCloseIcon = (
    <ToggleButton>
      <CloseOutlined color="primary" />
    </ToggleButton>
  )
  const items = [
    { id: "/", name: "Home" },
    { id: "/service", name: "Services" },
    { id: "/technology", name: "Technology" },
    { id: "/contact", name: "Contact" },
    { id: "/about", name: "About us" },
  ]
  const NavLinkItem = props => {
    const { id, name } = props.item
    return (
      <li>
        <Link to={id}>{name}</Link>
      </li>
    )
  }
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuIcon: menuOpenIcon,
  })
  const [disabled, setDisabled] = useState(false)

  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1000)
  }

  const handleMenu = () => {
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuIcon: menuCloseIcon,
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuIcon: menuOpenIcon,
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuIcon: menuCloseIcon,
      })
    }
  }

  useEffect(() => {
    // history.listen(() => {
    //   setState({ clicked: false, menuIcon: menuOpenIcon })
    // })
  }, [history])
  return (
    <React.Fragment>
      <AppBar position="fixed" color="transparent">
        <section>
          <Wrapper>
            <Logo>
              <a href="#">
                <img src={World}></img>
              </a>
            </Logo>
            <IconButton disabled={disabled} onClick={handleMenu}>
              {state.menuIcon}
            </IconButton>
            <nav id="sidebar">
              <ul>
                {items.map((item, index) => (
                  <NavLinkItem key={index} item={item} />
                ))}
              </ul>
            </nav>
          </Wrapper>
        </section>
      </AppBar>
      <BackgroundImageSlider />
      <Hamburger state={state} />
    </React.Fragment>
  )
}

export default Header

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
    staggerText,
    staggerReveal,
    staggerRevealClose
} from "./Animation";

import {
    HamburgerMenu,
    MenuSecondaryBackgroundcolor,
    MenuLayer,
    MenuLinks,
} from "./Hamburger.styles"

const items= [
    {id: '/', name: "Home"},
    {id: '/service', name: "Services"},
    {id: '/technology', name: "Technology"},
    {id: '/contact', name: "Contact"},
    {id: '/about', name: "About us"}
]
  

function Hamburger ({ state }) {
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);

    let navLinkRefs = useRef([])
    navLinkRefs.current = []

    const addToRefs = (el) => {
        if (el && !navLinkRefs.current.includes(el)) {
            navLinkRefs.current.push(el)
        }
    }

    const NavLinkItem = (props) => {
        const {id, name} = props.item
        return (
            <li>
                <Link
                ref={addToRefs}
                to={id}>
                    <span>{name}</span>
                    <span>{name}</span>
                </Link>
            </li>
        )
    }

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.

            staggerRevealClose(reveal2, reveal1);
            // Set menu to display none
            gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuLayer, { duration: 0, css: { display: "flex" } });
            //Allow menu to have height of 100%
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            
                staggerReveal(reveal1, reveal2)
            const navLinks= gsap.utils.toArray(navLinkRefs)
                staggerText(navLinks[0].current)
            }
        }, [state]);
    return (
        <HamburgerMenu ref={el => (menuLayer = el)}>
            <MenuSecondaryBackgroundcolor ref={el => (reveal1 = el)}></MenuSecondaryBackgroundcolor>
            <MenuLayer ref={el => (reveal2 = el)}>
                    <MenuLinks>
                        <nav>
                            <ul>
                            {
                                items.map((item, index) => <NavLinkItem key = {index} item = {item} />)
                            }
                            </ul>
                        </nav>
                    </MenuLinks>
            </MenuLayer>
        </HamburgerMenu>
    )
}

  export default Hamburger
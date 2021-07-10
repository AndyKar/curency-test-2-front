import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import {Route} from "react-router-dom";

function Menu(props) {

    const navList = (categories) => {
        const linkList = Object.keys(props.categories).map((index1) => {
            const category = categories[index1]
            if(category.items.length) {
                return Object.keys(category.items).map((index2) => {
                    const item = category.items[index2]
                    return (
                        <NavItem key={'link' + item.item_id}>
                            <NavLink
                                href={item.href}
                                key={'link' + item.item_id}>

                                {item.name}
                            </NavLink>
                        </NavItem>
                    )
                })
            } else {
                return null
            }
        })
         return linkList
    }

    return (
        <Nav>
            {navList(props.categories)}
        </Nav>
    )
}
export default Menu;
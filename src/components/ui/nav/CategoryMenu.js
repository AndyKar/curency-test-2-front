import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import logom from "../../../image/molekula_red.png"

function CategoryMenu(props) {

    const navList = () => {

        const linkList = Object.keys(props.categories.children).map((index1) => {
            const category = props.categories.children[index1]
            return (
                <NavItem key={'cat' + category.category_id}>
                    <NavLink
                        href={category.href}
                        key={'catlink' + category.category_id}
                    >
                        <img width="30" className="category-img" src={ logom } />
                        {category.name}
                    </NavLink>
                </NavItem>
            )

        })
         return linkList
    }

    return (
        <Nav id="category" className="navbar nav navbar-nav" >
           { navList() }
        </Nav>
    )
}
export default CategoryMenu;

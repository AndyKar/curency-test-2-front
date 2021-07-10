import React from 'react'
import {Container, Row, Col, Input} from 'reactstrap';
import {Button, NavLink, ButtonGroup} from "reactstrap";
import './ContactsTable.scss'
import NotFound from "../NotFound/NotFound";

function ContactsTable(props){
    // const text = (prop) => {
    //     if(props.wish && props.language.wish){
    //         return props.language.wish[prop]
    //     } else if(props.language.cart){
    //         return props.language.cart[prop]
    //     }
    // }

    const deleteAll = () => {
        if(props.products) {
            if (props.wish) {
                props.deleteWishAll()
            } else {
                Object.keys(props.products).map((index) => {
                    const product = props.products[index]
                    props.deleteCartProduct(product.cart_id)
                })
            }
            return false
        }
    }

    const allWishToCart = () => {
        if(props.products) {
            Object.keys(props.products).map((index) => {
               props.wishToCart(props.products[index].product_id, parseInt(props.products[index].quantity))
            })
            return false
        }
        return false
    }

    const renderProducts = () => {
        if(props.products) {
            return Object.keys(props.products).map((index) => {
                const product = props.products[index]
                return (
                    <div key={'product-item-' + index} className="tr">
                        <div className="tr-group">
                            <div className="table-cell remove-cell">
                                <div className="td">
                                    {props.wish
                                        ? <span
                                            className="delete-product form-close"
                                            onClick={() => props.deleteWishProduct(product.product_id)}
                                            >
                                         </span>
                                        :<span
                                            className="delete-product form-close"
                                            onClick={() => props.deleteCartProduct(product.cart_id)}
                                            >
                                         </span>
                                    }
                                </div>
                            </div>

                            <div className="table-cell image-cell">
                                <div className="td">
                                    {product.thumb
                                        ? <a href={product.href}>
                                            <img src={product.thumb} alt={product.name} title={product.name}
                                                 className="img-thumbnail"/>
                                        </a>
                                        : null
                                    }
                                </div>
                            </div>

                            <div className="table-cell name-cell">
                                <div className="td">
                                    <a href={product.href}>
                                        {product.name}
                                        {product.model}
                                    </a>
                                </div>
                            </div>

                            <div className="table-cell quantity-cell">
                                <div className="td">
                                    <div className="quantity-control-wrap">
                                        <div
                                            className={'quantity-control quantity-control' + product.product_id + ' theme-border-button'}>
                                            {props.wish
                                                ? <span
                                                    className="minus noselect"
                                                    onClick={() => {
                                                        if (parseInt(product.quantity) > 1) {
                                                            props.updateWish(product.product_id, parseInt(product.quantity) - 1)
                                                        }
                                                    }}
                                                >‒</span>
                                                : <span
                                                    className="minus noselect"
                                                    onClick={() => {
                                                        if (parseInt(product.quantity) > 1) {
                                                            props.updateCart(product.cart_id, parseInt(product.quantity) - 1)
                                                        }
                                                    }}
                                                >‒</span>
                                            }
                                            <span
                                                id={'input-quantity' + product.product_id}
                                                className="input-quantity form-control"
                                                data-minval="1"
                                                data-maxval="100"
                                            >{ product.quantity }</span>
                                            {props.wish
                                                ? <span
                                                    className="minus noselect"
                                                    onClick={() => {
                                                        if (parseInt(product.quantity) < 100) {
                                                            props.updateWish(product.product_id, parseInt(product.quantity) + 1)
                                                        }
                                                    }}
                                                >+</span>
                                                : <span
                                                    className="minus noselect"
                                                    onClick={() => {
                                                        if (parseInt(product.quantity)  < 100) {
                                                            props.updateCart(product.cart_id, parseInt(product.quantity) + 1)
                                                        }
                                                    }}
                                                >+</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="td price">
                                    {product.price.split(' ', 2)[0]} &nbsp;
                                    {product.price.split(' ', 2)[1]} / {props.language.text_pcs}
                                </div>
                            </div>

                            <div className="table-cell total-cell">
                                <div className="td">
                                 <span className="producttotal" id={"product"+ product.product_id + "total"}>
                                      { product.total.split(' ', 2)[0] }
                                 </span>
                                    <span className="currency">
                                    { product.total.split(' ', 2)[1] }
                                </span>
                                </div>
                            </div>
                            {props.wish
                                ? <div className="table-cell card-cell">
                                    <div className="td">
                                        <button
                                            id={"wishToCart"+ product.product_id + "-" + product.quantity}
                                            type="button"
                                            className="wish-to-cart but-sm theme-border-button"
                                            onClick={() => {props.wishToCart(product.product_id, parseInt(product.quantity))}}
                                        >
                                            {props.language.button_cart}
                                        </button>
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                    </div>
                )
            })
        }
    }

    return(
        <React.Fragment>
            {props.products
                ? <React.Fragment>
                    {props.products && props.products.length
                        ? <div id="cart-table-wrap" className="product-cart-wrap main-theme-bg">
                            <div id="cart-table">
                                <div className="product-cart-table">
                                    <div className="tbody">
                                        {renderProducts()}
                                        <div className="tr bottom-tr">
                                            <div className="tr-group">
                                                <div className="table-cell all-del-cell">
                                                    <div className="td">
                                                         <span
                                                             id="delete-guest-all"
                                                             className="delete-wishlist"
                                                             onClick={() => deleteAll()}
                                                         >
                                                             <span className="form-close"></span>
                                                             <span>{props.language.button_remove_all}</span>
                                                         </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tr-group" style={{flex: '0 auto'}}>
                                                <div className="table-cell quantity-cell">
                                                    <div className="td">
                                                        <b>{props.language.text_total_value}</b>
                                                    </div>
                                                </div>

                                                <div className="table-cell total-cell">
                                                    <div className="td">
                                                        <span id="totalsumm">
                                                            {props.totalSum}
                                                        </span>
                                                    </div>
                                                </div>
                                                {props.wish
                                                    ? <div className="table-cell card-cell">
                                                        <div className="td">
                                                            <button
                                                                id="all-to-cart-guest"
                                                                type="button"
                                                                className="but-sm theme-border-button"
                                                                onClick={() => allWishToCart()}
                                                            >
                                                                {props.language.button_cart_all}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <NotFound
                            language={props.language}
                        />
                    }
                </React.Fragment>
                : null
            }
        </React.Fragment>
    )
}

export default ContactsTable
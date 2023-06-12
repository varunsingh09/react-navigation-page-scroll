import React, { useEffect } from "react"
import "./style.css"
import { scrollEvent } from "./util"

const ScrollPage = () => {

    useEffect(() => {
        scrollEvent();
    }, [])

    return (
        <>
            <div className="side-bar">
                <nav className="navigation">
                    <ul>
                        <li>
                            <a href="#about">About</a>
                            <a href="#products">Products</a>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                            <a href="#gallery">Gallery</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <section id="about">
                    <h1>About</h1>
                </section>
                <section id="products">
                    <h1>Products</h1>
                </section>
                <section id="services">
                    <h1>Services</h1>
                </section>
                <section id="contact">
                    <h1>Contact</h1>
                </section>
                <section id="gallery">
                    <h1>Gallery</h1>
                </section>
            </div>
        </>
    )
}
export default ScrollPage  
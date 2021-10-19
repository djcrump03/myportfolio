import React from 'react';
import './works.scss';

export default function Works() {

    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="./assets/mobile.png" alt=""/>
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                        <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                    />
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/arrowright.png" className="arrow left" alt=""/>
            <img src="assets/arrowright.png" className="arrow right" alt=""/>
        </div>
    )
}

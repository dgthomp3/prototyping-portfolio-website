import React from "react";
import './App.css';

export default function Bio() {
    return (
        <section className="biography">
            <div className="biography__wrapper">
                <div className="biography__sidebar">
                <img
                    src="/32C8D24E-B244-4AB9-A10B-6D8F554B51F3_1_201_a.jpeg"
                    alt="Dallas Thompson III"
                    className="biography__image"
                />
                <div className="biography__name">Dallas Thompson III</div>
                </div>
                <div className="biography__container">
                <p className="biography__text">
                    This is a Design Project Portfolio Website! Hey, I'm Dallas — a software engineer and aspiring UX researcher who blends code with curiosity. I thrive at the intersection of human behavior and technology, with a background in Computer Science and a Master’s focus in HCI/UX. Whether it's developing clean frontends or designing intuitive user flows, I love solving meaningful problems.
                </p>
                <p className="biography__text">
                    Outside of work, I'm an avid Knicks fan, I train Muay Thai, dive into new music, and play video games. I'm currently building tools that improve how people collaborate, discover, and engage; and always down for a good coffee chat about digital interfaces or your favorite form of media.
                </p>
                </div>
            </div>
        </section>
    )
}
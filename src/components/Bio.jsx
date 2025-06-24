import React from "react";

export default function Bio() {
    return (
        <section className="biography">
            <div className="biography__wrapper">
                <div className="biography__sidebar">
                    <img
                        src="32C8D24E-B244-4AB9-A10B-6D8F554B51F3_1_201_a.jpeg"
                        alt="Dallas Thompson III"
                        className="biography__image"
                    />
                    <div className="biography__name">Dallas Thompson III</div>
                    <div className="biography__title">
                        Builder of Clean Code<br />& Smooth Interfaces
                    </div>
                    <div className="contact-block">
                        <strong>Let's connect:</strong><br />
                        <a href="mailto:dgthomp96@gmail.com">dgthomp96@gmail.com</a><br />
                        <a href="https://www.linkedin.com/in/dallas-thompson-iii-93aa99a4/" target="_blank">LinkedIn</a> ·{' '}
                        <a href="https://github.com/dgthomp3" target="_blank">GitHub</a><br />
                        <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Latest Resume</a>
                    </div>
                </div>
                <div className="biography__container">
                    <p className="biography__text">
                        I'm Dallas! A software engineer, UX explorer, and design-minded builder of things that (hopefully) make life smoother.
                    </p>
                    <p className="biography__text">
                        My journey started with a Computer Science degree from Hampton University and evolved through pursuing a Master's in HCI/UX at Drexel University, where I became fascinated by how interfaces can shape behavior. I love working at the edge of interaction — voice command systems in the kitchen, real-time collaboration tools, or smart wearables — anything that pushes the boundary between user and machine.
                    </p>
                    <p className="biography__text">
                        Whether I'm building a sleek React app, prototyping with Figma, or wiring up cloud workflows, I'm driven by a simple goal: make tech feel human.
                    </p>
                    <p className="biography__text">
                        Outside of work, you'll find me sparring at Muay Thai class, chasing good design ideas over coffee, or diving into video games with friends, often wondering why more apps don't feel as intuitive as a great game menu.
                    </p>
                </div>
            </div>
        </section>
    );
};
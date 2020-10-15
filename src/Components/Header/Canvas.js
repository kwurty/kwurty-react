import React from 'react';
import './Canvas.scss'

class Canvas extends React.Component {

    componentDidMount() {
        const canvas = document.getElementById("canvas");
        const c = canvas.getContext("2d");
        const header = document.querySelector("header");
        let width = header.offsetWidth;
        let height = header.offsetHeight;
        let circles = []
        let colors = ["255, 255, 255"]


        function setDimensions(e) {
            width = header.offsetWidth;
            height = header.offsetHeight;
            canvas.width = width;
            canvas.height = height;

        }

        //Circle Prototype
        function Circle(x, y, radius, yd, xd, hue) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.yd = yd;
            this.xd = xd;
            this.hue = hue;
            this.outerAlpha = 0;
            this.flying = false;
            this.flyTime = 0;

            this.draw = function () {
                c.beginPath();
                c.fillStyle = `rgba(${this.hue},${this.outerAlpha})`;
                c.lineWidth = 1;
                c.strokeStyle = `rgba(${this.hue},${this.outerAlpha - .4})`;
                c.moveTo(this.x, this.y);
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.lineTo(this.x + this.xd * this.flyTime, this.y - this.yd * this.flyTime);
                c.stroke();
                c.fill();
            };

            // control the circle movement
            this.update = function () {
                let rng = Math.floor(Math.random() * 300)
                if (rng === 0 && !this.flying && this.outerAlpha <= 0) {

                    this.flyTime = 0;
                    this.flying = true;
                    this.y = Math.random() * (height);
                    this.x = Math.random() * (width - radius * 2) + radius
                }
                if (this.flying) {
                    this.outerAlpha = Math.random() * (.7 - .51) + .51;
                    this.x -= this.xd;
                    this.y += this.yd;
                    this.flyTime++
                }
                if (this.y > height) {
                    this.outerAlpha -= .008;
                    this.flying = false;
                }
                this.draw();
            };
        }

        //Generate Circles
        function createCircle(count) {
            for (let i = 0; i < count; i++) {
                let radius = Math.random() * 2,
                    x = Math.random() * (width - radius * 2) + radius,
                    y = 0,
                    xd = Math.random() * (10 - 8) + 8,
                    yd = Math.random() * (7 - 5) + 5,
                    hue = colors[0];
                circles.push(new Circle(x, y, radius, yd, xd, hue));
            }
        }
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, width, height);
            circles.forEach(circle => {
                circle.update();
            });
        }

        setDimensions();
        createCircle(6);
        animate();
        window.addEventListener("resize", setDimensions);
    }

    render() {
        return (
            <div className="canvas">
                <canvas id="canvas"></canvas>
                <div className="hero">
                    <div className="title">Kurtis Soroka</div>
                    <div className="subtitle">aspiring full stack developer</div>
                </div>
            </div>
        )
    }
}

export default Canvas
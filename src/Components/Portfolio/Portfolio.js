import React from 'react';
import PortfolioItem from './PortfolioItem'
import './Portfolio.scss';
class Portfolio extends React.Component {
    render() {
        const portfolioList = [
            {
                id: 0,
                name: "Game Time",
                used: ["node", "database", "sass", "vuejs"],
                description: "Project built to schedule game time with friends",
                background: "test.jpg"
            },
            {
                id: 1,
                name: "Kwurty",
                used: ["js", "sass", "react"],
                description: "My portfolio built to learn the basics of ReactJS",
                background: "Kwurty.jpg"
            },
            {
                id: 2,
                name: "PokeVue",
                used: ["js", "sass", "vuejs"],
                description: "A Pokedex style web app made using VueJS",
                background: "Pokemon.jpg"
            },
            {
                id: 3,
                name: "Stock Game",
                used: ["js", "css", "vuejs"],
                description: "Final project for Maximilian Schwarzmüller's VueJS Udemy course",
                background: "Kwurty.jpg"
            },
        ]

        return (
            <div className="portfolio">
                <div className="cards">
                    {portfolioList.map(item => (
                        <PortfolioItem item={item} key={item.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Portfolio
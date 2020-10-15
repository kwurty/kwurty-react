import React from 'react';
import './PorfolioItem.scss';

// // import the library
// import { library } from '@fortawesome/fontawesome-svg-core';

// // import your icons
// import { faJs, faSass, faVue, faReact } from '@fortawesome/pro-solid-svg-icons';

// library.add(
//     faJs,
//     faSass,
//     faVue,
//     faReact
//     // more icons go here
// );

const PortfolioItem = (item) => {
    const { id, name, description, used } = item.item
    // const ids = ["1517021897933-0e0319cfbc28", "1533903345306-15d1c30952de",
    // "1545243424-0ce743321e11", "1531306728370-e2ebd9d7bb99"];
    // const url = `https://images.unsplash.com/photo-${ids[Math.floor(Math.random() * (4))]}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ`
    return (
        <div className="card" key={id}>
            <div className="content">
                <h2 className="title">{name}</h2>
                <p className="copy">{description}</p>
                <div className="icons">

                    {used.map((item, index) => (
                        <i key={index} className={`fab fa-${item} fa-2x`}>
                        </i>
                    ))}
                </div>
                <button className="btn">Github</button>
            </div>
        </div>
    )
}
export default PortfolioItem;
import React from 'react';
import './Header.scss';

import Canvas from './Canvas'

class Header extends React.Component {
    render() {
        return (
            <header>
                <Canvas />
            </header>
        )
    }
}

export default Header
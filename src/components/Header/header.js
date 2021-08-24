
import React, { Component } from 'react';
import './header.scss'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: false
        }
    }

    SwitchNightMode() {
        this.setState({
            mode: true
        })
        console.log('El modo noche está activado')
    }

    render() {
        return (
            <div className="headerContent">
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
                {this.state.mode === true &&
                    <h1>El modo noche está activado</h1>
                }
                {/* <div className="headerContent__sections">
                    <a>PROJECTS</a>
                    <a>TECHNOLOGIES</a>
                    <a>ABOUT ME</a>
                </div> */}

            </div>
        );
    }
}

export default Header;
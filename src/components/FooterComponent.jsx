import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer" >
                    <span className="navbar navbar-expand-md navbar-light bg-secondary " >All Rights Reserved 2022 @University Course Selection</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
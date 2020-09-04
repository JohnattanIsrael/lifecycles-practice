import React, { Component } from 'react';

export default class Discussion extends Component {
    constructor() {
        super ();

        this.state = {
            pageTitle:'Discussion-',
            currenTime: String(new Date())
        };
    }

    componentDidMount() {
        this.lifeTime = setInterval(() => {            
            this.setState({currenTime: String(new Date())});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.lifeTime);     
    }

    componentDidUpdate() {
        console.log("New Chat Message");
    }

    render() {
        const { pageTitle, currenTime } = this.state
        return (
            <div>
                <h1>{pageTitle}</h1>
                <div>{currenTime}</div>
            </div>
        );
    }
} 
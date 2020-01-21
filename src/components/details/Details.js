import React from 'react';


export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello, this will be the details page for each Movie & TV show :)'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({message: 'Coming soon...'});
        }, 3000);
    }
    render() {
        return (
            <div>
                <h1>(this.state.message)</h1>
            </div>
        );
    }
    
}
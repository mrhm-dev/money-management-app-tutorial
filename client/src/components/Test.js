import React from 'react'

class Test extends React.Component {

    render() {
        return (
            <div style={{visibility: this.props.visible}}>
                <h1>Amount : {this.props.amount} </h1>
                <p> Note: {this.props.note} </p>
            </div>
        )
    }
}

export default Test
import React from 'react';

class SimpleComponent extends React.Component {
    state = {
        mood: "happy"
    };

    handleClick = (e) => {
        const sadMood = this.state.mood === "happy" ? "sad" : "happy";
        this.setState({
            mood: sadMood
        })
    };

    render() {
        return(
            <div onClick={this.handleClick}>
            {this.state.mood}
            </div>
        )
    }
}
export default SimpleComponent;
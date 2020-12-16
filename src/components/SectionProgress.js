import React, {Component} from "react";
import {Button} from "semantic-ui-react";

class SectionProgress extends Component {
    constructor(props) {
        super(props);
        this.sectionsCompletedAndNot = this.sectionsCompletedAndNot.bind(this)
    }

    sectionsCompletedAndNot(sectionsCompleted, numParts) {
        let content = [];
        for (let i = 1; i <= numParts; i++) {
            content.push(<Button size='mini' key={i}>{i}</Button>);
        }
        return content;
    }

    render() {
        return (
            <div>
                {this.sectionsCompletedAndNot(this.props.completed, this.props.numParts)}
        </div>
        )
    }
}

export default  SectionProgress
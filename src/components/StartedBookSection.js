import React, {Component} from "react";
import {Label, Segment} from "semantic-ui-react";
import SectionProgress from './SectionProgress'

class StartedBookSection extends Component {

    constructor(props) {
        super(props);
        this.getSection = this.getSection.bind(this)
    }

    getSection() {
        return (
            <Segment raised>
                <Label as='a' color='red' ribbon>
                    {this.props.title}
                </Label>
                <Segment>
                    <SectionProgress numParts={this.props.numParts} completed={this.props.completed}/>
                </Segment>
            </Segment>
        )
    }

    render() { return this.getSection()}
}

export default StartedBookSection
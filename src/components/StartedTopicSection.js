import React, {Component} from "react";
import {Label, Segment} from 'semantic-ui-react'
import TopicProgress from './TopicProgress'

class StartedTopicSection extends Component {
    render() {
        return (
                <Segment raised>
                    <Label as='a' color='red' ribbon>
                        {this.props.title}
                    </Label>
                    <TopicProgress progress={this.props.completed}/>
                </Segment>
        )
    }
}

export default StartedTopicSection
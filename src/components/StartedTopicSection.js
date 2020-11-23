import React, {Component} from "react";
import {Label, Segment, Accordion, List, Button} from 'semantic-ui-react'
import TopicProgress from './TopicProgress'

class StartedTopicSection extends Component {

    render() {
        const resources = this.props.resources && this.props.resources.map((resource) =>
            <List.Item>
                <List.Content floated='right'>
                    <Button>Add</Button>
                </List.Content>
                <List.Icon name='linkify' />
                <List.Content><a href={resource[0]}>{resource[0]}</a></List.Content>
            </List.Item>
        )
        console.log(this.props.resources)

        const resourceContent = (
            <div>
                <List divided verticalAlign='middle'>
                    {resources}
                </List>
            </div>
        )
        const panels = [
            {
                key: 'resorsi',
                title: 'Resorsi',
                content: resourceContent
            },
        ]

        return (
                <Segment raised>
                    <Label as='a' color='red' ribbon>
                        {this.props.title}
                    </Label>
                    <Segment>
                        <TopicProgress progress={this.props.completed}/>
                        <Accordion panels={panels}  />
                    </Segment>
                </Segment>
        )
    }
}

export default StartedTopicSection
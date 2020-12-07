import React, {Component} from "react";
import { Button } from 'semantic-ui-react'

class NewTopicStartButton extends Component {
    render() {
        return (
            <Button.Group basic size='mini' floated='right'>
                <Button icon='play' />
                <Button icon='add' />
            </Button.Group>)

    }
}

export default NewTopicStartButton
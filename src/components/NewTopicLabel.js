import React, {Component} from "react";
import { Label } from 'semantic-ui-react'

class NewTopicLabel extends Component {

    render() {
        return (
            <Label as='a' color='red' tag>
                {this.props.title}
            </Label>
        )
    }
}

export default NewTopicLabel
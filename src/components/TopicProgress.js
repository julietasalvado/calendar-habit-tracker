import React from 'react'
import { Progress } from 'semantic-ui-react'

class TopicProgress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Progress percent={this.props.progress} indicating/>;
    }
}

export default TopicProgress
import React from 'react'
import { Progress } from 'semantic-ui-react'

class TopicProgress extends React.Component {
    render() {
        return <Progress percent={this.props.progress} indicating/>;
    }
}

export default TopicProgress
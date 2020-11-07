import React, {Component} from "react"
import { Segment, Label } from 'semantic-ui-react'
import TopicDataService from '../services/TopicDataService'
import NewTopicLabel from '../components/NewTopicLabel'

class TopicSection extends Component {

    constructor(props) {
        super(props);
        this.retrieveAllTopics = this.retrieveAllTopics.bind(this);
        this.state = {
            allTopics: []
        }
    }

    retrieveAllTopics() {
    TopicDataService.getAll()
      .then(response => {
        this.setState({
          allTopics: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

    render() {
        this.retrieveAllTopics()
        const listedTopic = this.state.allTopics.map((topic) => <NewTopicLabel title = {topic.title}/> );
        return (
            <Segment>
                <Label color='red' horizontal>
                    Nuovi argomenti
                </Label>
                {listedTopic}
            </Segment>
        );
    }

}

export default  TopicSection
import React, {Component} from "react"
import { Segment, Label } from 'semantic-ui-react'
import TopicDataService from '../services/TopicDataService'
import NewTopicLabel from '../components/NewTopicLabel'
import StartedTopicSection from '../components/StartedTopicSection'

class TopicSection extends Component {

    constructor(props) {
        super(props);
        this.retrieveAllTopics = this.retrieveAllTopics.bind(this);
        this.state = {
            allTopics: [],
            startedTopics: []
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

    retrieveStartedTopics() {
        TopicDataService.getStarted()
            .then(response => {
                this.setState({
                    startedTopics: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

  render() {
        this.retrieveAllTopics()
        const listedTopic = this.state.allTopics.map((topic) => <NewTopicLabel title = {topic.title}/> );
        this.retrieveStartedTopics()
        const listedStartedTopics = this.state.startedTopics.map((topic) => <StartedTopicSection title = {topic.title}/> );

        return (
            <div>
                <Segment>
                    <Label color='red' horizontal>
                        Argomenti nuovi
                    </Label>
                    {listedTopic}
                </Segment>
                <Segment>
                    <Label color='teal' horizontal>
                            Argomenti avviati
                    </Label>
                    {listedStartedTopics}
                </Segment>
            </div>
        );
    }
}

export default  TopicSection
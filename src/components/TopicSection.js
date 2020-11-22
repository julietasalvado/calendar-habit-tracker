import React, {Component} from "react"
import { Segment, Label, Input } from 'semantic-ui-react'
import TopicDataService from '../services/TopicDataService'
import NewTopicLabel from '../components/NewTopicLabel'
import StartedTopicSection from '../components/StartedTopicSection'

class TopicSection extends Component {

    constructor(props) {
        super(props);
        this.retrieveAllTopics = this.retrieveAllTopics.bind(this);
        this.handleNewTopicClick = this.handleNewTopicClick.bind(this);
        this.handleNewTopicOnChange = this.handleNewTopicOnChange.bind(this);
        this.state = {
            allTopics: [],
            startedTopics: [],
            newTopicValue: ""
        }
    }

    handleNewTopicClick() {
        TopicDataService.addNewTopic(this.state.newTopicValue)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
        this.setState({ newTopicValue: "" });
        this.retrieveAllTopics()
    }

    handleNewTopicOnChange  = e => {
        console.log(e)
        this.setState({ newTopicValue: e.value });
    };


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

                    <Input
                        action={{
                            icon: "add",
                            onClick: () => this.handleNewTopicClick()
                        }}
                        onChange={(e, data)=>{
                        this.handleNewTopicOnChange(data)
                    }}
                        placeholder='Aggiungere...'
                    />
                    <Segment basic>
                        {listedTopic}
                    </Segment>
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
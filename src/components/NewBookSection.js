import React, {Component} from "react"
import {Segment, Form, Button} from "semantic-ui-react";
import TopicDataService from "../services/TopicDataService";

class NewBookSection extends Component {
    state = { title: '', sectionNumber: '', submittedTitle: '', submittedSectionNumber: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleSubmit = () => {
        const { title, sectionNumber } = this.state
        this.setState({ submittedTitle: title, submittedSectionNumber: sectionNumber })
        TopicDataService.addNewBook(this.state.title, this.state.sectionNumber)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
        this.setState({ title: '', sectionNumber: '' })
    }

    render() {
        const { title, sectionNumber} = this.state
        return (
            <Segment secondary>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            label='Titolo del libro'
                            width={15}
                            name='title'
                            value={title}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='Numero di sezioni'
                            width={3}
                            name='sectionNumber'
                            value={sectionNumber}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button>Inserisci</Button>
                </Form>
            </Segment>
        )
    }
}

export default NewBookSection
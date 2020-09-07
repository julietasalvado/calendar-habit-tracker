import React, {Component} from 'react'

class Status extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            healthy: ""
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("http://localhost:8080/health")
            .then(response => {
                if (response.status >= 400) {
                    this.setState({loading: false})
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    loading: false,
                    healthy: data
                })
            })
            .catch(this.setState({loading: false}))
    }

    render() {
        return (
                <div className="ui right labeled button" role="button" tabIndex="0">
                    <button className="ui icon button">Stato</button>
                    <a className={`ui left pointing ${ this.state.healthy === "" ? "red" : "green" } basic label`}>
                        <i aria-hidden="true" className={`${this.state.loading ? "heartbeat" : "heart"} icon`}></i>
                    </a>
                </div>
        )
    }
}

export default Status
import http from "../http-common";

class TopicDataService {
    getAll() {
        return http.get("/topics")
    }

    getStarted() {
        return http.get("/topics/started")
    }

    addNewTopic(title) {
        return http.post("/topics", { title })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    addNewBook(title, numParts) {
        return http.post("/books", { title, numParts })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    registerHabitExecution(topicTitle) {
        let uri = "/topics/" + topicTitle
        return http.post(uri)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    getBooks() {
        return http.get("/books");
    }
}

export default new TopicDataService()
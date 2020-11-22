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
}

export default new TopicDataService()
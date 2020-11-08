import http from "../http-common";

class TopicDataService {
    getAll() {
        return http.get("/topics")
    }

    getStarted() {
        return http.get("/topics/started")
    }
}

export default new TopicDataService()
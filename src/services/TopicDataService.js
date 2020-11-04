import http from "../http-common";

class TopicDataService {
    getAll() {
        return http.get("/topics")
    }
}

export default new TopicDataService()
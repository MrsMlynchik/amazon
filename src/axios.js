import anxios from "axios";

const instance = anxios.create({
    baseURL: "http://127.0.0.1:5001/challenge-48cc3/us-central1/api",
});

export default instance;
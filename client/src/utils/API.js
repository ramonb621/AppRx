import axios from "axios";

export default {
    
    getRx: function (query) {
        console.log("this is working");
        console.log("query\n", query)
        return axios.get("/search/meds", { params: { query: query } });
    },

    // getRx: (med) =>
    // fetch("/api/search/meds", + med, {
    // method: "GET",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(med)
    // },console.log(med))
    // .then(res => res.send(res))
    // .catch(err => console.error(err)),

}
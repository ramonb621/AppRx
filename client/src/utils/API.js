import axios from "axios";

export default {
    
    getRx: function (query) {
        console.log("this is working");
        console.log("query: ", query)
        return axios.get("/api/search", { params: { query: query } });
    },

    // getRx: (query) =>
    // fetch("/api/search/meds", { params: { query: query } }, {
    // method: "GET",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({ params: { query: query } })
    // })
    // .then(res => res.json(res))
    // .catch(err => console.error(err)),

    // getRx: (query) =>
    // fetch("/api/search/meds", query, {
    // method: "GET",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(query)
    // })
    // .then(res => res.json(res))
    // .catch(err => console.error(err)),

}
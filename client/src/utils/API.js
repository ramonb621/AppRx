import axios from "axios";

export default {

    getMeds: function() {
        return axios.get("/api/meds");
    },

    getMed: function(id) {
        return axios.get("/api/meds/" + id);
    },

    deleteMed: function(id) {
        return axios.delete("/api/meds/" + id);
    },

    saveMed: function(medData) {
        return axios.post("/api/meds", medData);
    }
    
}
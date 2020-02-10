const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Med
            .find(req.query)
            .then(dbMed => res.json(dbMed))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Med
        .findById(req.params.id)
        .then(dbMed => res.json(dbMed))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Med
            .create(req.body)
            .then(dbMed => res.json(dbMed))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Med
            .findOneAndUpdate({_id: req.params.id }, req.body)
            .then(dbMed => res.json(dbMed))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Med
            .findById({ _id: req.params.id })
            .then(dbMed => dbMed.remove())
            .then(dbMed => res.json(dbMed))
            .catch(err => res.status(422).json(err));
    }
}
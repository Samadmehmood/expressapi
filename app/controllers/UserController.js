const { User } = require('../models');

module.exports = {

    index(req, res) {
        User.findAll({})
            .then(users => res.json({
                error: false,
                data: users
            }))
            .catch(error => res.json({
                error:true,
                data: [],
                error: error
            }));
    },

    create(req, res) {
        const { 
            todo,
            contentType,
            headlines,
            scheduled,
            channels,
            producers,
            sourceOfProducers,
            desiredActions,
            likes,
            shares,
            createdAt,
            publishedAt} = req.body;
        User.create({
            todo,
            contentType,
            headlines,
            scheduled,
            channels,
            producers,
            sourceOfProducers,
            desiredActions,
            likes,
            shares,
            createdAt,
            publishedAt
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: "New Content has been created"
        }))
        .catch(error => res.json({
            error:true,
            data: [],
            error: error
        }));
    },

    update(req, res) {
        const user_id = req.params.id;

        const {  
            todo,
            contentType,
            headlines,
            scheduled,
            channels,
            producers,
            sourceOfProducers,
            desiredActions,
            likes,
            shares,
            createdAt,
            publishedAt} = req.body;

        User.update({
            todo,
            contentType,
            headlines,
            scheduled,
            channels,
            producers,
            sourceOfProducers,
            desiredActions,
            likes,
            shares,
            createdAt,
            publishedAt
        }, {
            where: {
                id: user_id
            }
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: 'Content has been updated'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    },

    destroy(req, res) {
        const user_id = req.params.id;

        User.destroy({ where: {
            id: user_id
        }})
        .then(status => res.status(201).json({
            error: false,
            message: 'Content has been deleted'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
    }
}
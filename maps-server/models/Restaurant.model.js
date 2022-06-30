const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
})

restaurantSchema.index({ location: '2dsphere' })

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
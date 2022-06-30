const router = require("express").Router()

const Restaurant = require('./../models/Restaurant.model')


// New restaurant form (render)
router.get("/crear", (req, res, next) => res.render("restaurants/new-restaurant"))


// New restaurant form (post)
router.post("/crear", (req, res, next) => {

    const { name, description, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Restaurant
        .create({ name, description, location })
        .then(restaurant => console.log(restaurant))
        .catch(err => console.log(err))
})




// Restaurants map
router.get("/mapa", (req, res, next) => {
    res.render("restaurants/restaurants-map")
})



module.exports = router
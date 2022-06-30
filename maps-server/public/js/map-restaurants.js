let map

function init() {
    renderMap()
    getRestaurantsFromDB()
}


function renderMap() {
    map = new google.maps.Map(
        document.querySelector('#myMap'),
        { zoom: 14, center: { lat: 41.3977381, lng: 2.190471916 }, styles: mapStyles.retro }
    )
}


function getRestaurantsFromDB() {

    axios
        .get('/api/restaurants')
        .then(response => printMarkers(response.data))
        .catch(err => console.log(err))
}


function printMarkers(restaurants) {

    console.log(restaurants)

    restaurants.forEach(restaurant => {

        let position = { lat: restaurant.location.coordinates[0], lng: restaurant.location.coordinates[1] }

        new google.maps.Marker({ position, map })
    })

    map.setCenter({ lat: restaurants[0].location.coordinates[0], lng: restaurants[0].location.coordinates[1] })
}
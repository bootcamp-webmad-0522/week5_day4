let map

const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
}

function renderMap() {

    getRouteDetails()

    map = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 12,
            center: ironhackBCN,
            styles: mapStyles.night
        }
    )
}


function getRouteDetails() {

    const directions = new google.maps.DirectionsService()

    const routeDetails = {
        origin: 'Ironhack Madrid',
        destination: 'Fabrik Madrid',
        travelMode: 'DRIVING'
    }

    directions.route(
        routeDetails,
        routeResults => {
            showRouteInfo(routeResults)
            renderRoutes(routeResults)
        }
    )
}


function showRouteInfo({ routes }) {

    const { legs } = routes[0]
    const { duration, distance, steps } = legs[0]

    let text = `<h5>Ruta calculada - ${duration.text}, ${distance.text}</h5><hr>`

    steps.forEach(step => text += `<p>${step.instructions} (${step.duration.text})</p>`)

    document.querySelector('#routeDetails').innerHTML = text
}



function renderRoutes(routeResults) {

    const renderer = new google.maps.DirectionsRenderer()

    renderer.setDirections(routeResults)
    renderer.setMap(map)
}

const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
}

let map

function renderMap() {

    getUserLocation()

    map = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 15,
            center: ironhackBCN,
            styles: mapStyles.retro
        }
    )
}


function getUserLocation() {

    navigator.geolocation.getCurrentPosition(
        position => setUserLocation(position),
        error => console.error('Ha habido un problema...', error)
    )
}


function setUserLocation({ coords }) {

    const { latitude: lat, longitude: lng } = coords

    map.setCenter({ lat, lng })

    new google.maps.Marker({
        position: { lat, lng },
        map
    })

}
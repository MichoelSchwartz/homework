/* globals $ google*/
(function () {
    'use strict';

    let map;
    const input = document.querySelector('input');
    const resultList = $('#sidebar ul');
    const defaultPosition = { lat: 40.096435526114426, lng: -74.22148623738576 };

    async function initMap(lat, lng) {
        let position;
        if (!lat || !lng) {
            position = defaultPosition;
        } else {
            position = { lat: lat, lng: lng };
        }
        const { Map } = await google.maps.importLibrary('maps');

        map = new Map(document.getElementById('map'), {
            zoom: 18,
            center: position,
            mapId: 'DEMO_MAP_ID',
        });

    }
    function geoNamesUrl(query) {
        return `http://api.geonames.org/wikipediaSearch?q=${query}&maxRows=10&username=michoeldov&type=json`;
    }

    async function addMarker(r, lat, lng) {
        const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
        const infowindow = new google.maps.InfoWindow;
        const marker = new AdvancedMarkerElement({
            map: map,
            position: { lat: lat, lng: lng }
        });
        //console.log(r.wikipediaUrl);
        marker.addListener('click', () => {
            infowindow.setContent(`<div class="info-window"><img src="${r.thumbnailImg || 'no_image.png'}"/><br>${r.summary}<br><a href=https://${r.wikipediaUrl} target="_blank">more info</a></div>`);
            infowindow.open({
                anchor: marker,
                map,
            });
        });
    }

    async function getGeonames() {
        const url = geoNamesUrl(input.value);
        try {
            const r = await fetch(url);
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            return r.json();
        } catch (e) {
            console.error(e);
        }
    }

    async function displaySeachResults() {
        const results = await getGeonames();
        console.log(results);
        const bounds = new google.maps.LatLngBounds();
        results.geonames.forEach(r => {
            let li = $(`<li>
              <span>${r.title}</span>  
            </li>`).appendTo(resultList);
            addMarker(r, r.lat, r.lng);
            bounds.extend({ lat: r.lat, lng: r.lng });
            li.on('click', () => {
                map.panTo({ lat: r.lat, lng: r.lng });
                map.setZoom(15);
            });
        });
        map.fitBounds(bounds);
    }

    initMap();
    document.querySelector('#inputButton').addEventListener('click', displaySeachResults);
})();
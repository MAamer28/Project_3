
let myMap = L.map("map", {
  center: [43.690566, -79.403644],
  zoom: 13
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let url1 = "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=%20(YEAR%20%3D%202017%20OR%20YEAR%20%3D%202018)%20&outFields=*&outSR=4326&f=json"

d3.json(url1).then(function(response) {

  console.log(response);
  features = response.features;

  let heatArray = [];

  for (let i = 0; i < features.length; i++) {
    let location = features[i].geometry;
    if (location) {
      //console.log(location);
      heatArray.push([location.y, location.x]);
    }

  }

  let heat = L.heatLayer(heatArray, {
    radius: 25,
    blur: 35
  }).addTo(myMap);

});

let url2 = "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=%20(YEAR%20%3D%202018%20OR%20YEAR%20%3D%202019)%20&outFields=*&outSR=4326&f=json"

d3.json(url2).then(function(response) {

  console.log(response);
  features = response.features;

  let heatArray = [];

  for (let i = 0; i < features.length; i++) {
    let location = features[i].geometry;
    if (location) {
      //console.log(location);
      heatArray.push([location.y, location.x]);
    }

  }

  let heat = L.heatLayer(heatArray, {
    radius: 25,
    blur: 35
  }).addTo(myMap);

});

let url3 = "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=%20(YEAR%20%3D%202019%20OR%20YEAR%20%3D%202020)%20&outFields=*&outSR=4326&f=json"

d3.json(url3).then(function(response) {

  console.log(response);
  features = response.features;

  let heatArray = [];

  for (let i = 0; i < features.length; i++) {
    let location = features[i].geometry;
    if (location) {
      //console.log(location);
      heatArray.push([location.y, location.x]);
    }

  }

  let heat = L.heatLayer(heatArray, {
    radius: 25,
    blur: 35
  }).addTo(myMap);

});

let url4 = "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=%20(YEAR%20%3D%202020%20OR%20YEAR%20%3D%202021)%20&outFields=*&outSR=4326&f=json"

d3.json(url4).then(function(response) {

  console.log(response);
  features = response.features;

  let heatArray = [];

  for (let i = 0; i < features.length; i++) {
    let location = features[i].geometry;
    if (location) {
      //console.log(location);
      heatArray.push([location.y, location.x]);
    }

  }

  let heat = L.heatLayer(heatArray, {
    radius: 25,
    blur: 35
  }).addTo(myMap);

});

let url5 = "https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=%20(YEAR%20%3D%202021%20OR%20YEAR%20%3D%202022)%20&outFields=*&outSR=4326&f=json"


d3.json(url5).then(function(response) {

  console.log(response);
  features = response.features;

  let heatArray = [];

  for (let i = 0; i < features.length; i++) {
    let location = features[i].geometry;
    if (location) {
      //console.log(location);
      heatArray.push([location.y, location.x]);
    }

  }

  let heat = L.heatLayer(heatArray, {
    radius: 25,
    blur: 35
  }).addTo(myMap);

});
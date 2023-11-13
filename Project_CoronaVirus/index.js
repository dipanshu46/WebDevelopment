function updateMap(){
    fetch("/Project_CoronaVirus/data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data)
        rsp.data.forEach(element => {
            let latitude = element.latitude;
            let longitude = element.longitude;
            
            // Mark on the Map
            
        });
    })
}

updateMap();
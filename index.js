const button = document.querySelector("button");

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => { console.log(data.address) })
            .catch((error) => console.log(error))
    })
})
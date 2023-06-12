const button = document.querySelector("button");
const area = document.querySelector("#area");

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const { longitude, latitude } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => area.innerHTML = `
            
            <div class="area--details">
                <div class="area--details--1">
                    <div class="building">${data.address.building}</div>
                    <div class="city">${data.address.city}</div>
                    <div class="country">${data.address.country}</div>
                    <div class="country__code">${data.address.country_code}</div>
                    <div class="house__number">${data.address.house_number}</div>
                </div>
                <div class="area--details--2">
                    <div class="neighbourhood">${data.address.neighbourhood}</div>
                    <div class="road">${data.address.road}</div>
                    <div class="state">${data.address.state}</div>
                    <div class="suburb">${data.address.suburb}</div>
                </div>
            </div>

            `)
            .catch((error) => console.log(error))
    })
})
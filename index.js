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
                        <table>
                            <tr>
                                <th>Building</th>
                                <td>${data.address.building}</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>City</th>
                                <td>${data.address.city}</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Country</th>
                                <td>${data.address.country}</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Country Code</th>
                                <td>${data.address.country_code}</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>House Number</th>
                                <td>${data.address.house_number}</td>
                            </tr>
                        </table>
                </div>
                <div class="area--details--2">
                        <table>
                            <tr>
                                <th>Neighbourhood</th>
                                <td>${data.address.neighbourhood}</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Road</th>
                                <td>${data.address.road}</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>State</th>
                                <td>${data.address.state}</td>
                            </tr>
                        </table>
                        </table>
                        <table>
                            <tr>
                                <th>Suburb</th>
                                <td>${data.address.suburb}</td>
                            </tr>
                        </table>
                </div>

            </div>

            `)
            .catch((error) => console.log(error))
    })
})
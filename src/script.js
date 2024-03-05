
let fetchCountries = (() => {
    fetch("https://restcountries.com/v3.1/all")

        .then((resonse) => {
            return resonse.json();
        })
        .catch(() => {
            console.log("Data fetched failed");
        })

        .then((countries) => {
            // Create a container div with the "row" class
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('row');
            containerDiv.style.backgroundColor = "black";

            // Loop through the countries data
            countries.forEach(country => {
                // Create a wrapper div with the "col-lg-4" class for each card
                let colDiv = document.createElement('div');
                colDiv.classList.add('col-lg-4', 'col-sm-12');

                // Create a div for each country with the "card" class
                let countryDiv = document.createElement('div');
                countryDiv.className = 'card';

                // Create a div for each country with the "card-body" class
                let cardBodyDiv = document.createElement('div');
                cardBodyDiv.classList.add('card-body', 'bodyBackground');
                //cardBodyDiv.innerHTML = `<img src='${}' class='img-fluid'>`;
                let flagImg = document.createElement('img');
                flagImg.src = country.flags.png;
                flagImg.classList.add('img-fluid', 'rounded', 'imgSize', 'd-block', 'mt-3');

                let capitalName = document.createElement('p');
                //capitalName.innerHTML = `Capital: ${country.capital}`;
                if(country.capital){
                    capitalName.innerHTML = `Capital: ${country.capital}`;
                }
                capitalName.classList.add('mt-4')

                let region = document.createElement('p');
                region.innerHTML = `Region: ${country.region}`;

                let countryCode = document.createElement('p');
                //countryCode.innerHTML = `Code: ${country.fifa}`;
                if(country.fifa){
                    countryCode.innerHTML = `Code: ${country.fifa}`;
                }
                // Create a header for the country name
                let header = document.createElement('h5');
                header.classList.add('card-header', 'text-bg-dark', 'text-center');
                header.textContent = country.name.common;

                cardBodyDiv.classList.add('text-center');

                let weatherButton = document.createElement('button');
                weatherButton.innerHTML = "Click for Weather";
                weatherButton.classList.add('btn', 'btn-outline-primary');
                weatherButton.setAttribute('id', 'clickForWeatherButton');
                //let clickForWeatherButton = document.getElementById('clickForWeatherButton');
                weatherButton.setAttribute('data-latlng', `${country.latlng}`);

                // Append the header to the card body div
                //cardBodyDiv.appendChild();
                cardBodyDiv.append(header, flagImg, capitalName, region, countryCode, weatherButton);

                // Append the card body div to the country div
                countryDiv.appendChild(cardBodyDiv);

                // Append the country div to the wrapper div
                colDiv.appendChild(countryDiv);

                // Append the wrapper div to the container div
                containerDiv.appendChild(colDiv);
            });

            // Append the container div to the document body
            document.body.appendChild(containerDiv);

            console.log("Data fetched successfully");

            // let filteredCountries = (country => {
            //          console.log(`${country.capital}.${country.latlng[0]}`);       
            // });

            // clickForWeatherButton.addEventListener('click', function(){
            //     filteredCountries();
            // })

            document.querySelectorAll('.btn').forEach(button => {
                button.addEventListener('click', function () {
                    //alert("button is working");
                    let latlng = this.getAttribute('data-latlng').split(',').map(Number);
                    window.location.href = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=67556f9fea68e3f37674b51d0ece8d23`;
                    //console.log(`${button.capital}.${button.latlng[0]}`);
                })
            })

        })

})

fetchCountries();


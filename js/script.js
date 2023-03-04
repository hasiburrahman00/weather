

const API_KEY = `baf204f9c66f228fbcef085992d3ca0c`;

const loadTemp = (city = 'dhaka') => {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}


const displayTemp = (data) => {
    console.log(data);

    const location =  document.getElementById('location-name');
    location.innerText = `${data.name? data.name : 'City Not Found'}`

    const tempContainer = document.getElementById('temp-container');
    tempContainer.innerText = `${data.main ? data.main.temp: ''}`

    const weather = document.getElementById('location-weather');
    weather.innerText = `${data.weather?data.weather[0].main : ''}`

}

document.getElementById('search-btn').addEventListener('click', function() {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    loadTemp(searchValue);
    searchField.value = '';


})


document.getElementById('search-field').addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        loadTemp(e.target.value);
        e.target.value = '';
    }
})




loadTemp();
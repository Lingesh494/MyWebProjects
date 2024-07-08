$(document).ready(function() {
    const apiKey = '8afa00bf053280b0c9095f023a8836d8'; //its the apikey

    $('#weather-form').submit(function(event) {
        event.preventDefault();
        
        const city = $('#city').val();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(response) {
                displayWeather(response);
            },
            error: function(error) {
                console.error('Error:', error);
                $('#weather-result').html('<p>City not found. Please try again.</p>');
            }
        });
    });

    function displayWeather(data) {
        const { name, main, weather } = data;
        const temp = main.temp;
        const description = weather[0].description;
        const icon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

        const weatherHtml = `
            <h2>Weather in ${name}</h2>
            <p>Temperature: ${temp}°C</p>
            <p>Description: ${description}</p>
            <img src="${icon}" alt="${description}">
        `;

        $('#weather-result').html(weatherHtml);
    }
});

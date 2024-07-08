const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const button = document.querySelector('button')
const weatherIcon = document.querySelector('.weather-icon')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')



// ************* API DETAILS *************
const apiKey = 'd0583840aa8dd039e895df3e85c87d24'
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric'


// ************* API FETCHING AND DISPLAYING****************
function weatherInfo(inputCity) {
    fetch(apiURL + `&appid=${apiKey}&q=${inputCity}`)
        .then((response) => response.json())
        .then(function (data) {

            console.log(data)

            city.innerHTML = data.name
            temp.innerHTML = `${Math.round(data.main.temp)}°C`
            humidity.innerHTML = `${data.main.humidity}%`
            wind.innerHTML = `${data.wind.speed} km/h`
            weatherIcon.setAttribute('src', `./Images/${data.weather[0].main.toLowerCase()}.png`)
            document.querySelector('.weather').style.display = 'block'
            document.querySelector('.error').style.display = 'none'


        }).catch(function () {
            document.querySelector('.weather').style.display = 'none'
            document.querySelector('.error').style.display = 'block'
        })

}

// ************ FUNCTION CALLING **************
button.addEventListener('click', function (e) {

    const inputCity = document.querySelector('input').value
    weatherInfo(inputCity)

})


// **********USING ASYNC AWAIT*************

// async function checkWeather(inputCity) {
//     try {
//         const response = await fetch(apiURL + `&appid=${apiKey}&q=${inputCity}`)
//         const data = await response.json()

//         console.log(data)

//         city.innerHTML = data.name
//         temp.innerHTML = `${Math.round(data.main.temp)}°C`
//         humidity.innerHTML = `${data.main.humidity}%`
//         wind.innerHTML = `${data.wind.speed} km/h`
//         weatherIcon.setAttribute('src', `./Images/${data.weather[0].main.toLowerCase()}.png`)
//         document.querySelector('.weather').style.display = 'block'
//         document.querySelector('.error').style.display = 'none'
//     }
//     catch (error) {
//         document.querySelector('.weather').style.display = 'none'
//         document.querySelector('.error').style.display = 'block'
//     }


// }

// button.addEventListener('click', function (e) {

//     const inputCity = document.querySelector('input').value
//     checkWeather(inputCity)

// })











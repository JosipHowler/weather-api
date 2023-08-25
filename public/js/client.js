const mainDegrees = document.querySelector("[data-main-degrees]")
const mainCityName = document.querySelector("[data-main-city-name]")
const time = document.querySelector("[data-main-time]")
const condition = document.querySelector("[data-weather-condition]")
const conditionIcon = document.querySelector("[data-condition-icon]")
const searchInput = document.querySelector("[data-input]")
const searchButton = document.querySelector("[data-search-button]")
const cityName = document.querySelector("[data-weather-details]")
const lastUpdated = document.querySelector("[data-last-updated]")
const temperature = document.querySelector("[data-temperature]")
const feelsLike = document.querySelector("[data-feels-like]")
const wind = document.querySelector("[data-wind]")
const humidity = document.querySelector("[data-humidity]")
const cloudCoverage = document.querySelector("[data-cloud]")

const api_key = "Your API key";

searchButton.addEventListener("click", async(event) => {
    event.preventDefault()

    if(searchInput.value === "") return

    const city = searchInput.value
    searchInput.value = ""

    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`
    try{
        const response = await axios.get(url)
        const weather_data = response.data

        mainDegrees.textContent = `${weather_data.current.temp_c}°`
        mainCityName.textContent = weather_data.location.name
        time.textContent = weather_data.location.localtime
        condition.textContent = weather_data.current.condition.text
        conditionIcon.setAttribute("src", weather_data.current.condition.icon)
        cityName.textContent = weather_data.location.name
        lastUpdated.textContent = weather_data.current.last_updated
        temperature.textContent = `${weather_data.current.temp_c}°`
        feelsLike.textContent = `${weather_data.current.temp_c}°`
        wind.textContent = `${weather_data.current.wind_kph}km/h`
        humidity.textContent = `${weather_data.current.humidity}%`
        cloudCoverage.textContent = `${weather_data.current.cloud}%`

        console.log(weather_data)
    }catch(error){
        console.log("Error fetching data:", error)
    }
})
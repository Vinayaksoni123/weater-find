const apiKey = "6340730805f20aea1f21f83bbc0cd656"

const weatherdataele = document.querySelector(".weather-data")

const cityName = document.querySelector("#city")

const formele = document.querySelector("form")

const imgicon = document.querySelector(".icon")

formele.addEventListener("submit",(e)=>{
   e.preventDefault()
    const cityValue=cityName.value
    // console.log(cityValue);

    getWeatherData(cityValue)

})

async function  getWeatherData(cityValue){
    // const soni=cityValue
    try{
        const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`) 

        if(!response.ok){
            throw new Error("network response is not ok dear vinayak ...!")
        }

        const data = await response.json()
        // console.log(data);

       const temprature= Math.floor(data.main.temp)

       const description=data.weather[0].description

       const icone=data.weather[0].icon

       const details = [
        `Feels Like:${data.main.feels_like}`,`Humidity:${data.main.humidity}%`,
        
        `Wind Speed:${data.wind.speed} m/s `
       ]

       weatherdataele.querySelector(".temp").
       textContent= `${temprature}℃`

       weatherdataele.querySelector(".desc").
       textContent=`${description} `

       imgicon.innerHTML = `<img src=https://openweathermap.org/img/wn/${icone}.png alt="">`

      

       weatherdataele.querySelector(".details").innerHTML= details.map((detail)=>{
        return `<div>${detail}</div> `
       }).join("")

    }catch(err){

    }
  
}

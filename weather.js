//Complete the Weather API Backend part using openweathermap api
document.querySelector('.search-box').addEventListener("input", async(ele) => {

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today = new Date()
    const search_city = ele.target.value
    console.log(search_city);
    
    try{
        const result = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+search_city+'&appid=8fa0dff4cb03cd86cb1560a1541acc27')
        const output = await result.json();
        console.log(output);

        document.querySelector(".city").innerHTML = output.name +', '+ output.sys.country
        document.querySelector(".date").innerHTML = days[today.getDay()]+" "+today.getDate()+" "+months[today.getMonth()]+" "+today.getFullYear()
        document.querySelector(".temp").innerHTML = parseInt(output.main.temp-273.13) +"°c"
        document.querySelector(".weather").innerHTML = output.weather[0].main
        document.querySelector(".hi-low").innerHTML = parseInt(output.main.temp_min-273.13) +"°c / " + parseInt(output.main.temp_max-273.13) +"°c"
    }
    catch{
        console.log(ele.message);
    }
})
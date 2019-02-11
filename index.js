
function setTimeOfDay(time) {
    const timeArr = time.split(' ');
    const hour = timeArr[0].split(':');
        
    if (timeArr[1] === 'AM') {
        switch (parseInt(hour[0])) {
            case 12:
            case 1:
            case 2:
            case 3:
                return "Night";
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                return "Morning";
                break;
            default:
                return "Day"
                break;
        }
    } else {
        
        switch (parseInt(hour[0])) {
            case 12:
            case 1:
            case 2:
            case 3:
            case 4:
                return "Afternoon";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                return "Evening";
                break;
            case 9:
            case 10:
            case 11:
                return "Night";
                break;
            default:
                return "Day"
                break;
        }
    }
}

function setGreeting(date) {
    return `Good ${setTimeOfDay(date.toLocaleTimeString())}`;
}

function getGif(weekday, weather) {
    const url = 'http://api.giphy.com/v1/gifs/search?q='+weekday+'%20funny%20mood'+weather+'&api_key=QeIbhDUZzaKIbHhsfUD9Ez3jmuUz7HVM&limit=20';
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', url, true);
    req.onload = function () {
      const jsonResponse = req.response;
      const random_gif = Math.floor(Math.random() * Math.floor(20));
      const image_url = jsonResponse.data[random_gif].images.downsized_medium.url;
      const img = document.createElement("img");
      img.src = image_url;
      document.getElementById("gif").appendChild(img);;
    };
    req.send(null);
}

function setDate(date) {
    return date.toDateString();
}

function getWeather() {
    let latitude, longitude;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        });
    } else {
        console.log(`Geolocation is not supported by this browser`);
    }    

    const url = `https://samples.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9dac3614584901a93c9951c6cf9db0ed`;
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', url, true);
    req.onload = function () {
        const jsonResponse = req.response;
        console.log(`json response = ${jsonResponse}`);
    };
    req.send(null);
}

function getDayWeek(number){
  switch(number){
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Day";
  }
}

function main() {
    const today = new Date();
    const greeting = setGreeting(today);
    document.getElementById('greeting').innerText = greeting;
    document.getElementById('date').innerText = setDate(today);
    getWeather();
    console.log("is this working?");
    getGif(getDayWeek(today.getDay()),"Cold");


    // todo use OpenWeatherMaps API for the current weather
    // const weather = ''; 
}

main();

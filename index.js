
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

function getGif() {
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=QeIbhDUZzaKIbHhsfUD9Ez3jmuUz7HVM&limit=1";
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', url, true);
    req.onload = function () {
      const jsonResponse = req.response;
      const image_url = jsonResponse.data[0].images.downsized_medium.url;
      const img = document.createElement("img");
      img.src = image_url;
      document.getElementById("gif").appendChild(img);;
    };
    req.send(null);
}

function main() {
    const today = new Date();
    const greeting = setGreeting(today);
    document.querySelector('#greeting').innerText = greeting;
    // xhr request for gif
    getGif();


    // todo use OpenWeatherMaps API for the current weather
    // const weather = ''; 
}

document.addEventListener('DOMContentLoaded', main, false);
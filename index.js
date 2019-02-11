(function() {

function setTimeOfDay(time) {
    const timeArr = time.split(' ');
    const hour = timeArr[0].split('');    
    
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

function main() {
    browser.tabs.update({'url': browser.extension.getURL('index.html')});
    const today = new Date();
    // todo use OpenWeatherMaps API for the current
    // const weather = ''; 
    // todo use Giphy API to get the gif we want to use for the session

    const greeting = setGreeting(today);
    document.querySelector('#greeting').innerText = greeting;

    // HTTP request for gif obj
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=QeIbhDUZzaKIbHhsfUD9Ez3jmuUz7HVM&limit=1");

    

    console.log(`today is ${today.toUTCString()}`);
    console.log(`the time is ${today.toLocaleTimeString()}`);   

}

//document.addEventListener('DOMContentLoaded', main, false);
browser.tabs.onCreated.addListener(main);

})();
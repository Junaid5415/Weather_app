const inp = document.querySelector('.search-inp');

inp.addEventListener('click', ()=>{
    if(inp.value === 'Enter City Name'){
        inp.value = '';
    }
});



const apiKey = '1121641d65ed72c8fd77a291e5eb0e37'

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

const searchInput = document.querySelector('.search-inp');
const searchBtn = document.querySelector('.image-button');
const imagePanel = document.querySelector('.image'); 
console.log(imagePanel);


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error label').style.display = 'block'
        document.querySelector('#main-container').style.display = 'none';
        document.querySelector('#bottom-container').style.display = 'none'

    }
    else{
        var data = await response.json();
    
        console.log(data);
    
    
    
        document.querySelector('.unit h3').innerHTML = Math.round(data.main.temp)+ '&#8451;';
        document.querySelector('.city-name h5').innerHTML = data.name;
        document.querySelector('.speed-2 h5').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind h5').innerHTML = Math.round(data.wind.speed) +'km/h' ;
    
    if(data.weather[0].main == 'Clear'){
        console.log('clear');
        imagePanel.src = '/images/clear.png';
    }
    else if(data.weather[0].main == 'Clouds'){
        console.log('cloud');
        imagePanel.src = '/images/clouds.png';
    }
    else if(data.weather[0].main == 'Drizzle'){
        console.log('drizzle');
        imagePanel.src = '/images/drizzle.png';
    }
    else if(data.weather[0].main == 'Mist'){
        console.log('mist');
        imagePanel.src = '/images/mist.png';
    }
    else if(data.weather[0].main == 'Rain'){
        console.log('rain');
        imagePanel.src = '/images/rain.png';
    }
    else if(data.weather[0].main == 'Snow'){
        console.log('snow');
        imagePanel.src = '/images/snow.png';
    } 

        document.querySelector('.error label').style.display = 'none';
        document.querySelector('#main-container').style.display = 'grid';
        document.querySelector('#bottom-container').style.display = 'flex'
    }

}



searchBtn.addEventListener('click', ()=>{
    checkWeather(`&q=${searchInput.value}`)    
})





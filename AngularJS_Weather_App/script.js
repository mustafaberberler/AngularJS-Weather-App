
var classApp= angular.module('weatherApp', []);

classApp.controller('weatherCtrl', function($scope, $http){

    var vm = $scope;
    
    $http.get("https://ipinfo.io/json").then(function(ipresponse){
			vm.ip = ipresponse.data.ip;

        });    

  
    $http.get("http://ip-api.com/json/194.27.19.124").then(function(response){ 
        vm.lon = response.data.lon;
        vm.lat = response.data.lat;
        
        var apiKey = "b40dd220a5853c449e7fbcf1e919e1b7";

        var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + vm.lat + "&lon=" + vm.lon + "&appid=" + apiKey;


        $http.get(openWeatherURL).then(function(response1){ 
            
            vm.description = response1.data.weather[0].description;
            vm.speed = (1.852 * response1.data.wind.speed).toFixed(1) + " kph";
            vm.name = response1.data.name;
            vm.temperature = response1.data.main.temp;
            vm.fTemp = (vm.temperature*(9/5) - 459.67).toFixed(1) + " Fahrenheit";
            vm.cTemp = (vm.temperature - 273).toFixed(1) + " Celcius";
            vm.lon = "Longitude: " + response1.data.coord.lon;
            vm.lat = "Latitude: " + response1.data.coord.lat;
            vm.icon = "http://openweathermap.org/img/w/" + response1.data.weather[0].icon + ".png";

            switch(vm.description){
                case 'clear sky':
                    {
                    vm.weatherBackground = {
                        "background": "url('clearSky.jpg')",
                        "background-size": "cover"
                    };  
                    break;
                }
                case 'few clouds':
                    {
                    vm.weatherBackground = {
                        "background": "url('fewClouds.jpg')",
                        "background-size": "cover"
                    };  
                    break;
                }
                case 'scattered clouds':
                    {
                    vm.weatherBackground = {
                        "background": "url('scatteredClouds.jpg')",
                        "background-size": "cover"
                    };  
                    break;
                }
                case 'broken clouds':
                    {
                    vm.weatherBackground = {
                        "background": "url('brokenClouds.jpg')",
                        "background-size": "cover"
                    };  
                    break;
                }
                case 'shower rain':
                    {
                    vm.weatherBackground = {
                        "background": "url('showerRain.jpg')",
                        "background-size": "cover"
                    };  
                    break;
                }
                case 'rain':
                    {
                    vm.weatherBackground = {
                        "background": "url('rain.jpg')",
                        "background-size": "cover"
                    };  
                    break;
                }
                case 'thunderstorm':
                    {
                    vm.weatherBackground = {
                        "background": "url('thunderstorm.jpg')",
                        "background-size": "cover"
                    };  
                    break;
                }
                case 'snow':
                    {
                    vm.weatherBackground = {
                        "background": "url('snow.jpg')",
                        "background-size": "cover"
                    };  
                    break;
                }
                case 'mist':
                    {
                    vm.weatherBackground = {
                        "background": "url('mist.jpg')",
                        "background-size": "cover"
                    };  
                    break;
                }
                default:
                    vm.weatherBackground = {
                        "background": "url('default.jpg')",
                        "background-size": "cover"
                    };
                    break;
            }
        });

    });


    vm.channelInfo = {
        heading: "Weather App",
        subheading1: {
            name: "More information: ",
            link: "https://www.accuweather.com/"
        }
    };
    
    
        
   

});
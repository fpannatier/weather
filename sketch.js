var weather;
var c;

function setup() {
  createCanvas(400, 200);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=001b0f58045147663b1ea518d34d88b4&units=metric', gotData);
      
  
}

function gotData(data) {
  weather=data;

}

function draw() {

  background(color('hsb(195, 100%, 34%)'));

  if (weather) {
    var temp = weather.main.temp;
    var c;
    c = color('hsb(169, 44%, 74%)');
    noStroke();
    fill(c);
    ellipse(200, 100, temp*10, temp*10);
  }
  
  
}
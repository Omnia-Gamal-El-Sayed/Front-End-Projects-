
let country=document.getElementById("country");
let find=document.getElementById("find")
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let day =weekday[d.getDay()]; 
let day1 =weekday[d.getDay()+1];
let day2 =weekday[d.getDay()+2];
console.log(day1); 
let date=d.getDate();
let months =month[d.getMonth()]; 
async function getCity(city){
 let res= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ef65804855b24895a5c193310221701&q=${city}&days=3`)
//  let cityMap=new Map(Object.entries(counts));
    let finalResult=await res.json();
    // console.log(finalResult);
display(finalResult);
}
// find.addEventListener('click',getCity('Cairo'));
function display(finalResult){
    console.log(finalResult);
let cartona=``;
  cartona +=  ` <div class="col-lg-4 first  card">
    <div class="head d-flex justify-content-between" >
      <h5 id="day">${day}</h5>
      <h5>${date}${months}</h5>
    </div>
<h5 class="mt-4">${finalResult.location.name}</h5>
<div class="row">
<div class="col-lg-8">
<h5 class="deg">${finalResult.current.temp_c}℃</h5>
<small class="mt-5">${finalResult.current.condition.text}</small>
<ul>
<li><img src="img/icon-umberella.png">20%</li>
<li><img src="img/icon-wind.png">${finalResult.current.wind_kph}km/h</li>
<li><img src="img/icon-compass.png">East</li>
</ul>
</div>
<div class="col-lg-1"></div>
<div class="col-lg-3">
<img src="https:${finalResult.current.condition.icon}" class="w-100 mt-4">
</div>
</div>

  </div>
  <div class="col-lg-4 card sec  text-center">
    <div class="head text-center" >
      <h5>${day1}</h5>
      
    </div>
<div class="text-center w-75 m-auto ">
<img src="https:${finalResult.forecast.forecastday[1].day.condition.icon}" class="w-25">
<h5>${finalResult.forecast.forecastday[1].day.maxtemp_c}℃</h5>
<h6>${finalResult.forecast.forecastday[1].day.mintemp_c}℃</h6>
<h5>${finalResult.forecast.forecastday[1].day.condition.text}</h5>
</div>

  </div>
  <div class="col-lg-4 third card ">
    <div class="head text-center" >
      <h5>${day2}</h5>
      
    </div>


<div class="text-center w-75 m-auto">
<img src="https:${finalResult.forecast.forecastday[2].day.condition.icon}" class="w-25">
<h5>${finalResult.forecast.forecastday[2].day.maxtemp_c}℃</h5>
<h6>${finalResult.forecast.forecastday[2].day.mintemp_c}℃</h6>
<h5>${finalResult.forecast.forecastday[2].day.condition.text}</h5>
</div>
  </div>`


document.getElementById("c").innerHTML=cartona;

}

find.addEventListener("keyup",entry=>{
  if(entry.target.value.length<2){
    getCity("cairo")
}else{
    getCity(entry.target.value)
 }
})

getCity('cairo');
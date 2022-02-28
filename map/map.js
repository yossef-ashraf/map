
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
// //my fetch api 
var loc={
lat: 30.0759370,
lng: 31.3059140
}
markers = [
[30.075937,31.305914],
];
//ajax 
function GetDataFormApi(){
var myRequest= new XMLHttpRequest()
myRequest.onreadystatechange = function() {
if(this.readyState === 4 && this.status === 200) {
data=this.responseText;};
}
myRequest.open(
"GET",
"http://localhost/map-exp/api-db/api/v1/map/all",
false
);
myRequest.send();
}
GetDataFormApi();
markers =  JSON.parse(data);
document.getElementById("address").innerHTML=
`<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="address">
<option selected>address</option>
${markers.map(d =>` <option value='${[d.lat,d.lng,d.id]}' >${d.title} </option>`)}
</select>`;
//end ajax 
// js function async 
// async function GetDataFormApi(){
// //url api 
// var rseponse =await fetch('http://localhost/map-exp/api-db/api/v1/map/all');
// var data= await rseponse.json();
// // console.log(data.length);
// document.getElementById("address").innerHTML=
// `<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="address">
// <option selected>address</option>
// ${data.map(d =>` <option value='${[d.id]}' >${d.title}</option>`)}
// </select>`;
// console.log(data.length);
// return data;
// }
// GetDataFormApi();
// console.log(data);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// to change zoom
document.getElementById("address").onchange = function() {myFunction()};
function myFunction() {
arr=document.getElementById("address").value.split(",");
lat=Number(arr[0]); 
lng=Number(arr[1]);  
console.log(lng);
loc={lat: lat,lng: lng};
initMap()
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// google api 

let map;
function initMap() {
/// start map zoom 
map = new google.maps.Map(document.getElementById("map"), {
center: { lat: loc.lat , lng:loc.lng  },
zoom: 15,
});
/// end map zoom 
// icon 
const image = {
url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
// This marker is 20 pixels wide by 32 pixels high.
size: new google.maps.Size(100, 100),
// The origin for this image is (0, 0).
origin: new google.maps.Point(0, 0),
// The anchor for this image is the base of the flagpole at (0, 32).
anchor: new google.maps.Point(0, 32),
};
// end icon 

// start loop markers
let m = markers.length;
for(let i=0; i < m ;i++){
//console.log(markers[0]);
var marker = new google.maps.Marker({
position:{lat:markers[i].lat,lng:markers[i].lng},
map:map,
title:markers[i].title,
icon:image
});
}

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// send data
thisForm = document.getElementById('myForm');
if(thisForm){
    thisForm.addEventListener('submit', async function (e) {
        // e.preventDefault();
        const formData = new FormData(thisForm).entries()
        const response = await fetch('http://localhost/map-exp/api-db/api/v1/map/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
        });
        const result = await response.json();
        console.log(result)
        });
}






// test function
// let loginForm = document.getElementById("form_add");
// loginForm.onsubmit = (form)=>{
// form.preventDefault();
// let formData = new FormData(loginForm);
// formData=JSON.parse(formData);
// fetch("http://localhost/map-exp/api-db/api/v1/map/add",{
// method : 'POST' ,
// body:formData
// }).then(response => response.text()).then(data =>{
// console.log(data);
// })
// }
// postForm.onsubmit=()=>{
// postForm.preventDefault();
// let formData = new FormData(postForm);
// var myRequest= new XMLHttpRequest()
// myRequest.onreadystatechange = function() {
// if(this.readyState === 4 && this.status === 200) {
// data=this.responseText;};
// }
// myRequest.open(
// "post",
// "http://localhost/map-exp/api-db/api/v1/map/add",
// true
// );
// myRequest.setRequestHeader(
// "Content-Type",
// "application/x-www-form-urlencoded")
// myRequest.send("name-Sayed&lastlogin-Today");
// }
// thisForm = document.getElementById('myForm');
// async function post() {
// alert("dd");
// // e.preventDefault();
// const formData = {
// "lng":555,
// "lat":555,
// "title":"test1@test.com"
// };
// alert("formData");
// const response = await fetch('http://localhost/map-exp/api-db/api/v1/map/add', {
// method: 'POST',
// headers: { 'Content-Type': 'application/json' },
// body: formData
// });
// alert("dd");
// const result = await response.json();
// alert("dd");
// console.log(result)
// };




// let postForm = document.getElementById("form_add");
// forData={
// "lng":555,
// "lat":555,
// "title":"test1@test.com"
// };
// // let forData = new FormData(postForm);
// forData=JSON.stringify(forData);
// function post() {
// alert("dd");
// console.log(forData);
// var mypost= new XMLHttpRequest()
// mypost.onreadystatechange = function() {
// if(this.readyState === 4 && this.status === 200) {
// postdata=this.responseText;
// console.log(postdata)
// };
// console.log(this.readyState)
// console.log(this.status)
// }
// mypost.open(
// "POST",
// "http://localhost/map-exp/api-db/api/v1/map/add",
// false
// );
// mypost.setRequestHeader(
// "Content-Type",
// "application/x-www-form-urlencoded")
// mypost.send({
// "lng":555,
// "lat":555,
// "title":"test1@test.com"
// });
// }



// const thisForm = document.getElementById('myForm');
// thisForm.addEventListener('submit', async function (e) {
// e.preventDefault();
// const formData = new FormData(thisForm).entries()
// const response = await fetch('http://localhost/map-exp/api-db/api/v1/map/add', {
// method: 'POST',
// headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify(Object.fromEntries(formData))
// });
// const result = await response.json();
// console.log(result)
// });

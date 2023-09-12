console.clear();

// //href
// console.log("This is href: " + location.href);
// // protocol
// console.log("This is Protocol: " + location.protocol)
// console.log("This is HostName: " + location.hostname)
// console.log("This is Port: " + location.port)
// console.log("This is PathName: " + location.pathname)


var locationDiv = document.querySelector(".location-div");
var p1 = locationDiv.children[0];
p1.textContent = location.href;
var p2 = locationDiv.children[1];
p2.textContent = location.hostname;
var p3 = locationDiv.children[2];
p3.textContent = location.protocol;

const visitButton = document.getElementById('visit-button');
visitButton.addEventListener("click", function(){
    location.assign("https://www.facebook.com");
});
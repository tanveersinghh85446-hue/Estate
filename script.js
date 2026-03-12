function toggleMenu(){

const nav = document.getElementById("navLinks");

if(nav.style.display === "flex"){
nav.style.display = "none";
}else{
nav.style.display = "flex";
}

}


document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully!");

});
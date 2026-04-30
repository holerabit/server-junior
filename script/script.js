const linkContainer = document.getElementById("contact-gmail");
const link = linkContainer.querySelector("a");

//fubction for click
link.onclick = function() {
    link.style.color = "#ff79c6";
    console.log("Link clicked!");
};

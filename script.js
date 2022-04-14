let cursorMeter = document.querySelector('#cursorMeter');


//Assign #cursorMeter <div> with cursor

document.addEventListener('mousemove', function(e){
    cursorMeter.style.top = e.clientY + 'px';
    cursorMeter.style.left = e.clientX + 'px';
})

//Set variables
let percent = document.querySelector('#percent');
let progressBar = document.querySelector('#progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

//Count and show scrolling percent
window.onscroll = function() {
    let progress = (window.pageYOffset/totalHeight)*100;
    progressBar.style.width = progress + '%';
    percent.innerHTML = "Page scrolled " + Math.round(progress) + "%";
}

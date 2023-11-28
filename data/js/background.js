const images=["1.jpg","2.jpg","3.jpg","4.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundSize="cover";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundImage=`url(./img/${chosenImage})`;
console.log(window.screen.width);
if(window.screen.width<=1024){
    document.body.style.backgroundImage="url(./img/mobile.jpg)";
    
}
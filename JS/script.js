var h1=document.querySelector('h1');
var h2=document.querySelector('.hclass');
var h3=document.querySelector('#hid');
var btn=document.querySelector('button')
var h4=document.querySelector('#hid2');
var para1=document.querySelector('#par1');
para1.innerHTML="<i>This is the end hold your breath and count to ten. is this skyfall in the end zone.</i>"
h1.textContent="fghjuyutghjbhuyfutgvjhbj";
h2.textContent="fghjuyutghjbhuyfutgvjhbj";
h3.textContent="fghjuyutghjbhuyfutgvjhbj";
btn.textContent="Downloade";
h4.innerHTML="<i>House of Dragon</i>";
h1.style.color='red';
para1.style.color="Blue";
var h5=document.createElement('h1');
h5.innerHTML="<b>Hello this is H1 tag adding through JavaScript....</b>"
h5.classList.add("sample");
document.querySelector("body").appendChild(h5);
h5.remove();
btn.addEventListener('click',function(){
    console.log("redirecting to another url!!")
})




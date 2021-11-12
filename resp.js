burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{

navList.classList.toggle('v-class-resp');
rightnav.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
}) 
function refresh(){
    alert("Thankyou for your response");
  location.reload();
}
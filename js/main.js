const elDarkModeButton = document.querySelector('.site-header-dark')
const elLightButton=document.querySelector('.site-header-light')

elDarkModeButton.addEventListener('click',function () {
  document.body.classList.add('dark-mode')
});

elLightButton.addEventListener('click',function(){
  document.body.classList.remove('dark-mode')
});

































































// const elLogolink = document.querySelector('.site-header-logo');
// const elChangeLogoTextButton = document.querySelector('.change-logo-text-button')
// elChangeLogoTextButton.addEventListener('click', function(){
//   elLogolink.textContent='boshqa'
// });
// name-> name
// .name->elName
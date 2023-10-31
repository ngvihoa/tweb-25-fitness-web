
let toggleBtn = document.querySelector('header nav button');
let closeBtn = document.querySelector('.close-btn');
let navbar = document.querySelector('header nav ul');


toggleBtn.onclick = ()=>{
  navbar.classList.replace('hidden', 'flex')
}

closeBtn.onclick = ()=>{
  navbar.classList.replace('flex', 'hidden')

};


let time = 24; // hours
let totalSecond = 24 * 3600; //seconds

let countdownPopup = setInterval(function(){
  if(totalSecond == 0){
    clearInterval(countdownPopup);
  }

  let tmp = totalSecond;
  let second = tmp % 60;
  tmp = Math.floor(tmp / 60);
  let minute = tmp % 60;
  let hour = Math.floor(tmp / 60);
  totalSecond--;

  if(second < 10) second = '0' + second;
  if(minute < 10) minute = '0' + minute;
  if(hour < 10) hour = '0' + hour;

  $('.hours').text(hour);
  $('.minutes').text(minute);
  $('.seconds').text(second);
}, 1000)

$('.register-trail').each(function(){
  $(this).click(function(){
    $('.popup-register').removeClass('hidden');
    $('body').addClass('overflow-hidden');
    navbar.classList.replace('flex', 'hidden');
  })
})

$('.close-popup').click(function(){
  $('.popup-register-form input').each(function(){
    $(this).val('');
  });
  $('.popup-register').addClass('hidden');
  $('body').removeClass('overflow-hidden');
})

if (/Android/.test(navigator.userAgent) || /iPhone/.test(navigator.userAgent)){
  console.log('Я телефон');
  var mySwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 10000,
    paginationClickable: false,
    parallax: false,
    autoplay: true,
    effect: "slide",
    mousewheelControl: 0
  });
}else{
  console.log('я ноут');

  var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 1
  });
} 

// var mySwiper = new Swiper(".swiper-container", {
//     direction: "vertical",
//     loop: true,
//     pagination: ".swiper-pagination",
//     grabCursor: true,
//     speed: 10000,
//     paginationClickable: kek,
//     parallax: true,
//     autoplay: true,
//     effect: "slide",
//     mousewheelControl: 0
//   });
const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];
  
formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.setAttribute("is-valid", "1");
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.setAttribute("is-valid", "0");
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}

function formCheck(e) {
  e.preventDefault();
  const allValid = [];
  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid"));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return acc && current;
  });
  if (!Boolean(Number(isAllValid))) {
    alert("Заполните поля правильно!");
    return;
  }
  formSubmit();
}

async function formSubmit() {
  const data = serializeForm(form);
  const response = await sendData(data);
  if (response.ok) {
    let result = await response.json();
    alert(result.message);
    formReset();
  } else {
    alert('Данные отправлены!')
    console.log("Код ошибки: " + response.status);
    console.log(result)
    console.log(response)
  }
}

function serializeForm(formNode) {
  return new FormData(form);
}

async function sendData(data) {
  return await fetch("send_mail.php", {
    method: "POST",
    body: data,
  });
}

function formReset() {
  form.reset();
  validFormArr.forEach((el) => {
    el.setAttribute("is-valid", 0);
    el.style.border = "none";
  });
}

const textModal = document.querySelector('.mailtoui-modal-title')
textModal.innerHTML = 'Выберите, под каким приложением отправить письмо'

const text1 = document.querySelector('#mailtoui-button-text-1')
text1.innerHTML = 'Gmail'

const text2 = document.querySelector('#mailtoui-button-text-2')
text2.innerHTML = 'Outlook'

const text3 = document.querySelector('#mailtoui-button-text-3')
text3.innerHTML = 'Yahoo'

const text4 = document.querySelector('#mailtoui-button-text-4')
text4.innerHTML = 'Приложение по-умолчанию'




const typeWorkOne = document.querySelector('.category-1 ')
typeWorkOne.classList.add('action')
document.querySelectorAll('.n2-section-smartslider')[1].classList.add('zero')
document.querySelectorAll('.n2-section-smartslider')[2].classList.add('zero')
typeWorkOne.addEventListener('click', typeWorkOneAction)
function typeWorkOneAction(){
  typeWorkOne.classList.add('action')
  typeWorkTwo.classList.remove('action')
  typeWorkThree.classList.remove('action')
  document.querySelectorAll('.n2-section-smartslider')[0].classList.remove('zero')
  document.querySelectorAll('.n2-section-smartslider')[1].classList.add('zero')
  document.querySelectorAll('.n2-section-smartslider')[2].classList.add('zero')
}

const typeWorkTwo = document.querySelector('.category-2')
typeWorkTwo.addEventListener('click', typeWorkOneActionTwo)
function typeWorkOneActionTwo(){
  typeWorkTwo.classList.add('action')
  typeWorkOne.classList.remove('action')
  typeWorkThree.classList.remove('action')
  document.querySelectorAll('.n2-section-smartslider')[1].classList.remove('zero')
  document.querySelectorAll('.n2-section-smartslider')[0].classList.add('zero')
  document.querySelectorAll('.n2-section-smartslider')[2].classList.add('zero')
}

const typeWorkThree = document.querySelector('.category-3')
typeWorkThree.addEventListener('click', typeWorkOneActionThree)
function typeWorkOneActionThree(){
  typeWorkThree.classList.add('action')
  typeWorkOne.classList.remove('action')
  typeWorkTwo.classList.remove('action')
  document.querySelectorAll('.n2-section-smartslider')[2].classList.remove('zero')
  document.querySelectorAll('.n2-section-smartslider')[0].classList.add('zero')
  document.querySelectorAll('.n2-section-smartslider')[1].classList.add('zero')
}
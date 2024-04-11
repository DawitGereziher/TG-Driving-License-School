const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex === slides.children.length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * slideWidth;
  slides.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 5000);
let appear_material = document.querySelector('.material_videos');
function appear(){
  appear_material.style.display="flex";
  appear_material.style.flexwrap= "wrap";
  let button_holder = document.querySelector('.appear_button_holder');
  button_holder.innerHTML = '';
}
function loginappear(){
  let holder = document.querySelector('.register');
  let login = document.getElementById('#login');
  holder.innerHTML = `<form id="login">
  <div>
     <h3>LogIn</h3>
     <label>Email<input type="email" required></label>
     <label>Password<input type="password"></label>
     <button type="submit">Login</button>
     <button>Forget Password</button>
  </div>
</form>`;
}
let light_dark = document.querySelector('.light_dark');
light_dark.textContent = 'Dark Mode';
let body = document.querySelector('body');
function bright(){
  if(light_dark.textContent === 'Dark Mode')
  {
      body.style.background = "linear-gradient(120deg,white, white)";
      body.style.color = "black";
      light_dark.textContent = 'Light Mode';
  }
  else if(light_dark.textContent === 'Light Mode')
  {
      body.style.background = "linear-gradient(120deg,#04080F, #1B2845)";
      body.style.color = "white";
      light_dark.textContent = 'Dark Mode';
  }
}
let hi = '1.png';
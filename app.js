

const submitDetails = document.querySelector('formApplication');
const name = submitDetails['name'].value;
const date = submitDetails['day'].value;
const origin  = submitDetails['origin'].value;
const year = submitDetails['time'].value;

submitDetails.addEventListener('submit', (e) => {
    e.preventDefault()
    const modal = document.querySelector('#modal');
    modal.style.display ="block";

    localStorage.setItem("name", name);
    localStorage.setItem("date", day);
    localStorage.setItem('origin', origin)
    localStorage.setItem("title", title);
})

const loginBtn = document.querySelector('entry')

loginBtn.addEventListener('click', (e)=>{
    e.preventDefault()
     
 
    window.location = "HomePage.html"
    loginForm.reset(); 
})



function signupPage(){
    window.location = "signup.html" 
}

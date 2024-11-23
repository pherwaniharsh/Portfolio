// let switchItUp = document.querySelector(".fa-regular");
// let resume = document.querySelector(".resume");

// switchItUp.onclick = function(){
//     if(switchItUp.classList.contains("fa-sun")){
        
//         switchItUp.classList.remove("fa-sun");
//         switchItUp.classList.add("fa-moon");
//         resume.classList.add("darkMode");
//     }
//     else{
//         switchItUp.classList.remove("fa-moon");
//         switchItUp.classList.add("fa-sun");
//         resume.classList.remove("darkMode");
//     }
// };

let hamburger = document.querySelector(".fa-bars");
let secondMenu = document.querySelector(".secondMenu");


hamburger.onclick = function(){ 
    secondMenu.classList.toggle("hideMenu");
}
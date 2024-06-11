let element2 = document.createElement("div");
let code;
let answer = false;
let faqimg 
for (let index = 0; index < 6; index++) {
  document.querySelectorAll(".card")[index].addEventListener("click", () => {
    showfaq(index);
  }
  )
}

function showfaq(index) {
  var answer = document.querySelectorAll(".answer")[index]
  if (answer.classList.contains('active')) {
    document.querySelectorAll(".card")[index].children[0].style.transform = "rotate(0deg)"
    answer.style.height = "0px";
    answer.style.padding = "0";
    setTimeout(() => {
      answer.classList.remove('active');
    },305)
  } else {
    // Close all other open answers
    for(let i = 0;i < 6;i++)
      {
        if(i!=index)
          {
            document.querySelectorAll('.answer')[i].style.height = "0px";
            document.querySelectorAll('.answer')[i].style.padding = "0rem";
            
            setTimeout(() => {
              document.querySelectorAll(".card")[i].children[0].style.transform = "rotate(0deg)"
              document.querySelectorAll('.answer')[i].classList.remove('active')
            },305)
          }
      }
    answer.classList.add('active');
    
    setTimeout(() => {
      document.querySelectorAll(".card")[index].children[0].style.transform = "rotate(45deg)"
      answer.style.height = "100px";
      answer.style.padding = "1.3rem";
    },10
    )
  }
}






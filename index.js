const blurButtons = document.getElementsByClassName("open_view_button");
const container = document.querySelector(".container");
const popup = document.querySelector(".popup");
const popupTitle = document.querySelector(".open_view_title");
const quote=document.querySelector(".quote");
const desc=document.querySelector(".short_desc");
const closeBtn=document.querySelector(".close");
const weekTitles = {
  w1: "Week 1",
  w2: "Week 2",
  w3: "Week 3",
  w4: "Week 4",
  w5: "Week 5",
  w6: "Week 6",
  w7: "Week 7",
  w8: "Week 8",
  w9: "Week 9",
  w10: "Week 10",
  w11: "Week 11",
  w12: "Week 12",
};
const enrtyInfo={
    "Shakespeare (sonnet 130)": `"And yet, by heaven, I think my love as rare/ As any she belied with false compare" Shakespeare (sonnet 130).`,
    "Hughes (Let America be America Again)": `“For all the dreams we’ve dreamed/ And all the songs we’ve sung/ And all the hopes we’ve held/ And all the flags we’ve hung” (Hughes xyz)`,
}

const shortInfo={
    "Shakespeare (sonnet 130)":"I picked this quote because of a particular reason that i cannot tell you at this point in the present considering my curcumstances",
}

const colors={
    "color_green": "rgb(0, 255, 110)",
    "color_blue":  "rgb(0, 191, 255)",
    "color_orange": "rgb(255, 140, 0)",
    "color_purple": "rgb(166, 0, 255)",
    "color_dark_pink": "rgb(255, 0, 89)",
    "color_yellow": "rgb(255, 217, 0)",
    "color_dark_blue": "rgb(0, 106, 255)",
    "color_dark_green": "rgb(4, 255, 0)",
}

// EXTERNAL FUNCTIONS
function displayDetails(selectedButton) {
    popup.style.visibility="visible";
    for (const weekClass in weekTitles) {
        if (selectedButton.classList.contains(weekClass)) {
          popupTitle.innerHTML = weekTitles[weekClass];
          break;
        }
      }
      for(selectedQuote in enrtyInfo){
        if(selectedButton.innerHTML.trim()==selectedQuote){
            quote.innerHTML=enrtyInfo[selectedQuote];
            desc.innerHTML=shortInfo[selectedQuote];
            break;
        }
      }
      for(selectedColor in colors){
        if(selectedButton.classList.contains(selectedColor)){
            closeBtn.style.backgroundColor=colors[selectedColor];
            break;
        }
      }
}



//Buttons to open view

for (let i = 0; i < blurButtons.length; i++) {
  blurButtons[i].addEventListener("click", function () {

// ALL THE FUNCTIONS FOR THE BUTTON TO OPEN VIEW
    container.classList.toggle("active");
    displayDetails(blurButtons[i]);

  });
}


//Button to close view

closeBtn.addEventListener("click", function(){
    popup.style.visibility="hidden";
    container.classList.remove("active");
})
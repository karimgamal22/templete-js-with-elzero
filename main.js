// check if there in localstarge color
let maincolorsv = localStorage.getItem("color_option");

if (maincolorsv !== null) {
  document.documentElement.style.setProperty("--main-color", maincolorsv);

  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === maincolorsv) {
      element.classList.add("active");
    }
  });
}

// random background option
let backgroundoption = true;
// This item contains setintervel 1000
let thebackintervel;
// check if there in localstarge background itme
let localbackground = localStorage.getItem("background_option");
// check of randome localstorage there any background itmes or is not empty
if (localbackground !== null) {
  if (localbackground === "true") {
    backgroundoption = true;
  } else {
    backgroundoption = false;
  }

  document.querySelectorAll(".randome-backrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (localbackground === "true") {
    document.querySelector(".randome-backrounds .yes").classList.add("active");
  } else {
    document.querySelector(".randome-backrounds .no").classList.add("active");
  }
} else {
}

// toggle spin class on icon
document.querySelector(".toggel-stting .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};

// switch color
const colorsli = document.querySelectorAll(".colors-list li");

colorsli.forEach((li) => {
  // click on every list itmes
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    localStorage.setItem("color_option", e.target.dataset.color);

    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

// click on background no or yes about active
let radbackground = document.querySelectorAll(".randome-backrounds span");

radbackground.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundoption = true;
      randomizeimgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundoption = false;
      clearInterval(thebackintervel);
      localStorage.setItem("background_option", false);
    }
  });
});

// select landing page elment
let landingpage = document.querySelector(".landing-page");

// get array of imgs
let imgesarrya = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// function to randomize imgs

function randomizeimgs() {
  if (backgroundoption === true) {
    thebackintervel = setInterval(function () {
      // get randome number
      let randomNumber = Math.floor(Math.random() * imgesarrya.length);

      // change background imge url
      landingpage.style.backgroundImage =
        'url("photo/' + imgesarrya[randomNumber] + '")';
    }, 1000);
  }
}

randomizeimgs();

// start selelct skills selecter

let ourskills = document.querySelector(".skills");

window.onscroll = function () {
  // skills offset top  offsetTop
  let skilloffsetTop = ourskills.offsetTop;

  // outer skills height  offsetHeight
  let skilloffsetHeight = ourskills.offsetHeight;

  // window height
  let windowinnerHeight = this.innerHeight;

  // window scrolltop
  let windowscrolltop = this.pageYOffset;

  if (
    windowscrolltop >
    skilloffsetTop + skilloffsetHeight - windowinnerHeight
  ) {
    let allskills = document.querySelectorAll(
      ".skills-box .skill-progres span"
    );
    allskills.forEach((skill) => {
      skill.style.width = skill.dataset.progres;
    });
  }
};
// end selelct skills selecter

// ==========================================================================================
// ==========================================================================================
// start gallary

// creat popup with image
let ourgallery = document.querySelectorAll(".gallery img");
ourgallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // creat overlay element
    let overlay = document.createElement("div");

    // addc class to overlay
    overlay.className = "popup-overlay";
    // append overlay to the  body
    document.body.appendChild(overlay);

    // creat the popup box
    let popupbox = document.createElement("div");

    // add class to the popup
    popupbox.className = "popup-box";

      // add alt in head
      if (img.alt !== null) {

        // creat heading
        let imgheading = document.createElement("h3");
  
        // creat text for heading 
        let imgheadtext = document.createTextNode(img.alt);
  
        // append cthe text to the heading 
        imgheading.appendChild(imgheadtext);
  
        // append imgheading to popupbox
        popupbox.appendChild(imgheading);
  
  
      }

    // creat the image
    let popupimage = document.createElement("img");

    // set image src
    popupimage.src = img.src;
    // append popupimage to popupbox
    popupbox.appendChild(popupimage);
    // append popupbox to body
    document.body.appendChild(popupbox);



    // creat close span 
    let closebutton = document.createElement("span");

    // creat the closebutton text 
    let closebuttontext = document.createTextNode("X");
    // append x to span
    closebutton.appendChild(closebuttontext);

    closebutton.className = "close-button";

    popupbox.appendChild(closebutton);
  
  });
});


// close popup
document.addEventListener('click' , function (e) {

if (e.target.className == "close-button") {

  e.target.parentNode.remove();
  
  document.querySelector(".popup-overlay").remove()


}


});


// start gallary

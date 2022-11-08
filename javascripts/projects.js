const project = [
    {
      id: 1,
      title: "Breakfast Facebook Post",
      category: "Graphic",
      img: "https://i.postimg.cc/fW918qVq/Breakfast.png",
      anchor:  "https://i.postimg.cc/fW918qVq/Breakfast.png",
    },
    {
      id: 2,
      title: "healthy Food Thumbnail",
      category: "Graphic",
      img: "https://i.postimg.cc/3RPVKmcZ/Healthy-Food-Youtube-Thumbnail.png",
      anchor: "https://i.postimg.cc/3RPVKmcZ/Healthy-Food-Youtube-Thumbnail.png",
    },
    {
      id: 3,
      title: "inspirational Facebook post",
      category: "Graphic",
      img: "https://i.postimg.cc/vm2CNp7k/Inspirational-Facebook-Post.png",
      anchor:  "https://i.postimg.cc/vm2CNp7k/Inspirational-Facebook-Post.png",
    },
    {
      id: 4,
      title: "Learn to cook Facebook Post",
      category: "Graphic",
      img: "https://i.postimg.cc/j5WB0ZZ5/Learn-To-Cook-Facebook-Post.png",
      anchor: "https://i.postimg.cc/j5WB0ZZ5/Learn-To-Cook-Facebook-Post.png",
    },
    {
      id: 5,
      title: "Valorant Website",
      category: "Front-End",
      img: "https://i.postimg.cc/CM7bpSnR/Valorant-Account-Website.png",
      anchor: "https://jcbaldomero.github.io/ThirdWeb/index.html",
    },
    {
      id: 6,
      title: "keyboard Enthusiast",
      category: "Front-End",
      img: "https://i.postimg.cc/X7DFXL83/Keyboard-Website.png",
      anchor: "https://jcbaldomero.github.io/Keyboard-Enthusiast/index.html",
    },
    {
      id: 7,
      title: "Belison Tourism Website",
      category: "Wordpress",
      img: "https://i.postimg.cc/GhpGcVvq/Belison-Website.png",
      anchor: "https://jcbaldomero.github.io/BelisonWebsite/index.html",
    },
    {
      id: 8,
      title: "First Portfolio",
      category: "Front-End",
      img: "https://i.postimg.cc/BbWBVgj2/First-Portfoliio.png",
      anchor: `First Portfolio anchorription`,
    },
    {
        id: 9,
        title: "Responsive Design",
        category: "Certificate",
        img: "https://i.postimg.cc/DZB0HfpF/Responsive-Webdesign.png",
        anchor: "https://i.postimg.cc/DZB0HfpF/Responsive-Webdesign.png",
    },
    {
        id: 10,
        title: "Canva Design",
        category: "Certificate",
        img: "https://i.postimg.cc/MTMR7QKN/Courseradesign-Course-1.png",
        anchor: "https://i.postimg.cc/MTMR7QKN/Courseradesign-Course-1.png",
    },
    {
        id: 11,
        title: "Wordpress Building",
        category: "Certificate",
        img: "https://i.postimg.cc/mkp00KGt/Build-Free-Website-Using-Wordpress-1.png",
        anchor:"https://i.postimg.cc/mkp00KGt/Build-Free-Website-Using-Wordpress-1.png",
    },
    {
        id: 12,
        title: "No Code Wordpress",
        category: "Certificate",
        img: "https://i.postimg.cc/SNJ0WQW8/Coursera-Nocodewordpress-1.png",
        anchor:  "https://i.postimg.cc/SNJ0WQW8/Coursera-Nocodewordpress-1.png",
    },
    {
      id: 13,
      title: "New Year Poster",
      category: "Graphic",
      img: "https://i.postimg.cc/8c3rjPSD/New-Years-Poster.png",
      anchor: "https://i.postimg.cc/8c3rjPSD/New-Years-Poster.png",
    },
    {
      id: 14,
      title: "Zumba Poster 1",
      category: "Graphic",
      img: "https://i.postimg.cc/gj7TMRvh/1.png",
      anchor: "https://i.postimg.cc/gj7TMRvh/1.png",
    },
    {
      id: 15,
      title: "Zumba Poster 2",
      category: "Graphic",
      img: "https://i.postimg.cc/zD26Xm9f/2.png",
      anchor: "https://i.postimg.cc/zD26Xm9f/2.png",
    },
    {
      id: 16,
      title: "Zumba Poster 3",
      category: "Graphic",
      img: "https://i.postimg.cc/jdW9Dgb4/3.png",
      anchor: "https://i.postimg.cc/jdW9Dgb4/3.png",
    },
    {
      id: 17,
      title: "Logo 1",
      category: "Graphic",
      img: "https://i.postimg.cc/zBHNqJ0T/7.png",
      anchor: "https://i.postimg.cc/zBHNqJ0T/7.png",
    },
    {
      id: 18,
      title: "Logo 2",
      category: "Graphic",
      img: "https://i.postimg.cc/ZqRZDPN7/3.png",
      anchor: "https://i.postimg.cc/ZqRZDPN7/3.png",
    },
    {
      id: 19,
      title: "Logo 3",
      category: "Graphic",
      img: "https://i.postimg.cc/LsbRdqBH/1.png",
      anchor: "https://i.postimg.cc/LsbRdqBH/1.png",
    },



//     {
//       id: 13,
//       title: "Chill Vibe",
//       category: "video",
//       img: "../images/SocialMedia/Explore the world.mp4",
//       anchor:  "../images/certificcates/Wordpress2/CourseraNocodewordpress-1.png",
//   },
//   {
//     id: 14,
//     title: "Chill Vibe",
//     category: "video",
//     img: "../images/SocialMedia/Motivational Instagram Story.mp4",
//     anchor:   "../images/SocialMedia/Motivational Instagram Story.mp4",
// },
];


  
const projectsContainer = document.querySelector('.projects-item-container');
const projectsBtnContainer = document.querySelector('.project-btns');

// Load graphics projects items 
window.addEventListener('DOMContentLoaded', function(){
    displayProjectsItems(project);
    displayProjectBtns();
    // console.log("working")
})


// function that generate project items 
function displayProjectsItems(project){

// variable that has a value of an array and puts it into a dom(.project-item)
let displayProject = project.map(function(item){
  return`<article class="project-item">
  <img src="${item.img}">
  
  

  <div class="item-info">
      <a href="${item.anchor}" target="_blank"><h3>${item.title}</h3></a>
  </div>




</article>`;



})


// Turns  displayMenu into a single data/String
displayProject =  displayProject.join("");

projectsContainer.innerHTML = displayProject;
}

function displayProjectBtns(){
 
    // Variable that shows creates buttons relative to the categories in menu 
    const categories = project.reduce(
        function(values, item){
            if(!values.includes(item.category)){
                values.push(item.category);
            }
            return values
        },
        ["all"] 
    );

        const categoryBtns = categories.map(function(category){
            return `<button class="project-btn" type="button" data-type=${category}>
            ${category}</button>`
        }).join("");

        projectsBtnContainer.innerHTML = categoryBtns;

        const projectsBtns = projectsBtnContainer.querySelectorAll('.project-btn');


        // Buttons that filter project items show with category buttons
        projectsBtns.forEach(function(btn){
            btn.addEventListener("click", function(e){
                // variable for what ever button is press 
                const category = e.currentTarget.dataset.type;

                // variable for items that matches category 
                const projectCategory = project.filter(function(projectItem){
                    if(projectItem.category === category){
                        return projectItem;
                    }
                })

                // If else statement that either show all project items or only the projects that matches the category(btn)
                if(category === "all"){
                    displayProjectsItems(project);
                }
                else{
                    displayProjectsItems(projectCategory);
                }
            })



        })

}
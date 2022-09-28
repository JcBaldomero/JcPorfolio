const project = [
    {
      id: 1,
      title: "Breakfast Facebook Post",
      category: "Graphic",
      img: "../images/SocialMedia/Breakfast.png",
      anchor:  "../images/SocialMedia/Breakfast.png",
    },
    {
      id: 2,
      title: "healthy Food Thumbnail",
      category: "Graphic",
      img: "../images/SocialMedia/HealthyFoodYoutubeThumbnail.png",
      anchor: "../images/SocialMedia/HealthyFoodYoutubeThumbnail.png",
    },
    {
      id: 3,
      title: "inspirational Facebook post",
      category: "Graphic",
      img: "../images/SocialMedia/InspirationalFacebookPost.png",
      anchor:  "../images/SocialMedia/InspirationalFacebookPost.png",
    },
    {
      id: 4,
      title: "Learn to cook Facebook Post",
      category: "Graphic",
      img: "../images/SocialMedia/LearnToCookFacebookPost.png",
      anchor: "../images/SocialMedia/LearnToCookFacebookPost.png",
    },
    {
      id: 5,
      title: "Valorant Website",
      category: "Front-End",
      img: "../images/Projects/Websites/ValorantAccountWebsite.png",
      anchor: "https://jcbaldomero.github.io/ThirdWeb/index.html",
    },
    {
      id: 6,
      title: "keyboard Enthusiast",
      category: "Front-End",
      img: "../images/Projects/Websites/KeyboardWebsite.png",
      anchor: "https://jcbaldomero.github.io/Keyboard-Enthusiast/index.html",
    },
    {
      id: 7,
      title: "Belison Tourism Website",
      category: "Wordpress",
      img: "../images/Projects/Websites/BelisonWebsite.png",
      anchor: "https://jcbaldomero.github.io/BelisonWebsite/index.html",
    },
    {
      id: 8,
      title: "First Portfolio",
      category: "Front-End",
      img: "../images/Projects/Websites/FirstPortfoliio.png",
      anchor: `First Portfolio anchorription`,
    },
    {
        id: 9,
        title: "Responsive Design",
        category: "Certificate",
        img: "../images/Projects/certificates/ResponsiveWebdesign.png",
        anchor: "../images/Projects/certificates/ResponsiveWebdesign.png",
    },
    {
        id: 10,
        title: "Canva Design",
        category: "Certificate",
        img: "../images/certificcates/DesignCourse/CourseradesignCourse-1.png",
        anchor: "../images/certificcates/DesignCourse/CourseradesignCourse-1.png",
    },
    {
        id: 11,
        title: "Wordpress Building",
        category: "Certificate",
        img: "../images/certificcates/wordpress/BuildFreeWebsiteUsingWordpress-1.png",
        anchor:"../images/certificcates/wordpress/BuildFreeWebsiteUsingWordpress-1.png",
    },
    {
        id: 12,
        title: "No Code Wordpress",
        category: "Certificate",
        img: "../images/certificcates/Wordpress2/CourseraNocodewordpress-1.png",
        anchor:  "../images/certificcates/Wordpress2/CourseraNocodewordpress-1.png",
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
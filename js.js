let users = document.querySelectorAll(".contentUsers")[0];


console.log(users)

let containerusers = document.querySelectorAll(".mainContentUsers")[0];


let imgUrl = "https://avatars2.githubusercontent.com/u/31545128?s=460&u=2c1e279b6d728d05c70b90a9739ba86f2448bf22&v=4";

let usersList = [

    {
        id: 1,
        name: "Danilo Lima",
        score: 69000

    },
    {
        id: 2,
        name: "Eric Ayuko",
        score: 78670

    },
    {
        id: 3,
        name: "Erica Mendes",
        score: 346
    },
    {
        id: 4,
        name: "Julio Costa",
        score: 1790
    },
    {
        id: 5,
        name: "Bruna Carvalho",
        score: 123560
    },
    {
        id: 6,
        name: "Alissa Santos",
        score: 69000
    },
    {
        id: 7,
        name: "Bruno Almeida",
        score: 23500
    },
    {
        id: 8,
        name: "Antonio da Silva",
        score: 78670
    },
]

function User(id,name,score){

    
    let element = document.createElement("div");
    let spanid = document.createElement("span");
    spanid.textContent = id;

    let spanName = document.createElement("span");
    
    
    let spanUsreImg = document.createElement("img");
    
    spanUsreImg.src = imgUrl;
    
    let labelUserName = document.createElement("label");
    
    labelUserName.textContent = name;
    
    spanName.appendChild(spanUsreImg);
    spanName.appendChild(labelUserName);
    
    let spanScore = document.createElement("span");
    let spanNumerbsScore = document.createElement("label");

    spanNumerbsScore.textContent = score;

    let spanCoreIcon = document.createElement("i");
    
    spanCoreIcon.className = "fas fa-gem";
    
 
    let spanMoreIcon = document.createElement("span");
    
    spanMoreIcon.className = "fas fa-ellipsis-v";
 
    spanScore.appendChild(spanNumerbsScore);
    spanScore.appendChild(spanCoreIcon);


    element.classList.add("contentUsers");

    element.style.animationDelay = `${id - (id * 0.8)}s`;

    element.appendChild(spanid);
    element.appendChild(spanName);
    element.appendChild(spanScore);
    element.appendChild(spanMoreIcon);

    return  element;
}

usersList.map(user => {

    containerusers.appendChild(User(user.id,user.name,user.score));
});



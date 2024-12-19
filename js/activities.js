function Activity(urlI, text, classes, link) {
    this.url = urlI;
    this.text = text;
    this.classes = classes;
    this.link = link;
}

var activities = [new Activity("../media/cookie.jpg", "Bake some amazing holiday-themed cookies!", ["baking", "indoors", "food"], "https://www.tasteofhome.com/collection/our-best-christmas-cookie-recipes/"),
new Activity("../media/house.jpg", "Decorate a Gingerbread House!", ["baking", "indoors", "food"], "https://www.foodnetwork.com/recipes/gingerbread-house-recipe-1963254"),
new Activity("../media/baubles.jpg", "Croquet a Christmas Ornament!", ["crafts", "indoors"], "https://easycraftspatterns.com/how-to-crochet-a-bauble-on-a-glass-ball/"),
new Activity("../media/cards.jpg", "Make Chirstamas Cards!", ["crafts", "indoors"], "https://www.thesprucecrafts.com/diy-christmas-cards-4177042"),
new Activity("../media/snowman.jpg", "Build a Snowman!", ["games", "outdoors"], "https://www.bobvila.com/articles/how-to-build-a-snowman/"),
new Activity("../media/snowball.jpg", "Have a Snowball Fight!", ["games", "outdoors"], "https://christmasphere.com/how-to-organise-a-snowball-fight/"),
new Activity("../media/treeLighting.jpg", "Go to a Local Christmas Festival!", ["food", "outdoors"], "https://www.yelp.com/nearme/christmas-things-to-do"),
new Activity("../media/snowflakePaper.jpg", "Cut Out Paper Snowflakes!", ["food", "outdoors"], "https://onelittleproject.com/how-to-make-paper-snowflakes/"),
new Activity("../media/toy.jpg", "Donate a Toy at a local Toy Drive", ["donate", "outdoors"], "https://www.toysfortots.org/find-your-local-chapter/"),
new Activity("../media/volunteer.jpg", "Volunteer this Season!", ["donate", "outdoors"], "https://www.volunteermatch.org/"),
new Activity("../media/movie.jpg", "Watch a Holiday Themed Movie", ["games", "indoors"], "https://editorial.rottentomatoes.com/guide/best-christmas-movies/")
]

function update() {
    var string = "";

    for (var i = 0; i < activities.length; i++) {
        var id = "act-" + i;
        string += `<a class="activity" id=${id} href=${activities[i].link} target="_blank"><span class="text">${activities[i].text}</span></a>`;
        document.getElementById("activity-list").innerHTML = string;
    }
    document.getElementById("activity-list").innerHTML = string;


    for (var i = 0; i < activities.length; i++) {
        var id = "act-" + i;
        document.getElementById(id).style.backgroundImage = `url('${activities[i].url}')`;
    }


}

update();

function filter(list) {
    console.log(list);
    var string = "";

    for (var i = 0; i < list.length; i++) {
        var id = "act-" + list[i];
        string += `<a class="activity" id=${id} href=${activities[list[i]].link} target="_blank"><span class="text">${activities[list[i]].text}</span></a>`;
        document.getElementById("activity-list").innerHTML = string;

    }


    document.getElementById("activity-list").innerHTML = string;

    for (var i = 0; i < list.length; i++) {
        var id = "act-" + list[i];
        document.getElementById(id).style.backgroundImage = `url('${activities[list[i]].url}')`;
    }


}



const filters = ["Games", "Baking", "Indoors", "Outdoors", "Food", "Crafts", "Donate"];

var selectedF = [];
var unselectedF = ["Games", "Baking", "Indoors", "Outdoors", "Food", "Crafts", "Donate"];

function updateFilterUI(id, i) {
    var element = document.getElementById(id)
    element.classList.toggle("selected");

    //Set Userface for all Clicked Filters
    if (element.classList.contains("selected")) {
        document.getElementById(id).innerHTML += ` <strong class="x">x</strong>`;
        selectedF.push(id);
        unselectedF.splice(unselectedF.indexOf(id), 1);
    } else {
        document.getElementById(id).innerHTML = `${filters[i]}`;
        selectedF.splice(selectedF.indexOf(id), 1);
        unselectedF.push(id);
    }

    container = document.getElementById("unselected");

    //Move Selected Variables to One Side
    for (var i = 0; i < selectedF.length; i++) {
        container.appendChild(document.getElementById(selectedF[i].toLowerCase()));
    }
    //Display Unclicked Variables Afterwards
    for (var i = 0; i < unselectedF.length; i++) {
        container.appendChild(document.getElementById(unselectedF[i].toLowerCase()));
    }

    //Filter Though Activities
    var filteredIndexes = [];

    for (var i = 0; i < activities.length; i++) {
        for (var j = 0; j < selectedF.length; j++) {
            console.log(activities[i].classes);
            console.log(selectedF[j].toLowerCase());
            if (activities[i].classes.indexOf(selectedF[j].toLowerCase()) > -1 && filteredIndexes.indexOf(i) < 0) {
                filteredIndexes.push(i);
                console.log(i);
            }
        }
    }

    filter(filteredIndexes);
    if (filteredIndexes.length == 0) {
        document.getElementById("error").style.display = "unset";
        document.getElementById("error").classList.add("shown");
        document.getElementById("error").styles.textAlign = "center";
    } else {
        document.getElementById("error").style.display = "none";
        document.getElementById("error").classList.remove("shown");
    }
}


for (var i = 0; i < filters.length; i++) {
    var ids = filters[i].toLowerCase();
    (function (ids, index) {
        document.getElementById(ids).addEventListener('click', function () { updateFilterUI(ids, index); }, false);
    })(ids, i);
}


//Create Working Searchbar
var userSearch = document.getElementById("search");
var userButton = document.getElementById("enter");
userSearch.addEventListener("keyup", () => { searching(userSearch.value); });
userButton.addEventListener("click", () => { searching(userSearch.value); });


function searching(value) {
    var filteredIndexes = [];
    for (var i = 0; i < activities.length; i++) {
        if (activities[i].text.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            filteredIndexes.push(i);
        }

        filter(filteredIndexes);

        if (filteredIndexes.length == 0) {
            document.getElementById("error").style.display = "unset";
            document.getElementById("error").classList.add("shown");
            document.getElementById("error").styles.textAlign = "center";
        } else {
            document.getElementById("error").style.display = "none";
            document.getElementById("error").classList.remove("shown");
        }
    }
}

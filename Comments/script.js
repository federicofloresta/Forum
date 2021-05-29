const express = require("express");
const myForm = document.getElementById("myForm");


const app = express();


app.get("/about", (req, res) => {
    res.render("description", {
      description: "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past. The player can explore the open world to discover locations and take on side quests."
    })
});



app.get("/about", (req, res) => {
    res.send("Genshin Impact is an open-world action role-playing game that allows the player to control one of four interchangeable characters in a party. The World Level is a measure of how strong the enemies within the world are and the rarity of rewards that defeating them gives.")
});


app.get("/description", (req, res) => {
    res.render("description", {
      description: "The Outer Worlds is an action role-playing video game featuring a first-person perspective. In the early stages of the game, the player can create their own character and unlock a ship, which acts as the game's central hub space."
    })
});


app.get("/description", (req, res) => {
    res.render("description", {
      description: "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective."
    })
});


app.get("/description", (req, res) => {
    res.render("description", {
      description: "Need for Speed™ Heat is an adrenaline-fueled, vibrant racing game where the lines of the law fade as the sun starts to set"
    })
});

app.get("/description", (req, res) => {
    res.render("description", {
      description: "An Elder Scroll, as it appears in The Elder Scrolls V: Skyrim. The Elder Scrolls are artifacts of unknown origin and quantity, being simultaneously archives of historic, past and future events. They often tell of events that require a Hero to resolve them, although the Scrolls themselves do not select such individuals."
    })
});


myForm.addEventListener("submit", (e) => {
    alert("Thank you, your feedbacks are appreciated!")
});


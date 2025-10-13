import { Character } from "./models/Character";

function getImageUrl(character: Character): string {
    return `https://cdn.thesimpsonsapi.com/500${character.portrait_path}`;
}

const homer: Character = {
    id: 1,
    age: 39,
    birthdate: "1956-05-12",
    gender: "Male",
    name: "Homer Simpson",
    occupation: "Nuclear Safety Officer",
    portrait_path: "/character/1.webp",
    pharses: ["D'oh!", "Mmm... donuts.", "Woohoo!"],
    status: "Alive"
};

console.log(getImageUrl(homer));
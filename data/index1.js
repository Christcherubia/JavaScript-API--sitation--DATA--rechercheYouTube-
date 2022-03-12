const array = ["Paris", "Lyon", "Montreal", "Helsinki"];
const array1 = ["Paris", 25, ["Montreal", "Helsinki"], true];
const array2 = ["Paris", 34, ["Montreal", "Helsinki"], true, "Budapest"];

for (i = 0; i < array1.length; i++) {
  // la boucle relit à chaque fois l'emplacement des pays (0,1,2,3) et ajoute ++ c'est à dire 1 pour passer à l'autre pays
  console.log(typeof array1[i]);
}
const numbers = [21, 25, 2, 55, 48];
console.log(numbers.sort());

// ****************************************
const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";
input.addEventListener("input", (event) => {
  changeLink(event.target.value);

  if (link) {
    video.innerHTML = `<iframe
    width="794"
    height="480"
    src="${link}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>`;
  }
});
const changeLink = (linkToChange) => {
  let embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
  console.log(link);
};
// https://www.youtube.com/embed/Ls6FslFl5AQ
// https://www.youtube.com/watch?v=Ls6FslFl5AQ&t=91s

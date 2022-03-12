const quote = document.getElementById("quote");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.content;
    });

  fetch("https://picsum.photos/600/100").then((res) => {
    document.getElementById("picsum").innerHTML = `<img src=${res.url} />`;
  });
};
quote.addEventListener("click", () => getQuote());
getQuote();

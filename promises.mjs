import fetch from "node-fetch";

fetch("https://randomuser.me/api/?results=30")
  .then((response) => response.json())
  .then((data) => data.results)
  .then((results) => console.log(`We got ${results.length} rows`))
  .catch((err) => console.log("An error occured", { err }));

function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
  let parisTime = moment().tz("Europe/Paris");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1);

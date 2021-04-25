const CountrySelector = document.querySelector("select");
const COUNTRY_LS = "country";

function localCountry() {
  const currentValue =
    CountrySelector.options[CountrySelector.selectedIndex].value;
  localStorage.setItem(COUNTRY_LS, currentValue);
}
function selectCountry() {
  const myCountry = localStorage.getItem(COUNTRY_LS);
  if (myCountry === null) {
  } else {
    CountrySelector.value = myCountry;
  }
}

function init() {
  CountrySelector.addEventListener("change", localCountry);
  selectCountry();
}

init();

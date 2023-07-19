// Read URL param

var selectedOptions = {}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (['tanker', 'cargo'].includes(urlParams.get("type"))) {
  selectedOptions["type"] = urlParams.get("type");
  document.getElementById("type").value = urlParams.get("type");
}
document.getElementById("fleet").style.display = 'block'

// https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid

var cardList = document.getElementById("cards-container");
var shipCards = cardList.children;

// Filters

function applyFilters(shipCards, selectedOptions) {
  document.getElementById("none-msg").style.display = 'none';
  let noneFound = true;
  for (const card of shipCards) {
    const containsKey = (key) => card.classList.contains(selectedOptions[key])
    if (Object.keys(selectedOptions).every(containsKey)) {
      card.style.display = 'block';
      noneFound = false;
    } else {
      card.style.display = 'none';
    }
  }
  if (noneFound) {
    document.getElementById("none-msg").style.display = 'block';
  }
}

applyFilters(shipCards, selectedOptions)

function getFilterOption(element) {
  const selectFilter = element.id;
  const selectValue = element.value;
  const acceptedValues = {
    "type": ['tanker', 'cargo'],
    "year": ['newer', 'new', 'old'],
    "flag": ['hk', 'lr', 'mh', 'pa', 'sg'],
  };
  if (acceptedValues[selectFilter].includes(selectValue)) {
    selectedOptions[selectFilter] = selectValue;
  } else {
    delete selectedOptions[selectFilter];
  }
  applyFilters(shipCards, selectedOptions);
}

// Sort

function applySortBy(element) {
  const selectValue = element.value;

  function compareFn(sortBy) { // Compare function generator
    let compareProp;
    switch (sortBy) {
      case "name":
        compareProp = (node) => node.querySelector("h3").textContent;
        return (a, b) => compareProp(a).localeCompare(compareProp(b));
      case "newest":
        compareProp = (node) => +node.querySelector("p").textContent.slice(-4);
        return (a, b) => compareProp(b) - compareProp(a);
      case "oldest":
        compareProp = (node) => +node.querySelector("p").textContent.slice(-4);
        return (a, b) => compareProp(a) - compareProp(b);
      case "capacity":
        compareProp = (node) => parseInt([...node.querySelectorAll("span")].pop().textContent.replace(/,/g, ''));
        return (a, b) => compareProp(b) - compareProp(a);
      default:
        compareProp = (node) => node.querySelector("h3").textContent;
        let shipType = (node) => node.classList[1];
        return (a, b) => shipType(a) == shipType(b)
          ? compareProp(a).localeCompare(compareProp(b))
          : shipType(a).localeCompare(shipType(a));
    }
  }

  const sorted = [...shipCards].sort(compareFn(selectValue)); // ... = spread to array
  cardList.append(...sorted); // append and appendChild move existing nodes
}
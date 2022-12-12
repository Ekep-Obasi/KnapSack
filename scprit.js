// Dark mode
let count = 0;
document.querySelector("#shift").addEventListener("click", () => {
  document.querySelector("#shift").classList.add("ok");
  document.querySelector(".full-screen-container").style.background = "#212020";
  document.body.style.color = "white";
  document.querySelector(".display").classList.toggle("dark");
  document.querySelector(".container").classList.toggle("darkContainer");
  document.querySelector(".darkMode").style.color = "white";
  document.querySelector("#select").classList.toggle("listDark");
  count++;
  if (count > 1) {
    document.querySelector("#shift").classList.remove("ok");
    document.querySelector(".full-screen-container").style.background = "white";
    document.querySelector(".darkMode").style.color = "black";
    document.body.style.color = "black";
    count = 0;
  }
});
// input Data
let countNum = 0;
document.querySelector(".prev").addEventListener("click", () => {
  countNum--;
  document.getElementById("inputVal").innerText = countNum;
});
if (countNum < 0) {
  document.getElementById("inputVal").innerText = 0;
}
document.querySelector(".next").addEventListener("click", () => {
  countNum++;
  document.getElementById("inputVal").innerText = countNum;
});

let selector = document.getElementById("select");
let sum = 0;
document.querySelector("#done").addEventListener("click", () => {
  document.querySelector("#check").classList.remove("good");
  document.querySelector("#done").disabled = true;

  if (sum < countNum) {
    selector.addEventListener("change", () => {
      document.querySelector(".display").innerHTML +=
        selector.value + " " + "<hr style = 'opacity : 0.1;' >";
      for (let i = 0; i < itemList.length; i++) {
        if (selector.value == itemList[i].name) {
          sum += itemList[i].weight;
          console.log(sum, countNum);
        }
      }
      for (let j = 0; j < itemList.length; j++) {
        if (sum + itemList[j].weight > countNum - 2) {
          selector[j].disabled = true;
        }
      }
      document.querySelector(".currVal").innerHTML =
        "Current weight:" + " " + sum;
    });
  }
});

// array of Objects
let itemList = [
  { name: "tomato", weight: 5, value: 200 },
  { name: "apples", weight: 2, value: 250 },
  { name: "banana", weight: 1, value: 200 },
  { name: "groundnut", weight: 5, value: 1500 },
  { name: "beans", weight: 5, value: 2000 },
  { name: "yam", weight: 2, value: 2000 },
  { name: "cocoyam", weight: 3, value: 3000 },
  { name: "bread", weight: 2, value: 200 },
  { name: "chocolate", weight: 5, value: 2000 },
  { name: "butter", weight: 5, value: 1500 },
  { name: "meat", weight: 5, value: 3500 },
  { name: "fish", weight: 7, value: 2000 },
  { name: "coconut", weight: 5, value: 750 },
  { name: "corn", weight: 2, value: 2500 },
  { name: "vegetable", weight: 5, value: 1200 },
  { name: "water", weight: 1, value: 2000 },
  { name: "orange", weight: 5, value: 200 },
  { name: "grapes", weight: 5, value: 1200 },
  { name: "pineapple", weight: 5, value: 500 },
];

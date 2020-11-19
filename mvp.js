
function addNewPage() {
  var section1 = document.getElementById("home");
  var section2 = document.getElementById("addRecipe");
  section1.style.display = "none";
  section2.style.display = "block";
}

function home() {
  var section1 = document.getElementById("home");
  var section2 = document.getElementById("addRecipe");
  section1.style.display = "block";
  section2.style.display = "none";
}

var lastPosition = -600; 
var currentPosition = 0; 
function left() {
  if (currentPosition < 0) {
    currentPosition = currentPosition + 600;
    document.getElementById("cardSlider").style.transform =
      "translateX(" + currentPosition + "px)";
  }
}

function right() {
  if (currentPosition > lastPosition) {
    currentPosition = currentPosition - 600;
    document.getElementById("cardSlider").style.transform =
      "translateX(" + currentPosition + "px)";
  }
}

var list = [];

function addRecipe() {
  list.push({
    recipeName: document.getElementById("recipeName").value,
    ingredients: document.getElementById("ingredients").value,
    instructions: document.getElementById("instructions").value,
  });

  renderRecipeCard()
  lastPosition = lastPosition - 600; 
}

var renderRecipeCard = function () {
    for( var i = 0; i < list.length; i++) {
    var recipeCard = document.createElement("div");
    recipeCard.innerHTML = `
            <div class="container">
                <div class="card">
                    <h2>${list[i].recipeName}</h2>
                </div>
                <div class="card">
                    <h4>Ingredients:</h4>
                </div>
                <div class="card">
                    ${list[i].ingredients}
                </div>
                <div class="card">
                    <h4>Instructions:</h4>
                </div>
                <div class="card">
                    ${list[i].instructions}
                </div> 
            </div>
        `;
    }
  document.getElementById("cardSlider").appendChild(recipeCard);
};

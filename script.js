// ===============================
// SHOW RECIPE
// ===============================
function showRecipe(title, food, ingredients, instructions) {

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalFood").textContent = food;
    document.getElementById("modalIngredients").innerHTML = ingredients;
    document.getElementById("modalInstructions").innerHTML = instructions;

    document.getElementById("recipeModal").style.display = "block";
}


// ===============================
// CLOSE RECIPE
// ===============================
function closeRecipe() {
    document.getElementById("recipeModal").style.display = "none";
}


// ===============================
// SEARCH RECIPES
// ===============================
function searchRecipes() {

    let searchText = document
        .getElementById("recipeSearch")
        .value
        .toLowerCase();

    let recipes = document.querySelectorAll(".recipe-item");

    recipes.forEach(function(recipe) {

        let recipeName = recipe
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (recipeName.includes(searchText)) {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }

    });
}


// ===============================
// FILTER RECIPES
// ===============================
function filterRecipes(category) {

    let recipes = document.querySelectorAll(".recipe-item");

    recipes.forEach(function(recipe) {

        let recipeCategory = recipe.getAttribute("data-category");

        if (category === "all" || recipeCategory === category) {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }

    });
}


// ===============================
// CLOSE POPUP BY CLICKING OUTSIDE
// ===============================
window.onclick = function(event) {

    let modal = document.getElementById("recipeModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};
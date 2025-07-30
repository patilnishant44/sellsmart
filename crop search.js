document.getElementById("searchButton").addEventListener("click", function() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let categories = document.querySelectorAll(".category");
    let found = false;

    categories.forEach(category => {
        let cards = category.querySelectorAll(".card");
        let categoryHasVisibleCard = false;

        cards.forEach(card => {
            const cropName = card.querySelector("h1").innerText.toLowerCase();
            if (cropName.includes(searchValue)) {
                card.style.display = "block";
                categoryHasVisibleCard = true;
                found = true;
            } else {
                card.style.display = "none";
            }
        });

        // Show/hide the entire category section
        if (categoryHasVisibleCard) {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }
    });

    // No results handling
    let noResultsDiv = document.getElementById("noResults");
    if (!noResultsDiv) {
        noResultsDiv = document.createElement("div");
        noResultsDiv.id = "noResults";
        noResultsDiv.style.color = "red";
        noResultsDiv.style.marginTop = "20px";
        noResultsDiv.style.fontWeight = "bold";
        document.body.appendChild(noResultsDiv);
    }

    if (searchValue === "") {
        // Hide no results when search box is empty
        noResultsDiv.innerText = "";
    } else if (!found) {
        noResultsDiv.innerText = "No results found.";
    } else {
        noResultsDiv.innerText = "";
    }
});

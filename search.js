 function searchTable() {
      let input = document.getElementById("searchInput").value.toLowerCase();
      let rows = document.querySelectorAll("#marketTable tbody tr");
      let found = false;


      rows.forEach(row => {
        let state = row.cells[0].textContent.toLowerCase();
        let city = row.cells[1].textContent.toLowerCase();
        if (state.includes(input) || city.includes(input)) {
          row.style.display = "";
          found = true;
        } else {
          row.style.display = "none";
        }
      });

      let noResults = document.getElementById("noResults");
      let marketTable = document.getElementById("marketTable");

      if (found) {
        noResults.style.display = "none";
        marketTable.style.display;
      } else {
        noResults.style.display = "block";
        marketTable.style.display = "none";
      }
    }
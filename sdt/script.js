let foods = JSON.parse(localStorage.getItem("foods")) || [];

function addFood() {
    let name = document.getElementById("foodName").value;
    let date = document.getElementById("expiryDate").value;

    if (name === "" || date === "") {
        alert("Enter all fields");
        return;
    }

    foods.push({ name, date });
    localStorage.setItem("foods", JSON.stringify(foods));

    displayFoods();
}

function displayFoods() {
    let tbody = document.querySelector("#foodTable tbody");
    tbody.innerHTML = "";

    let today = new Date();

    foods.forEach((food, index) => {
        let expiry = new Date(food.date);
        let diff = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

        let status = "";
        let rowClass = "";

        if (diff < 0) {
            status = "Expired";
            rowClass = "expired";
        } else if (diff <= 2) {
            status = "Expiring Soon";
            rowClass = "expiring";
        } else {
            status = "Fresh";
            rowClass = "fresh";
        }

        let tr = document.createElement("tr");
        tr.className = rowClass;
        tr.innerHTML = `
            <td>${food.name}</td>
            <td>${food.date}</td>
            <td>${status}</td>
            <td><button class="deleteBtn" onclick="deleteFood(${index})">Delete</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteFood(index) {
    foods.splice(index, 1);
    localStorage.setItem("foods", JSON.stringify(foods));
    displayFoods();
}

displayFoods();
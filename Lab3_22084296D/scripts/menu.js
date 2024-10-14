$(document).ready(function () {
    $.get("assets/drink-menu.json", function (data) {
        data.forEach(drink => {
            const drinkCard = `
                <div class="col mb-4">
                    <div class="card">
                        <img class="card-img-top" src="${drink.image}" alt="${drink.name}">
                        <div class="card-body">
                            <h5 class="card-title">${drink.name}</h5>
                            <div style="background-color: green; color: white; display: inline-block; padding: 5px; border-radius: 15px;">
                                <p class="card-text m-0">${drink.type}</p>
                            </div>
                            <p class="card-text">${drink.price}</p>
                        </div>
                    </div>
                </div>
            `;
            // Append the card to the drink-menu row
            $("#drink-menu").append(drinkCard);
        });
    }).fail(function (error) {
        $("#container").append(`<div class="alert alert-danger" role="alert">Failed to fetch drink menu. Please try again later</div>`);
    });
});

function calculatePrice() {
    // Get all radio buttons with name 'size'
    const size = document.querySelector('input[name="size"]:checked').value;
    const drink = document.getElementById("drink").value;
    let price=0;
    if (drink == "Please Select") {
        alert("Please select a drink.");
        const sizes = document.getElementsByName('size');
        for (const size of sizes) {
            size.checked = false;
        }
    }
    if (drink == "1"){ //bubble-milktea
        switch(size){
            case "small":
                price = 30;
                break;
            case "medium":
                price = 35;
                break;
            case "large":
                price = 40;
                break;
        }
    }else if (drink == "2"){ //iced-latte
        switch(size){
            case "small":
                price = 30;
                break;
            case "medium":
                price = 35;
                break;
            case "large":
                price = 40;
                break;
        }
    }else if (drink == "3"){ //pineapple-juice
        switch(size){
            case "small":
                price = 25;
                break;
            case "medium":
                price = 30;
                break;
            case "large":
                price = 35;
                break;
        }
    }
    document.getElementById('price').innerText = price;
}

function validateForm(){
    const name = document.getElementById("name").value.trim();
    const drink = document.getElementById("drink").value;
    const size = document.querySelector('input[name="size"]:checked');
    const ice = document.querySelector('input[name="ice"]:checked');
    const sweetness = document.querySelector('input[name="sweetness"]:checked');
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (drink === "Please Select") {
        alert("Please select a drink first.");
        return false;
    }

    if (!size) {
        alert("Please select a size.");
        return false;
    }

    if (!ice) {
        alert("Please select an ice preference.");
        return false;
    }

    if (!sweetness) {
        alert("Please select a sweetness level.");
        return false;
    }

    return true;
}

function placeOrder(event){
    event.preventDefault();
    if (!validateForm()){
        return;
    }

    const name = document.getElementById("name").value.trim();
    const drink = document.getElementById("drink").value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const ice = document.querySelector('input[name="ice"]:checked').value;
    const sweetness = document.querySelector('input[name="sweetness"]:checked').value;

    const orderData = [name,drink,size,ice,sweetness];
    localStorage.setItem("orders", JSON.stringify(orderData));
    
    message = $(".message");
    message.removeClass("d-none")
    message.html("<div>Order placed successfully! Thank you for your order.</div>");
    alertDiv = $(".message > div");
    alertDiv.addClass("alert alert-success");
    alertDiv.hide().fadeIn(500).delay(3000).fadeOut(500, function() {
        // Remove the alert element after fade-out
        $(this).remove();
        document.getElementById("order-form").reset();
        document.getElementById('price').innerText = 0;
        $("#drink-preview").addClass("d-none");
    
});
}
$(document).ready(function(){
    $("#name").on("input", function(){
        var name = $(this).val().trim();
        $(this).addClass('error').removeClass('error-free');
        if (name === ""){
            $(this).addClass('error').removeClass('error-free');
        }else{
            $(this).addClass('error-free').removeClass('error');
        };
    });
})

$(document).ready(function(){
    $("#drink").on("change", function(){
        var drink = $(this).val().trim();
        var previewDiv = $("#drink-preview");
        var previewImage = $("#drink-image");

        if (drink === "Please Select"){
            $(this).addClass('error').removeClass('error-free');
            previewDiv.addClass("d-none");
        }else{
            $(this).addClass('error-free').removeClass('error');
            if (drink === "1") {
                previewImage.attr("src", "assets/bubble-milktea.png").attr("alt", "Bubble Milktea");
            } else if (drink === "2") {
                previewImage.attr("src", "assets/iced-latte.jpg").attr("alt", "Iced Latte");
            } else if (drink === "3") {
                previewImage.attr("src", "assets/pineapple-juice.jpg").attr("alt", "Pineapple Juice");
            }
            previewDiv.removeClass("d-none");
        };
    });
})
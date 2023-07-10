$(document).ready(function() {
    // Handle mobile image only on home page
    let homeUrl = window.location.origin + "/";
    let currentUrl = window.location.origin + window.location.pathname;
    console.log(currentUrl);
    if(currentUrl === homeUrl) {
        console.log(window.innerWidth <= 480);
        $(".mobile-image").css("display", "block");
    }

    
    // Show Currency Selector on Price Page
    let pricingUrl = window.location.origin + "/pricing/";
    
    if(currentUrl === pricingUrl) {
        $(".currency-container").css("display", "block");
    }
});

// Currency Conversion
$("#currency-select").on("change", function(){
    let selectedText = $("#currency-select :selected").text();
    let selectedValue = parseInt($("#currency-select").val());
    let selectedCurrency = {};

    let currencies = {
        "AUD": { "val": 1, "symbol": "AUD", "monthly": 2, "yearly": 1 },
        "CAD": { "val": 2, "symbol": "CAD", "monthly": 2, "yearly": 1 },
        "GBP": { "val": 3, "symbol": "GBP", "monthly": 2, "yearly": 1 },
        "USD": { "val": 4, "symbol": "$", "monthly": 2, "yearly": 1 }
    }


    switch (selectedValue) {
        case 1:
            selectedCurrency = currencies.AUD;
            break;
        case 2:
            console.log(currencies.CAD);
            selectedCurrency = currencies.CAD;
            break;
        case 3:
            selectedCurrency = currencies.GBP;
            break;
        case 4:
            selectedCurrency = currencies.USD;
            break;     
    }

    $(".currency-symbol").html(selectedCurrency.symbol);
    $(".currency-amount-monthly").html(selectedCurrency.monthly);
    $(".currency-amount-yearly").html(selectedCurrency.yearly);
});
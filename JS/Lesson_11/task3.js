function extractCurrencyValue (string){
    string = string.match(/\d+/);
    return string[0];
}

extractCurrencyValue("$ 120");


/**
 * Copyright (c) MIT 2016 awk888
 **/

// The patterns for the JavaScript code.
var find_function = /var|function|return|new/g;
var find_string = /\"([^\"]+)\"/g;
var find_parameter = /\(([^\(]+)\(/g;
var find_keyword = /this|RegExp/g;
var find_operator = /^\s*(?:\+|\-|\*)/g;


// The main highlighting function.
var highlight = function(string, codeType){
    this.ct = codeType;
    
    switch(this.ct){
        // This only runs if the codeType is "JavaScript".
        case "JavaScript":
            string = string.replace(find_function, "<span class='function'>$&</span>"); // Finds all the functions.
            string = string.replace(find_string, "<span class='string'>$&</span>"); // Finds all the strings.
            string = string.replace(find_keyword, "<span class='key-word'>$&</span>"); // Finds all the key words.
            string = string.replace(find_operator, "<span class='operator'>$&</span>"); // Finds all the operators.
        break;
     }
            
    return string;
};

// Only works with jQuery.
var createCode = function(string, type, place, codeType) {
    this.str = string;
    this.type = type;
    this.place = place;
    this.CT = codeType;
    
    $(this.type).html(highlight(this.str, this.CT)).addClass('code').appendTo(this.place);
};

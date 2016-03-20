/**
 * Copyright (c) Apache License 2016 awk888
 **/

// The patterns for the JavaScript code.
var find_function = /var|function|return|new|for/g;
var find_string = /\"([^\"]+)\"/g;
var find_parameter = /\(([^\(]+)\(/g;
var find_keyword = /this|RegExp/g;
var find_operator = /^\s*(?:\+|\-|\*)/g;
var find_comment = /^\s*\/\//g;

// The patterns for the HTML code.
/*
var find_html = //g;
var find_atr = /style|class|id/g;
*/

// The main highlighting function.
var highlight = function(string, codeType) {
    this.ct = codeType;
    
    switch(this.ct){
        // This only runs if the codeType is "JavaScript".
        case "JavaScript":
            string = string.replace(find_function, "<span class='function'>$&</span>"); // Finds all the functions.
            string = string.replace(find_string, "<span class='string'>$&</span>"); // Finds all the strings.
            string = string.replace(find_keyword, "<span class='key-word'>$&</span>"); // Finds all the key words.
            string = string.replace(find_operator, "<span class='operator'>$&</span>"); // Finds all the operators.
            string = string.replace(find_comment, "<span class='comment'>$&</span>"); // Finds all the comments.
        break;
        
        // This only runs if the codeType is "HTML".
        /*
        case "HTML":
            string = string.replace(find_html, "<span class='html-tag'>$&</span>"); // Finds all the tags.
            string = string.replace(find_atr, "<span class'html-atr'>$&</span>"); // Finds all the atrs.
        break;
        */
     }
            
    return string;
};

// Only works with jQuery.
var createCode = function(string, type, place, codeType) {
    this.str = string || 'Put code here.';
    this.type = type || 'code';
    this.place = place || 'body';
    this.CT = codeType || 'default';
    
    $('<' + this.type + '>').html(highlight(this.str, this.CT)).addClass('code').appendTo(this.place);
};

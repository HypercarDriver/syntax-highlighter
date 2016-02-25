/**
* Copyright (c) MIT 2016 awk888
**/

// JavaScript Code Patterns         
var JavaScript_code = [
    /var|function|return|new/g,
    /\(([^\(]+)\(/g,
    /this|RegExp/g,
    /^\s*(?:\+|\-|\*)/g
];

var highlight = function(string, codeType){
    this.ct = codeType;
    
    switch(this.ct){
        case "JavaScript":
            string = string.replace(JavaScript_code[0], "<span class='function'>$&</span>");
    
            string = string.replace(JavaScript_code[1], "<span class='key-word'>$&</span>");
            
            string = string.replace(JavaScript_code[2], "<span class='operator'>$&</span>");
            
            string = string.replace(JavaScript_code[3], "<span class='string'>$&</span>");
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

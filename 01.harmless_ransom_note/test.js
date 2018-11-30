/*
    Given arbitrary magazine note string find out if it can be
    a ransome note including all words and exact (n times)match.
    "I like doing javascript coding in javascipt. Because javascript
    is so fun and amazing language to do it
    "
    RansomeNote => 'Javascipt is fun and amazing. Javascipt is coding language'
*/
var magazine = "I like doing javascript coding in javascript. Because javascript is so fun and amazing language to do it";
var ransomeNote = "Javascipt is fun and amazing. Javascipt is coding language";

function harmlessRansomeNote(note, magazineText) {
    var magArr = magazineText.replace(/[.!?,:;]/g,'').split(' ');
    var noteArr = note.split(' ');
    var textObj = {};

    magArr.forEach(word => {
        if(!textObj[word]) {
            textObj[word] = 0;
        } 
        textObj[word]++;
    });
    
    noteArr.forEach(word => {
        if(textObj[word]) textObj[word]--;
    })
    
   
}

harmlessRansomeNote(ransomeNote, magazine);

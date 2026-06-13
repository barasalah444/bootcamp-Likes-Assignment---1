
var count = 3;

function increaseLike() {    
    count++;

    var likeSpan = document.querySelector("#like-count");
    
    likeSpan.innerText = count;
}
//hide all books
const hideBook = document.querySelector('#hide');
hidebooks.addEventListener('change',function(e){
    if(hideBook.checked){
        addBooks.style.display ="none";
    } else{
        addBooks.style.display = "initial";
    }
});

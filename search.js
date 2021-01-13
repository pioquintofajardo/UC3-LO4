//search
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const ins = e.target.value.toLowerCase();
    const booksNames = addbooks.getElementsByTagName('li');
    Array.from(bookNames).forEach(function(bookName){
        const specificName = bookName.textContent;
        if(specificName.toLowerCase().indexOf(ins) != -1){
            bookName.style.display = 'block';
        } else{
            bookName.style.display = 'none';
        }
    });
});

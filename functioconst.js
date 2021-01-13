function
{
    const books = document.querySelector(".headings");
    const changeBck = books.nextElementSibling;
    const changeBck2 = books.parentElement;

    changeBck2.setAttribute("style", "color:red");
    changeBck.setAttribute("style", "color:green");
    

}
function main()
{
    displayNav();
}

function displayNav()
{
    var nav = document.getElementById('nav');
    var html = '\
    <header> \
        <nav> \
            <ul class = "navlist"> \
            <li class = "nav-item"><h1 id = "logo"><a class="nav-link" href="index.html">&lt;ZACH&nbsp;NICHOLS&gt;</a></h1></li> \
            <li class="nav-item"><a href="" class="nav-link">Projects</a></li> \
            <li class = "nav-item"><a class="nav-link" href="contact.html">Contact</a></li> \
            </ul> \
        </nav> \
    </header> \
    ';
    nav.innerHTML = html.trim();
}

main();


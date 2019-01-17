

// kfsadlkfjdsladkfj
function openNav() {
    let openBtn = document.getElementById('mySidenav');
    openBtn.addEventListener('click', function() {
        document.querySelector('.sidebar').style.width = "400px";
        openBtn.classList = "openNav"

    })
}

//close da damn thing
function closeNav() {
    let closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', function() {
        closeBtn.style.width = '0';
    })
}
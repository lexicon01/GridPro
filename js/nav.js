let openBtn = document.getElementById('mySidenav');
let sidebar = document.querySelector('.sidebar');
let closeBtn = document.getElementById('closeBtn');
let classNav = document.querySelector('.openNav');
let idSideBar = document.getElementById('sidebar');
// kfsadlkfjdsladkfj
function openNav() {
    
    // btn click to make nav slide and open up
    openBtn.addEventListener('click', function() {
       // document.querySelector('.sidebar').style.width = "400px";
        sidebar.classList = "openNav";
        //document.querySelector('.openNav').style.width = "22%";

        // remove open btn
        openBtn.style.display = 'none';

        // display close btn
        closeBtn.style.display = 'block';


    });
}

//close da damn thing
function closeNav() {
    closeBtn.addEventListener('click', function() {
        idSideBar.classList = 'sidebar';

        openBtn.style.display = 'block';

        closeBtn.style.display = 'none';
    });
}
   
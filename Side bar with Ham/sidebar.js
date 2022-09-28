const sideBarBtn = document.querySelector('.sidebar-toggle');
const cancelBtn = document.querySelector('.remove-class');
const sidebar = document.querySelector('.sidebar');

sideBarBtn.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar');
});

cancelBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
})
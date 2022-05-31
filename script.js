let sidebarBtn = document.getElementById('sidebar-btn');
let sidebar = document.getElementById('sidebar');

sidebarBtn.onclick = () => {
    sidebar.classList.toggle('active');
}
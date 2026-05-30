const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');

toggleBtn.onclick = () => {
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
};
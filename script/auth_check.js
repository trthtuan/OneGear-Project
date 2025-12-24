document.addEventListener('DOMContentLoaded', () => {
    updateUserInterface();
});

function updateUserInterface() {
    const currentUser = JSON.parse(localStorage.getItem('ONEGEAR_CURRENT_USER'));

    if (!currentUser) return;

    const navList = document.querySelector('.navbar-nav');
    if (!navList) return;

    const links = navList.querySelectorAll('a.nav-link');
    links.forEach(link => {
        const text = link.innerText.toLowerCase();
        if (text.includes('đăng ký') || text.includes('đăng nhập') || text.includes('sign up')) {
            link.parentElement.style.display = 'none';
        }
    });

    const userMenuHtml = `
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: #db4444; font-weight: bold;">
                Xin chào, ${currentUser.name}
            </a>
            <ul class="dropdown-menu" aria-labelledby="userDropdown">
                <li><a class="dropdown-item" href="./history.html">Lịch sử mua hàng</a></li> <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" onclick="logoutUser()">Đăng xuất</a></li>
            </ul>
        </li>
    `;

    navList.insertAdjacentHTML('beforeend', userMenuHtml);
}

// Đăng xuất 
window.logoutUser = function() {
    if(confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        localStorage.removeItem('ONEGEAR_CURRENT_USER');
        localStorage.removeItem('ONEGEAR_CART');
        window.location.reload();
        window.location.href = 'index.html';
    }
}
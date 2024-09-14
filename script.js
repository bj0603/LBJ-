// 選單切換功能
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});

// 'Get Started' 按鈕點擊事件

function redirectToPage() {
    window.location.href = "service.html"; // 將 ".html" 替換為你想跳轉的頁面
}

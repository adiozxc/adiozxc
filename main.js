// 回顶部按钮
const backToTopBtn = document.getElementById('backToTop');

// 滚动时显示或隐藏按钮
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 点击按钮平滑滚动到顶部
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

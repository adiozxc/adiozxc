document.addEventListener('DOMContentLoaded', () => {
    // 回顶部按钮
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
        highlightNavOnScroll();
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 微信二维码弹窗
    const modal = document.getElementById("wechatModal");
    const btn = document.getElementById("wechatBtn");
    const span = document.querySelector(".close");

    if (btn && modal && span) {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // 防止默认行为，尤其如果你还没把 button 改成真正的 <button>
            modal.style.display = "block";
        });

        span.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // 导航栏菜单响应式切换
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 滚动高亮导航
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('#navMenu a');

    function highlightNavOnScroll() {
        let scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100; // 提前100px激活
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // 页面载入时执行一次
    highlightNavOnScroll();
});
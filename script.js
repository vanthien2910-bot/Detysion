document.addEventListener("DOMContentLoaded", () => {
    // 1. Tương tác Mở rộng Icon Tìm kiếm
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    
    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', () => {
            searchInput.focus(); // Nhấp vào icon sẽ tự động focus để thanh input dài ra
        });
    }

    // 2. Logic cho trang Cá nhân hóa (Custom)
    const colorDots = document.querySelectorAll('.color-dot');
    const patternBoxes = document.querySelectorAll('.pattern-box');

    colorDots.forEach(dot => {
        dot.addEventListener('click', function() {
            colorDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });

    patternBoxes.forEach(box => {
        box.addEventListener('click', function() {
            patternBoxes.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 3. Logic Đánh lừa form Thanh Toán (Trang Cart)
    const btnCheckout = document.getElementById('btn-checkout');
    const cartItemsSection = document.getElementById('cart-items-section');
    const checkoutForm = document.getElementById('checkout-form');
    
    const formThanhToan = document.getElementById('form-thanh-toan');
    const successMessage = document.getElementById('success-message');
    const cartRight = document.querySelector('.cart-right');

    // Chuyển từ giỏ hàng sang nhập thông tin
    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            cartItemsSection.style.display = 'none'; // Giấu danh sách áo
            checkoutForm.style.display = 'block';    // Hiện form điền địa chỉ
            btnCheckout.style.display = 'none';      // Giấu nút thanh toán cũ
            document.getElementById('btn-submit-order').style.display = 'block'; // Hiện nút Hoàn tất
        });
    }

    // Chuyển từ form sang thông báo Thành Công
    if (formThanhToan) {
        formThanhToan.addEventListener('submit', (e) => {
            e.preventDefault(); // Chặn load lại trang web
            
            // Ẩn toàn bộ cột trái và cột phải
            document.querySelector('.cart-page-wrapper').style.display = 'block';
            checkoutForm.style.display = 'none';
            if(cartRight) cartRight.style.display = 'none';
            
            // Hiển thị giao diện thành công giả mạo
            successMessage.style.display = 'block';
        });
    }
});
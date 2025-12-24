let currentDiscountRate = 0; 

function getCartKey() {
    const currentUser = JSON.parse(localStorage.getItem('ONEGEAR_CURRENT_USER'));
    if (currentUser) {
        return `ONEGEAR_CART_${currentUser.email}`;
    }
    return 'ONEGEAR_CART_GUEST';
}

let cartKey = getCartKey();
let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

function saveCart() {
    localStorage.setItem(cartKey, JSON.stringify(cart));
}

// format tiền 
function formatMoney(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// xử lí giảm giá 
function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const code = couponInput.value.trim().toLowerCase();

    // Regex
    const huceRegex = /^[0-9]+@st\.huce\.edu\.vn$/;

    if (huceRegex.test(code)) {
        currentDiscountRate = 0.5;
        alert(`Chấp nhận mã sinh viên HUCE: ${code}\nBạn được giảm 50% tổng đơn hàng!`);
        renderCart(); 
    } else {
        currentDiscountRate = 0;
        alert("Mã giảm giá không hợp lệ!\nVui lòng nhập đúng định dạng email SV HUCE (vd: 123456@st.huce.edu.vn)");
        renderCart();
    }
}

// render giỏ hàng 
function renderCart() {
    cartKey = getCartKey(); 
    cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const cartContainer = document.getElementById('cart-items-wrapper');

    const subTotalEl = document.querySelector('.cart-total-row span:last-child');
    const discountRow = document.getElementById('discount-row');
    const discountAmountEl = document.getElementById('discount-amount');
    const finalTotalEl = document.querySelector('.total-final span:last-child');

    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let subTotalAmount = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-center p-5">Giỏ hàng của bạn đang trống!</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subTotalAmount += itemTotal;
    
            const html = `
                <div class="cart-item" id="item-${item.id}">
                    <div class="col-product">
                        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/80'">
                        <span class="product-name">${item.name}</span>
                    </div>
                    <div class="col-price">${formatMoney(item.price)}</div>
                    <div class="col-quantity">
                        <input type="number" class="qty-input" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                    </div>
                    <div class="col-subtotal">${formatMoney(itemTotal)}</div>
                    <div class="col-remove">
                        <i class="fas fa-times-circle remove-btn" onclick="removeItem(${item.id})"></i>
                    </div>
                </div>
            `;
            cartContainer.insertAdjacentHTML('beforeend', html);
        });
    }

    // tính giảm giá 
    let discountAmount = subTotalAmount * currentDiscountRate;
    let finalTotal = subTotalAmount - discountAmount;
    
    if (subTotalEl) subTotalEl.innerText = formatMoney(subTotalAmount);

    if (discountRow && discountAmountEl) {
        if (currentDiscountRate > 0) {
            discountRow.style.display = 'flex';
            discountAmountEl.innerText = `-${formatMoney(discountAmount)}`;
        } else {
            discountRow.style.display = 'none';
        }
    }

    // cập nhật tiền cuối
    if (finalTotalEl) finalTotalEl.innerText = formatMoney(finalTotal);
    localStorage.setItem('ONEGEAR_FINAL_TOTAL', finalTotal);
}

function updateQuantity(id, newQuantity) {
    const item = cart.find(p => p.id === id);
    if (item) {
        let qty = parseInt(newQuantity);
        if (qty < 1) qty = 1;
        item.quantity = qty;
        saveCart(); 
        renderCart(); 
    }
}

function removeItem(id) {
    if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
        cart = cart.filter(item => item.id !== id);
        saveCart(); 
        renderCart(); 
        
        if (cart.length === 0) {
            currentDiscountRate = 0;
            renderCart();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
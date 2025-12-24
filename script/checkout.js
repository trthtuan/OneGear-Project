// check giỏ hàng
const currentUser = JSON.parse(localStorage.getItem('ONEGEAR_CURRENT_USER'));
let cartKey = 'ONEGEAR_CART_GUEST';
if (currentUser && currentUser.email) {
    cartKey = `ONEGEAR_CART_${currentUser.email}`;
}
const cartData = JSON.parse(localStorage.getItem(cartKey)) || [];

function formatMoney(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function renderOrderSummary() {
    const listContainer = document.getElementById('checkout-items-list');
    const subtotalEl = document.getElementById('subtotal-price');
    const totalEl = document.getElementById('total-price');
    
    const discountRow = document.getElementById('checkout-discount-row');
    const discountAmountEl = document.getElementById('checkout-discount-amount');

    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    let subTotalAmount = 0;

    if (cartData.length === 0) {
        listContainer.innerHTML = '<p class="text-center">Giỏ hàng trống!</p>';
        return;
    }

    // danh sách sản phẩm
    cartData.forEach(item => {
        subTotalAmount += (item.price * item.quantity);
        
        const html = `
            <div class="checkout-item-row" style="display: flex; align-items: center; margin-bottom: 15px;">
                <img src="${item.image}" 
                     alt="${item.name}" 
                     style="width: 50px; height: 50px; object-fit: contain; margin-right: 15px; border: 1px solid #eee;"
                     onerror="this.src='./img/keyboard/keyboard1.jpg'"> 
                <div style="flex: 1;">
                    <div style="font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">
                        ${item.name}
                    </div>
                    <small class="text-muted">x${item.quantity}</small>
                </div>
                <div style="font-weight: bold;">${formatMoney(item.price * item.quantity)}</div>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', html);
    });

    // tính tiền 
    const storedFinalTotal = localStorage.getItem('ONEGEAR_FINAL_TOTAL');
    let finalPayAmount = subTotalAmount;
    // giảm giá 
    if (storedFinalTotal !== null && storedFinalTotal !== "") {
        finalPayAmount = parseFloat(storedFinalTotal);
    }
    const discountValue = subTotalAmount - finalPayAmount;
    
    // cập nhật tiền sau giảm giá 
    if(subtotalEl) subtotalEl.innerText = formatMoney(subTotalAmount);

    if (discountRow && discountAmountEl) {
        if (discountValue > 0) {
            discountRow.style.display = 'flex'; 
            discountAmountEl.innerText = `-${formatMoney(discountValue)}`;
        } else {
            discountRow.style.display = 'none'; 
        }
    }

    // tổng thanh toán
    if(totalEl) {
        totalEl.innerText = formatMoney(finalPayAmount);
        if (discountValue > 0) {
            totalEl.style.color = 'green';
            totalEl.innerHTML += ` <br><span style="font-size: 0.6em; color: #db4444;">(Đã áp dụng mã giảm giá SV)</span>`;
        }
    }
    
    if(currentUser) {
        const nameInput = document.getElementById('fullname');
        const emailInput = document.getElementById('email');
        if(nameInput) nameInput.value = currentUser.name || '';
        if(emailInput) emailInput.value = currentUser.email || '';
    }
}

// xử lí đặt hàng 
function placeOrder(event) {
    event.preventDefault();
    
    if(cartData.length === 0) {
        alert("Giỏ hàng trống!");
        return;
    }

    const name = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const emailInput = document.getElementById('email').value;
    
    let ownerEmail = emailInput; 
    if (currentUser && currentUser.email) {
        ownerEmail = currentUser.email;
    }

    const storedFinalTotal = localStorage.getItem('ONEGEAR_FINAL_TOTAL');
    let finalTotal = 0;
    
    let subTotal = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (storedFinalTotal !== null) {
        finalTotal = parseFloat(storedFinalTotal);
    } else {
        finalTotal = subTotal;
    }

    const newOrder = {
        id: 'DH' + Date.now(),
        date: new Date().toLocaleString(),
        customer: { name, phone, address, email: emailInput },
        items: cartData, 
        total: finalTotal,
        status: "Đang xử lý"
    };

    const orderHistory = JSON.parse(localStorage.getItem('ONEGEAR_ORDER_HISTORY')) || [];
    orderHistory.unshift(newOrder);
    localStorage.setItem('ONEGEAR_ORDER_HISTORY', JSON.stringify(orderHistory));
    alert(`ĐẶT HÀNG THÀNH CÔNG!\nMã đơn hàng: ${newOrder.id}\nCảm ơn bạn đã ủng hộ ONEGEAR.`);
    
    localStorage.removeItem(cartKey);
    localStorage.removeItem('ONEGEAR_FINAL_TOTAL');
    
    window.location.href = "./index.html";
}

document.addEventListener('DOMContentLoaded', renderOrderSummary);

// qr code 
const radioBank = document.getElementById('paymentBank');
const radioCOD = document.getElementById('paymentCOD');
const bankInfoBox = document.getElementById('bankInfoBox');
if(radioBank && bankInfoBox) {
    radioBank.addEventListener('change', () => { if(radioBank.checked) bankInfoBox.style.display = 'block'; });
}
if(radioCOD && bankInfoBox) {
    radioCOD.addEventListener('change', () => { if(radioCOD.checked) bankInfoBox.style.display = 'none'; });
}
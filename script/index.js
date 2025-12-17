// script/index.js

// 1. KIỂM TRA DỮ LIỆU
if (typeof dbProducts === 'undefined') {
    console.error("Lỗi: Không tìm thấy dbProducts. Hãy kiểm tra lại file data.js!");
    alert("Lỗi dữ liệu sản phẩm! Vui lòng tải lại trang.");
}

// Biến chứa danh sách sản phẩm gốc
const products = dbProducts || [];

// 2. HÀM ĐỊNH DẠNG TIỀN TỆ
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// 3. HÀM RENDER HTML (HIỂN THỊ SẢN PHẨM)
function renderFilteredList(data) {
    const container = document.getElementById('product-container');
    if (!container) return;

    if (data.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 5rem;">
                <h3 class="text-muted">😢 Không tìm thấy sản phẩm phù hợp!</h3>
                <p>Vui lòng thử bỏ bớt tiêu chí lọc hoặc chọn "Tất cả".</p>
                <button class="btn btn-outline-dark mt-3" onclick="resetFilters()">Xóa bộ lọc</button>
            </div>
        `;
        return;
    }

    let htmlContent = '';

    data.forEach(product => {
        // Xử lý hiển thị giá
        let priceBoxHtml = '';
        if (product.oldPrice && product.oldPrice > product.price) {
            priceBoxHtml = `
                <span class="old-price">${formatCurrency(product.oldPrice)}</span>
                <div class="price-row">
                    <span class="new-price">${formatCurrency(product.price)}</span>
                    <span class="discount-tag">-${product.discount}%</span>
                </div>
            `;
        } else {
            priceBoxHtml = `
                <div class="price-row" style="margin-top: auto">
                    <span class="new-price">${formatCurrency(product.price)}</span>
                </div>
            `;
        }

        // Xử lý nhãn hot
        const hotBadge = product.isHot ? `<div class="card-badge hot-deal"><i class="fas fa-fire"></i> HOT</div>` : '';
        const fallbackImg = './img/keyboard/keyboard1.jpg';

        // Tags nhỏ hiển thị (Ví dụ: Wireless, RGB)
        const tags = [product.connection, product.led !== 'None' ? product.led : ''].filter(t => t).map(t => `<span class="tag">${t}</span>`).join('');

        htmlContent += `
            <div class="product-card-custom">
                ${hotBadge}
                <div class="product-img-wrap">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='${fallbackImg}'">
                    </a>
                </div>
                <div class="product-info">
                    <h3 class="product-name">
                        <a href="product.html?id=${product.id}" style="color: inherit; text-decoration: none;">
                            ${product.name}
                        </a>
                    </h3>
                    <div class="product-tags mb-2">${tags}</div>
                    <div class="product-price-box">${priceBoxHtml}</div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// 4. HÀM LỌC CHÍNH (LOGIC ĐẦY ĐỦ)
function filterProducts() {
    // a. Lấy giá trị từ TẤT CẢ các ô input/select
    const searchVal   = document.getElementById('search-input').value.toLowerCase().trim(); // Ô tìm kiếm
    const typeVal     = document.getElementById('filter-type').value;      // Loại SP
    const priceVal    = document.getElementById('filter-price').value;     // Giá
    const brandVal    = document.getElementById('filter-brand').value;     // Hãng
    const connVal     = document.getElementById('filter-connection').value;// Kết nối
    const keycapVal   = document.getElementById('filter-keycap').value;    // Keycap
    const ledVal      = document.getElementById('filter-led').value;       // LED
    const sizeVal     = document.getElementById('filter-size').value;      // Kích thước
    const layoutVal   = document.getElementById('filter-layout').value;    // Layout
    const purposeVal  = document.getElementById('filter-purpose').value;   // Mục đích
    const sortVal     = document.getElementById('sort-order').value;       // Sắp xếp

    // b. Bắt đầu lọc
    let filteredData = products.filter(item => {
        // --- Lọc TÌM KIẾM (Tên sản phẩm) ---
        if (searchVal && !item.name.toLowerCase().includes(searchVal)) return false;

        // --- Lọc LOẠI SẢN PHẨM (Bàn phím / Chuột / Combo) ---
        if (typeVal !== 'all' && item.type !== typeVal) return false;

        // --- Lọc GIÁ ---
        if (priceVal === 'under-1' && item.price >= 1000000) return false;
        if (priceVal === '1-3' && (item.price < 1000000 || item.price > 3000000)) return false;
        if (priceVal === 'over-3' && item.price <= 3000000) return false;

        // --- Lọc HÃNG (So sánh không phân biệt hoa thường) ---
        if (brandVal !== 'all' && item.brand.toLowerCase() !== brandVal.toLowerCase()) return false;

        // --- Lọc KẾT NỐI ---
        if (connVal !== 'all' && item.connection !== connVal) return false;

        // --- Lọc LED ---
        if (ledVal !== 'all' && item.led !== ledVal) return false;

        // --- Lọc KEYCAP ---
        if (keycapVal !== 'all' && item.keycap !== keycapVal) return false;

        // --- Lọc KÍCH THƯỚC (Size Type) ---
        if (sizeVal !== 'all' && item.sizeType !== sizeVal) return false;

        // --- Lọc LAYOUT ---
        if (layoutVal !== 'all' && item.layoutType !== layoutVal) return false;

        // --- Lọc MỤC ĐÍCH ---
        if (purposeVal !== 'all' && item.purposeType !== purposeVal) return false;

        return true; // Giữ lại sản phẩm thỏa mãn tất cả điều kiện
    });

    // c. Thực hiện Sắp xếp
    if (sortVal === 'price-asc') {
        filteredData.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
        filteredData.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'name-asc') {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
    }

    // d. Vẽ lại giao diện
    renderFilteredList(filteredData);
}

// 5. HÀM RESET BỘ LỌC
function resetFilters() {
    // Reset tất cả các dropdown về 'all'
    const selects = document.querySelectorAll('.custom-select-filter');
    selects.forEach(select => select.value = 'all');
    
    // Reset ô tìm kiếm và sắp xếp
    document.getElementById('search-input').value = '';
    document.getElementById('sort-order').value = 'default';

    // Gọi lại hàm lọc để hiển thị toàn bộ
    filterProducts();
}

// 6. KHỞI CHẠY
document.addEventListener('DOMContentLoaded', () => {
    // Render lần đầu (hiển thị tất cả)
    renderFilteredList(products);
    
    // Thêm sự kiện 'Enter' cho ô tìm kiếm
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // Ngăn reload form
                filterProducts();
            }
        });
    }
});
// FILE: script/index.js

// ... (Giữ nguyên code cũ ở trên) ...

// ==================== THÊM CHỨC NĂNG TÌM KIẾM & CUỘN ====================

// Hàm xử lý khi bấm nút Tìm kiếm hoặc nhấn Enter
function handleSearch() {
    // 1. Gọi hàm lọc để cập nhật danh sách sản phẩm theo từ khóa
    filterProducts();

    // 2. Cuộn màn hình xuống phần danh sách sản phẩm
    const productSection = document.getElementById('product-listing-section');
    if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Cập nhật lại sự kiện KHỞI CHẠY (Thay thế đoạn cuối file cũ)
document.addEventListener('DOMContentLoaded', () => {
    renderFilteredList(products);

    // Xử lý sự kiện khi nhấn phím Enter trong ô tìm kiếm
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                handleSearch(); // Gọi hàm tìm kiếm và cuộn
            }
        });
    }
});
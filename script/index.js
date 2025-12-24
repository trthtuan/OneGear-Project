if (typeof dbProducts === 'undefined') {
    console.error("Lỗi: Không tìm thấy dbProducts. Hãy kiểm tra lại file data.js!");
    alert("Lỗi dữ liệu sản phẩm! Vui lòng tải lại trang.");
}

const products = dbProducts || [];

// định dạng tiền 
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// render sản phẩm 
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

        const hotBadge = product.isHot ? `<div class="card-badge hot-deal"><i class="fas fa-fire"></i> HOT</div>` : '';
        const fallbackImg = './img/keyboard/keyboard1.jpg';

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

// lọc 
function filterProducts() {

    const searchVal = document.getElementById('search-input').value.toLowerCase().trim();
    const typeVal = document.getElementById('filter-type').value;
    const priceVal = document.getElementById('filter-price').value;
    const brandVal = document.getElementById('filter-brand').value;
    const connVal = document.getElementById('filter-connection').value;
    const keycapVal = document.getElementById('filter-keycap').value;
    const ledVal = document.getElementById('filter-led').value;
    const sizeVal = document.getElementById('filter-size').value;
    const layoutVal = document.getElementById('filter-layout').value;
    const purposeVal = document.getElementById('filter-purpose').value;
    const sortVal = document.getElementById('sort-order').value;

    let filteredData = products.filter(item => {
        if (searchVal && !item.name.toLowerCase().includes(searchVal)) return false;
        if (typeVal !== 'all' && item.type !== typeVal) return false;
        if (priceVal === 'under-1' && item.price >= 1000000) return false;
        if (priceVal === '1-3' && (item.price < 1000000 || item.price > 3000000)) return false;
        if (priceVal === 'over-3' && item.price <= 3000000) return false;
        if (brandVal !== 'all' && item.brand.toLowerCase() !== brandVal.toLowerCase()) return false;
        if (connVal !== 'all' && item.connection !== connVal) return false;
        if (ledVal !== 'all' && item.led !== ledVal) return false;
        if (keycapVal !== 'all' && item.keycap !== keycapVal) return false;
        if (sizeVal !== 'all' && item.sizeType !== sizeVal) return false;
        if (layoutVal !== 'all' && item.layoutType !== layoutVal) return false;
        if (purposeVal !== 'all' && item.purposeType !== purposeVal) return false;
        return true;
    });

    if (sortVal === 'price-asc') {
        filteredData.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
        filteredData.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'name-asc') {
        filteredData.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderFilteredList(filteredData);
}

function resetFilters() {
    const selects = document.querySelectorAll('.custom-select-filter');
    selects.forEach(select => select.value = 'all');
    document.getElementById('search-input').value = '';
    document.getElementById('sort-order').value = 'default';
    filterProducts();
}

document.addEventListener('DOMContentLoaded', () => {
    renderFilteredList(products);
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                filterProducts();
            }
        });
    }
});

function handleSearch() {
    filterProducts();
    const productSection = document.getElementById('product-listing-section');
    if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderFilteredList(products);
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                handleSearch();
            }
        });
    }
});
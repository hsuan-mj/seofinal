// --- GLOBAL SHOPPING CART LOGIC ---
let cart = [];

function initCart() {
  const savedCart = localStorage.getItem("aura_cart");
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("aura_cart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, size, color, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(
    item => item.id === productId && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      quantity: quantity
    });
  }

  saveCart();
  showCartDrawer();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

function updateQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}

function updateCartUI() {
  const badge = document.getElementById("cart-count");
  if (badge) {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.innerText = totalCount;
    badge.style.display = totalCount > 0 ? "flex" : "none";
  }

  const drawerItems = document.getElementById("cart-drawer-items");
  const drawerSubtotal = document.getElementById("cart-drawer-subtotal");

  if (drawerItems) {
    if (cart.length === 0) {
      drawerItems.innerHTML = `
        <div class="cart-empty">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <p>購物車目前是空的</p>
          <a href="#" class="btn btn-secondary btn-sm close-drawer-trigger">開始逛逛</a>
        </div>
      `;
    } else {
      let html = "";
      let subtotal = 0;
      cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        html += `
          <div class="cart-item">
            <img src="${item.image}" title="${item.name}" alt="${item.name}">
            <div class="cart-item-info">
              <h4>${item.name}</h4>
              <p class="cart-item-meta">尺寸: ${item.size} | 顏色: ${item.color}</p>
              <div class="cart-item-actions">
                <div class="qty-btn-group">
                  <button onclick="updateQuantity(${index}, -1)">-</button>
                  <span>${item.quantity}</span>
                  <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <span class="cart-item-price">NT$ ${itemTotal.toLocaleString()}</span>
              </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">&times;</button>
          </div>
        `;
      });
      drawerItems.innerHTML = html;
      if (drawerSubtotal) {
        drawerSubtotal.innerText = `NT$ ${subtotal.toLocaleString()}`;
      }
    }
  }

  // Setup close drawer trigger
  const closeTriggers = document.querySelectorAll(".close-drawer-trigger");
  closeTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      hideCartDrawer();
    });
  });
}

function showCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }
}

function hideCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// --- CORE LAYOUT RENDERING ---
function renderHeader() {
  const headerHTML = `
    <div class="container navbar-container">
      <a href="index.html" class="logo">
        <img src="assets/logo.png" alt="AURA Logo">
        <span>AURA</span>
      </a>
      
      <nav class="nav-menu" id="nav-menu">
        <a href="index.html" class="nav-link" id="nav-home">首頁</a>
        <a href="about.html" class="nav-link" id="nav-about">品牌故事</a>
        <div class="nav-dropdown">
          <span class="nav-link dropdown-toggle">探索鞋款 <i class="chevron-down"></i></span>
          <div class="dropdown-menu">
            <a href="category-casual.html">休閒鞋 Casual</a>
            <a href="category-sports.html">運動鞋 Sports</a>
            <a href="category-heels.html">高跟鞋 Heels</a>
            <a href="category-kids.html">童鞋 Kids</a>
            <a href="category-others.html">其它配件 Accessories</a>
          </div>
        </div>
        <a href="contact.html" class="nav-link" id="nav-contact">聯絡我們</a>
      </nav>

      <div class="nav-actions">
        <a href="#" class="nav-action-btn" id="cart-trigger">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span class="cart-badge" id="cart-count">0</span>
        </a>
        <button class="nav-toggle" id="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;
  const header = document.getElementById("main-header");
  if (header) {
    header.innerHTML = headerHTML;
  }
}

function renderFooter() {
  const footerHTML = `
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo logo-light">
          <img src="assets/logo.png" alt="AURA Logo">
          <span>AURA</span>
        </a>
        <p class="footer-desc">「極致工藝，步履優雅」—— AURA 致力於將奢華美學與極致舒適完美融合，陪伴您走過生活的每一段旅程。</p>
        <div class="social-links">
          <a href="#" class="social-icon">FB</a>
          <a href="#" class="social-icon">IG</a>
          <a href="#" class="social-icon">YT</a>
        </div>
      </div>
      
      <div class="footer-links">
        <h3>探索鞋款</h3>
        <ul>
          <li><a href="category-casual.html">雅痞休閒系列</a></li>
          <li><a href="category-sports.html">專業運動系列</a></li>
          <li><a href="category-heels.html">奢華高跟系列</a></li>
          <li><a href="category-kids.html">活潑童鞋系列</a></li>
          <li><a href="category-others.html">鞋類周邊配件</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h3>客戶服務</h3>
        <ul>
          <li><a href="about.html">關於我們</a></li>
          <li><a href="contact.html">實體門市</a></li>
          <li><a href="contact.html">聯絡諮詢</a></li>
          <li><a href="#">退換貨政策</a></li>
          <li><a href="#">常見問題 FAQ</a></li>
        </ul>
      </div>

      <div class="footer-subscribe">
        <h3>訂閱最新資訊</h3>
        <p>即刻訂閱 AURA 電子報，獲取新品上市資訊與會員專屬優惠。</p>
        <form class="subscribe-form" onsubmit="event.preventDefault(); alert('感謝您的訂閱！您已成功加入 AURA 會員電子報。'); this.reset();">
          <input type="email" placeholder="輸入您的 Email" required>
          <button type="submit" class="btn btn-primary">訂閱</button>
        </form>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} AURA Footwear. 版權所有。設計與技術支持：Antigravity Team.</p>
      </div>
    </div>
  `;
  const footer = document.getElementById("main-footer");
  if (footer) {
    footer.innerHTML = footerHTML;
  }
}

function renderCartDrawer() {
  const drawerHTML = `
    <div class="cart-overlay" id="cart-overlay"></div>
    <div class="cart-drawer" id="cart-drawer">
      <div class="cart-drawer-header">
        <h3>您的購物車</h3>
        <button class="cart-drawer-close" id="cart-drawer-close">&times;</button>
      </div>
      <div class="cart-drawer-body" id="cart-drawer-items">
        <!-- Rendered by updateCartUI -->
      </div>
      <div class="cart-drawer-footer">
        <div class="cart-drawer-summary">
          <span>小計:</span>
          <span class="subtotal-amount" id="cart-drawer-subtotal">NT$ 0</span>
        </div>
        <p class="cart-drawer-tip">全館消費滿 NT$ 3,000 即享免運優惠</p>
        <button class="btn btn-block btn-primary" onclick="simulateCheckout()">前往結帳</button>
      </div>
    </div>
  `;
  const existingDrawer = document.getElementById("cart-drawer-wrapper");
  if (existingDrawer) {
    existingDrawer.innerHTML = drawerHTML;
  } else {
    const wrapper = document.createElement("div");
    wrapper.id = "cart-drawer-wrapper";
    wrapper.innerHTML = drawerHTML;
    document.body.appendChild(wrapper);
  }
}

function simulateCheckout() {
  if (cart.length === 0) {
    alert("購物車是空的，快去挑選喜愛的商品吧！");
    return;
  }
  alert("感謝您的訂購！這是一個模擬結帳畫面，您的訂單已成功建立（本地購物車將自動清空）。");
  clearCart();
  hideCartDrawer();
}

// --- SETUP EVENT LISTENERS ---
function setupGlobalEvents() {
  // Mobile Nav Toggle
  const toggleBtn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }

  // Cart Drawer open/close
  const cartTrigger = document.getElementById("cart-trigger");
  const cartClose = document.getElementById("cart-drawer-close");
  const overlay = document.getElementById("cart-overlay");

  if (cartTrigger) {
    cartTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      showCartDrawer();
    });
  }
  if (cartClose) {
    cartClose.addEventListener("click", () => {
      hideCartDrawer();
    });
  }
  if (overlay) {
    overlay.addEventListener("click", () => {
      hideCartDrawer();
    });
  }

  // Close nav on click link (for mobile)
  const links = document.querySelectorAll(".nav-link:not(.dropdown-toggle), .dropdown-menu a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (menu && menu.classList.contains("active")) {
        menu.classList.remove("active");
        if (toggleBtn) toggleBtn.classList.remove("active");
      }
    });
  });

  // Handle active class highlight
  const path = window.location.pathname;
  const page = path.split("/").pop();

  if (page === "" || page === "index.html") {
    const activeLink = document.getElementById("nav-home");
    if (activeLink) activeLink.classList.add("active");
  } else if (page === "about.html") {
    const activeLink = document.getElementById("nav-about");
    if (activeLink) activeLink.classList.add("active");
  } else if (page === "contact.html") {
    const activeLink = document.getElementById("nav-contact");
    if (activeLink) activeLink.classList.add("active");
  }
}

// --- INITIALIZE PAGE CONTENT DYNAMICALLY ---
function initPageContent() {
  const path = window.location.pathname;
  const page = path.split("/").pop();

  if (page === "" || page === "index.html") {
    renderHomepageProducts();
  } else if (page.startsWith("category-")) {
    const category = page.replace("category-", "").replace(".html", "");
    renderCategoryProducts(category);
  } else if (page === "product.html") {
    renderProductDetails();
  }
}

// 1. Homepage Featured Products
function renderHomepageProducts() {
  const grid = document.getElementById("featured-products-grid");
  if (!grid) return;

  // Grab first product of each category (casual, sports, heels, kids)
  const featured = [];
  ["casual", "sports", "heels", "kids"].forEach(cat => {
    const prod = PRODUCTS.find(p => p.category === cat);
    if (prod) featured.push(prod);
  });

  // Add 4 more top products
  const remaining = PRODUCTS.filter(p => !featured.includes(p)).slice(0, 4);
  const displayList = [...featured, ...remaining];

  grid.innerHTML = displayList.map(prod => renderProductCardHTML(prod)).join("");
}

// 2. Category Page Product Grid
function renderCategoryProducts(category) {
  const grid = document.getElementById("category-products-grid");
  const countEl = document.getElementById("category-product-count");
  if (!grid) return;

  const list = PRODUCTS.filter(p => p.category === category);

  if (countEl) {
    countEl.innerText = list.length;
  }

  if (list.length === 0) {
    grid.innerHTML = `<div class="no-products">此分類目前尚無商品。</div>`;
    return;
  }

  grid.innerHTML = list.map(prod => renderProductCardHTML(prod)).join("");
}

// Helper: Card HTML
function renderProductCardHTML(product) {
  return `
    <div class="product-card">
      <div class="product-card-img">
        <img src="${product.image}" title="${product.name}" alt="${product.name}" loading="lazy">
        <div class="product-card-overlay">
          <a href="product.html?id=${product.id}" class="btn btn-secondary btn-sm">查看詳情</a>
          <button onclick="quickAdd('${product.id}')" class="btn btn-primary btn-sm">快速加入</button>
        </div>
      </div>
      <div class="product-card-info">
        <span class="product-card-category">${product.categoryName}</span>
        <h3 class="product-card-title"><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-card-footer">
          <span class="product-card-price">NT$ ${product.price.toLocaleString()}</span>
          <a href="product.html?id=${product.id}" class="product-card-link">詳細規格 &rarr;</a>
        </div>
      </div>
    </div>
  `;
}

// Quick Add helper (uses first size and color)
window.quickAdd = function (productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const size = product.sizes[0];
  const color = product.colors[0] ? product.colors[0].name : "預設";
  addToCart(productId, size, color, 1);
};

// 3. Product Details Page (product.html?id=casual_1)
function renderProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0]; // fallback to first

  if (!product) return;

  // Breadcrumb
  const breadcrumb = document.getElementById("product-breadcrumb");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">首頁</a> &gt; 
      <a href="category-${product.category}.html">${product.categoryName}</a> &gt; 
      <span>${product.name}</span>
    `;
  }

  // Set Details
  document.getElementById("prod-title").innerText = product.name;
  document.getElementById("prod-eng-title").innerText = product.englishName;
  document.getElementById("prod-price").innerText = `NT$ ${product.price.toLocaleString()}`;
  document.getElementById("prod-desc").innerText = product.description;

  const mainImg = document.getElementById("prod-main-img");
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.title = product.name;
    mainImg.alt = product.name;
  }

  // Render Features list
  const featuresList = document.getElementById("prod-features");
  if (featuresList) {
    featuresList.innerHTML = product.features.map(f => `<li><i class="check-icon">✓</i> ${f}</li>`).join("");
  }

  // Render Specs table
  const specsTable = document.getElementById("prod-specs");
  if (specsTable) {
    let specHTML = "";
    for (const [key, value] of Object.entries(product.specifications)) {
      specHTML += `<tr><th>${key}</th><td>${value}</td></tr>`;
    }
    specsTable.innerHTML = specHTML;
  }

  // Render Sizes selector
  const sizeSelect = document.getElementById("prod-size-select");
  if (sizeSelect) {
    sizeSelect.innerHTML = product.sizes.map(size => `<option value="${size}">${size}</option>`).join("");
  }

  // Render Colors option buttons
  const colorsContainer = document.getElementById("prod-colors");
  if (colorsContainer) {
    colorsContainer.innerHTML = product.colors.map((color, idx) => `
      <label class="color-option-label">
        <input type="radio" name="prod-color" value="${color.name}" ${idx === 0 ? "checked" : ""}>
        <span class="color-swatch" style="background-color: ${color.value}"></span>
        <span class="color-name">${color.name}</span>
      </label>
    `).join("");
  }

  // Setup Add To Cart Button Form Action
  const buyForm = document.getElementById("buy-form");
  if (buyForm) {
    buyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const selectedSize = document.getElementById("prod-size-select").value;
      const checkedColorEl = document.querySelector('input[name="prod-color"]:checked');
      const selectedColor = checkedColorEl ? checkedColorEl.value : "預設";
      const quantity = parseInt(document.getElementById("prod-qty").value) || 1;

      addToCart(product.id, selectedSize, selectedColor, quantity);
    });
  }

  // Load Related Products
  renderRelatedProducts(product);
}

function renderRelatedProducts(currentProduct) {
  const grid = document.getElementById("related-products-grid");
  if (!grid) return;

  // Filter products in the same category, excluding current product
  let related = PRODUCTS.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id);

  // If not enough related items, fill with others
  if (related.length < 4) {
    const extra = PRODUCTS.filter(p => p.id !== currentProduct.id && !related.includes(p)).slice(0, 4 - related.length);
    related = [...related, ...extra];
  }

  // Limit to 4 items
  related = related.slice(0, 4);

  grid.innerHTML = related.map(prod => renderProductCardHTML(prod)).join("");
}

// Quantity Counter actions in details page
window.adjustQty = function (delta) {
  const qtyEl = document.getElementById("prod-qty");
  if (!qtyEl) return;
  let val = parseInt(qtyEl.value) || 1;
  val += delta;
  if (val < 1) val = 1;
  qtyEl.value = val;
};

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderCartDrawer();
  initCart();
  setupGlobalEvents();
  initPageContent();
});

// Hàm chuyển URL vào iframe
function loadPage(url) {
    const iframe = document.getElementById('contentFrame');
    iframe.src = url;

    // Hiển thị lại banner nếu nó bị ẩn
    const banner = document.getElementById('bannerContainer');
    const visitCounter = document.getElementById('visitCounter');

    banner.style.display = 'flex';
    visitCounter.style.display = 'none';
}

// Hàm xử lý riêng cho Menu: Ẩn banner và hiển thị số lượt truy cập
function menuAction(url) {
    const banner = document.getElementById('bannerContainer');
    const visitCounter = document.getElementById('visitCounter');
    const iframe = document.getElementById('contentFrame');

    // Tải URL của Menu
    iframe.src = url;

    // Ẩn banner và hiển thị lượt truy cập
    banner.style.display = 'none';
    visitCounter.style.display = 'block';
}

// Cập nhật và hiển thị số lượt truy cập
function updateVisitCounter() {
    const baseCount = 1000; // Bắt đầu từ 1000
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);

    // Hiển thị số lượt truy cập
    const totalVisits = baseCount + visitCount;
    document.getElementById('visitCounter').innerText = `Tổng số lượt truy cập: ${totalVisits}`;
}

// Gọi hàm cập nhật số lượt truy cập khi tải trang
updateVisitCounter();

// Mảng chứa banner
const banners = [
    {
        img: "https://via.placeholder.com/800x60?text=Banner+1",
        link: "https://example.com/banner1"
    },
    {
        img: "https://via.placeholder.com/800x60?text=Banner+2",
        link: "https://example.com/banner2"
    },
    {
        img: "https://via.placeholder.com/800x60?text=Banner+3",
        link: "https://example.com/banner3"
    }
];

let currentBannerIndex = 0;

// Hàm hiển thị banner
function showBanner() {
    const bannerContainer = document.getElementById('bannerContainer');
    const banner = banners[currentBannerIndex];
    bannerContainer.innerHTML = `
        <a href="${banner.link}" target="_blank">
            <img src="${banner.img}" alt="Banner ${currentBannerIndex + 1}">
        </a>
    `;
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
}

// Tự động thay đổi banner mỗi 10 giây
setInterval(showBanner, 10000);

// Hiển thị banner đầu tiên khi tải trang
showBanner();

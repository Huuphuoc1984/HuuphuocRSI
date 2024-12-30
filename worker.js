self.onmessage = function (e) {
    console.log('Worker received:', e.data);

    // Ví dụ: Xử lý dữ liệu nặng
    let result = 0;
    for (let i = 0; i < 1e8; i++) {
        result += i;
    }

    // Gửi kết quả lại cho Main Thread
    self.postMessage(result);
};

document.querySelector('.back-btn').addEventListener('click', function() {
    window.history.back();
});

document.getElementById('businessForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn form gửi đi ngay lập tức
    
        // Lấy giá trị các trường thông tin
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const zip = document.getElementById('zip').value.trim();
    
        // Kiểm tra từng trường thông tin
        if (!email || !phone || !address || !city || !zip) {
            alert("Vui lòng nhập đầy đủ tất cả các trường thông tin.");
            return;
        }
    
        // Kiểm tra định dạng email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Vui lòng nhập đúng định dạng Email.");
            return;
        }
    
        // Kiểm tra định dạng số điện thoại (chỉ cho phép số và ít nhất 10 ký tự)
        const phonePattern = /^\d{10,}$/;
        if (!phonePattern.test(phone)) {
            alert("Vui lòng nhập đúng định dạng số điện thoại (ít nhất 10 số).");
            return;
        }
    
        // Nếu tất cả các kiểm tra đều hợp lệ
        alert("Thành công");
    });
    // Lấy giá trị các trường
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let zip = document.getElementById('zip').value;

    // Kiểm tra định dạng email
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Email không hợp lệ.');
        return;
    }

    // Kiểm tra định dạng số điện thoại (chỉ cho phép số)
    let phonePattern = /^[0-9]{10}$/; // Cho phép số điện thoại gồm 10 chữ số
    if (!phonePattern.test(phone)) {
        alert('Số điện thoại không hợp lệ. Vui lòng nhập 10 chữ số.');
        return;
    }

    // Kiểm tra các trường khác không được để trống
    if (email === '' || phone === '' || address === '' || city === '' || zip === '') {
        alert('Vui lòng nhập đầy đủ các trường thông tin.');
        return;
    }

    // Nếu tất cả thông tin hợp lệ
    document.getElementById('message').textContent = 'Thành công';
});

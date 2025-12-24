function signup(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return;
    }

    const users = JSON.parse(localStorage.getItem('ONEGEAR_USERS')) || [];

    const isExist = users.some(user => user.email === email);
    if (isExist) {
        alert("Email này đã được đăng ký! Vui lòng dùng email khác.");
        return;
    }

    // giả lập otp
    const otpCode = Math.floor(100000 + Math.random() * 900000);
    alert(`[HỆ THỐNG] Đang gửi mã xác thực về email: ${email}...`);
    setTimeout(() => {
        alert(`📧 Email từ ONEGEAR:\nMã xác thực (OTP) của bạn là: ${otpCode}`);
        const userEnteredCode = prompt("Vui lòng nhập mã xác thực 6 số vừa nhận được:");
        if (userEnteredCode == otpCode) {
            const newUser = { name, email, password };
            users.push(newUser);
            localStorage.setItem('ONEGEAR_USERS', JSON.stringify(users));
            alert("Xác thực thành công! Đăng ký hoàn tất.");
            window.location.href = "./login.html";
        } else {
            alert("Mã xác thực không đúng! Vui lòng thử lại.");
        }
    }, 500);
}
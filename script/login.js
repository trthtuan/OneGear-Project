function login(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('ONEGEAR_USERS')) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('ONEGEAR_CURRENT_USER', JSON.stringify(user));
        alert(`Chào mừng trở lại, ${user.name}!`);
        window.location.href = "./index.html";
    } else {
        const resultDiv = document.getElementById('result');
        if(resultDiv) {
            resultDiv.innerHTML = '<p style="color: red; margin-top: 10px;">❌ Email hoặc mật khẩu không đúng!</p>';
        } else {
            alert("Email hoặc mật khẩu không đúng!");
        }
    }
}
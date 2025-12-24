document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const newMessage = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
        messages.push(newMessage);
        localStorage.setItem("contactMessages", JSON.stringify(messages));
        alert("Cảm ơn bạn! Chúng tôi đã nhận được tin nhắn và sẽ phản hồi sớm.");
        form.reset();
    });
});
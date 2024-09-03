const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.querySelector('form[name="submit-to-google-sheet"]').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        Name: formData.get('Name'),
        Email: formData.get('Email'),
        Message: formData.get('Message'),
    }).then(function(response) {
        document.getElementById("msg").innerText = "Message sent successfully";
        setTimeout(function() {
            document.getElementById("msg").innerText = "";
        }, 5000);
        document.querySelector('form[name="submit-to-google-sheet"]').reset();
    }, function(error) {
        console.log('FAILED...', error);
        document.getElementById("msg").innerText = "Failed to send message.";
    });
});

function sendTestEmail() {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: "Test Name",
        to_name: "Your Name",
        message: "This is a test message"
    }).then(function(response) {
        alert("Test email sent successfully!");
    }, function(error) {
        console.log('FAILED...', error);
    });
}






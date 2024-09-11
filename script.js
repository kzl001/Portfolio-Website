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

function sendTestEmail() {
    emailjs.send("service_gvgj5cl", "template_l18v7qx", {
        from_name: "Test Name",
        to_name: "Your Name",
        message: "This is a test message"
    }).then(function(response) {
        alert("Test email sent successfully!");
    }, function(error) {
        console.log('FAILED...', error);
    });
}






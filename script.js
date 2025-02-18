// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Scroll Animations (Fade-in Effect)
const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Dark Mode Toggle
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("bg-white");
    document.body.classList.toggle("bg-black");
    document.body.classList.toggle("text-black");
    document.body.classList.toggle("text-white");

    toggleButton.textContent = document.body.classList.contains("bg-black")
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";
});

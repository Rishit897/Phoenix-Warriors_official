let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

if (slides.length > 0) {
    setInterval(nextSlide, 1000);
}

const countdownDate = new Date("Feb 24, 2026 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

if (countdownElement) {
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="countdown-item"><span>${days}</span><p>Days</p></div>
            <div class="countdown-item"><span>${hours}</span><p>Hours</p></div>
            <div class="countdown-item"><span>${minutes}</span><p>Minutes</p></div>
            <div class="countdown-item"><span>${seconds}</span><p>Seconds</p></div>
        `;

        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "<h2>Event Started!</h2>";
        }
    }, 1000);
}

const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

const rssFeed = document.getElementById('rss-feed');

function loadDroneNews() {
    if (rssFeed) {
        rssFeed.innerHTML = `
            <div class="news-item">
                <h4><a href="https://www.theverge.com/tech" target="_blank">Latest Drone Technology Breakthrough</a></h4>
                <p>Phoenix Warriors unveils new autonomous navigation system. Updated: ${new Date().toLocaleTimeString()}</p>
            </div>
            <div class="news-item">
                <h4><a href="https://www.techcrunch.com" target="_blank">Competition Success</a></h4>
                <p>Team secures top position in regional championships. Updated: ${new Date().toLocaleTimeString()}</p>
            </div>
        `;
    }
}

loadDroneNews();
setInterval(loadDroneNews, 60000);

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = document.getElementById('formMessage');
        message.textContent = 'Thank you! Your message has been sent.';
        message.className = 'success';
        contactForm.reset();
    });
}

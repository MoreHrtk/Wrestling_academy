document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const response = await fetch('https://formspree.io/f/{YOUR_FORM_ID}', {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  });

  if (response.ok) {
      alert('Form submitted successfully! We’ll get back to you soon.');
      this.reset();
  } else {
      alert('Something went wrong. Please try again.');
  }



});

const sections = document.querySelectorAll('section');
  const revealSection = () => {
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < window.innerHeight * 1) {
              section.classList.add('visible');
          }
      });
  };

// Hide preloader after page load
window.addEventListener('scroll', revealSection);
revealSection(); // To trigger on page load

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}); 

// Show back-to-top button after scrolling down
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });

    // Hide button initially
    backToTop.style.display = 'none';
  }
});

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;

    function showSlide(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      testimonials[index].classList.add('active');
      dots[index].classList.add('active');
      currentSlide = index;
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });

    // Auto slide every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonials.length;
      showSlide(currentSlide);
    }, 5000);

    // Scroll Animation
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.award-card, .service-card, .blog-card');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    // Set initial state for animation
    document.querySelectorAll('.award-card, .service-card, .blog-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

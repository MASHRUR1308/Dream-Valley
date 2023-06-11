// slider js 

const slides = document.querySelectorAll('.slider-slide');
        const controls = document.querySelectorAll('.slider-control');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                    controls[i].classList.add('active');
                } else {
                    slide.classList.remove('active');
                    controls[i].classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 3000); // Change slide every 3 seconds
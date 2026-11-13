
document.addEventListener('DOMContentLoaded', () => {


    const elements = document.querySelectorAll(
        '.date-section, .socials, .footer-ornament'
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(element => {

        element.classList.add('reveal');

        observer.observe(element);

    });


    const heroImage = document.querySelector('.hero-image');

    const canHover = window.matchMedia(
        '(hover: hover) and (pointer: fine)'
    );

    if (canHover.matches) {

        document.querySelector('.hero').addEventListener(
            'mousemove',
            (event) => {

                const rect = event.currentTarget.getBoundingClientRect();

                const x = (event.clientX - rect.left) / rect.width - 0.5;

                const y = (event.clientY - rect.top) / rect.height - 0.5;

                heroImage.style.transform =
                    `scale(1.025) translate(${x * -7}px, ${y * -5}px)`;

            }
        );

        document.querySelector('.hero').addEventListener(
            'mouseleave',
            () => {

                heroImage.style.transform = 'scale(1)';

            }
        );

    }



    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {

        link.addEventListener('mouseenter', () => {

            link.style.transform = 'translateY(-7px) scale(1.12)';

        });

        link.addEventListener('mouseleave', () => {

            link.style.transform = 'translateY(0) scale(1)';

        });

    });



    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {

        star.style.animationDelay = `${index * 1.2}s`;

    });


    const ornaments = document.querySelectorAll(
        '.ornament img, .footer-ornament img'
    );

    ornaments.forEach((ornament, index) => {

        ornament.style.animationDelay = `${index * 0.7}s`;

    });

});

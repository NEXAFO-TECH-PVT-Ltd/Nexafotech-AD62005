// Initialize Particles.js
document.addEventListener("DOMContentLoaded", function() {
    if (window.particlesJS) {
        particlesJS('particles-js',
          {
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": ["#3b82f6", "#8b5cf6", "#ffffff"]
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                }
              },
              "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#475569",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 140,
                  "line_linked": {
                    "opacity": 0.8
                  }
                },
                "push": {
                  "particles_nb": 3
                }
              }
            },
            "retina_detect": true
          }
        );
    }

    // Add 3D tilt effect to card
    const card = document.querySelector('.glass-card');
    
    document.addEventListener('mousemove', (e) => {
        if (!card) return;
        if (window.innerWidth <= 768) return; // Disable on mobile
        
        const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
        
        card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset card on mouse out
    document.addEventListener('mouseleave', () => {
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        card.style.transition = 'transform 0.5s ease';
    });
    
    document.addEventListener('mouseenter', () => {
        if (!card) return;
        card.style.transition = 'none';
    });
});

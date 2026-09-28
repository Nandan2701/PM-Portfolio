    // --- ZERO-WHITESPACE RESPONSIVE FIT ENGINE ---
    function scaleDeckFrame() {
        const wrap = document.getElementById('deckCanvasWrap');
        const container = document.querySelector('.slide-container');
        if (!wrap || !container) return;

        const w = wrap.clientWidth;
        if (w === 0) return;
        const scale = w / 1280;
        container.style.transform = "scale(" + scale + ")";
        wrap.style.height = Math.round(720 * scale) + "px";
    }

    window.addEventListener('resize', scaleDeckFrame);
    window.addEventListener('load', scaleDeckFrame);

    
        const slideData = [
            { id: 1, milestone: 1 },
            { id: 2, milestone: 2 },
            { id: 3, milestone: 3 },
            { id: 4, milestone: 4 },
            { id: 5, milestone: 4 },
            { id: 6, milestone: 5 },
            { id: 7, milestone: 6 },
            { id: 8, milestone: 7 },
            { id: 9, milestone: 8 },
            { id: 10, milestone: 9 },
            { id: 11, milestone: 10 },
            { id: 12, milestone: 11 }
        ];

        const slideTexts = [
            "Setting the Context: The Rapido Trust Gap.",
            "Defining the Business Goal: Stopping the ARPU bleed.",
            "Understanding the user",
            "Mapping the Journey: Where does trust break?",
            "Deep Dive: The anxiety of captain allocation.",
            "The Breaking Point: The 'Wrong Vehicle' problem.",
            "Core Problems: A Mountain of Friction.",
            "Ruthless Prioritization: Evaluating solution impact.",
            "The Solution Space: Designing progressive social proof.",
            "Execution: The 'Safety Engine' UI.",
            "System Logic: Building the behavioral penalty loop.",
            "Success Metrics: Proving the business outcome."
        ];

        let currentSlide = 1; // 1-indexed for logic

        function updateUI() {
            const data = slideData[currentSlide - 1];

            // Update Bottom Bar (Variation 6)
            const text = slideTexts[currentSlide - 1];
            const percent = ((currentSlide - 1) / 11) * 100;
            const stopsLeft = 12 - currentSlide;

            document.getElementById('bottom-text').innerText = text;
            document.getElementById('bottom-distance').innerHTML = stopsLeft > 0 ? `<span>📍</span> ${stopsLeft} Stops Left` : `<span>🏁</span> Arrived`;
            document.getElementById('bottom-progress').style.width = `${percent}%`;
            document.getElementById('bottom-bike').style.left = `calc(${percent}% - 40px)`;

            // Update Sidebar Milestones (Variation 4 logic)
            const actualContainer = document.getElementById('milestones-container');

            const milestones = [
                "Introduction", "Business Goal", "User Personas", "User Journey",
                "The Drop-Off", "Core Problem", "Prioritization", "Finding Solutions",
                "The Solution", "System Logic", "Metrics"
            ];

            if (actualContainer && actualContainer.children.length === 0) {
                milestones.forEach((m, index) => {
                    let num = (index + 1).toString().padStart(2, '0');
                    let div = document.createElement('div');
                    div.className = 'milestone';
                    div.innerHTML = `<span class="num">${num}</span><span class="text">${m}</span>`;
                    actualContainer.appendChild(div);
                });
            }

            if (actualContainer) {
                const items = actualContainer.querySelectorAll('.milestone');
                let activeTop = 0;
                items.forEach((item, index) => {
                    item.classList.remove('active');
                    if (index === data.milestone - 1) {
                        item.classList.add('active');
                        activeTop = item.offsetTop;
                    }
                });

                const chevron = document.getElementById('sidebar-chevron');
                if (chevron) {
                    chevron.style.top = (activeTop + 8) + 'px';
                }
            }

            // Toggle Slide Views (Refactored for cleaner logic)
            document.querySelectorAll('.slide-view').forEach(el => el.classList.remove('active'));
            const activeView = document.getElementById(`slide-view-${currentSlide}`);
            if (activeView) {
                activeView.classList.add('active');
            } else {
                document.getElementById('slide-view-default').classList.add('active');

                document.getElementById('slide-badge').innerText = `Slide ${data.id} / 12`;
                document.getElementById('slide-title').innerText = `[Slide ${data.id}: ${data.title}]`;
            }

            // Update Controls
            const c = document.getElementById('counter'); if (c) c.innerText = `${currentSlide} / 12`;
            const pb = document.getElementById('prev-btn'); if (pb) pb.disabled = (currentSlide === 1);
            const nb = document.getElementById('next-btn'); if (nb) nb.disabled = (currentSlide === 12);
        }

        function nextSlide() {
            if (currentSlide < 12) {
                currentSlide++;
                updateUI();
            }
        }

        function prevSlide() {
            if (currentSlide > 1) {
                currentSlide--;
                updateUI();
            }
        }

        // Keyboard Navigation
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'PageDown') {
                nextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                prevSlide();
            }
        });

        // Initialize
        updateUI();
    
        // --- RESPONSIVE VIEWPORT AUTO-FIT ENGINE ---
        function fitToScreen() {
            const viewport = document.querySelector('.deck-viewport');
            const stage = document.querySelector('.deck-stage');
            if (!stage || !viewport) return;

            const screenW = window.innerWidth;
            if (screenW < 1320) {
                const pad = screenW <= 600 ? 8 : 24;
                const scale = Math.min((screenW - pad) / 1280, 1.0);
                stage.style.transform = `scale(${scale})`;

                // Unscaled height is 720px (slide) + 30px (margin) + 50px (controls) + 70px (button space) = 870px
                const unscaledHeight = 870;
                viewport.style.height = `${Math.ceil(unscaledHeight * scale)}px`;
            } else {
                stage.style.transform = 'none';
                viewport.style.height = 'auto';
            }
        }

        window.addEventListener('resize', fitToScreen);
        window.addEventListener('orientationchange', () => setTimeout(fitToScreen, 100));
        window.addEventListener('load', fitToScreen);
        setTimeout(fitToScreen, 50);

        // Passive Touch Gesture Swipe for Mobile
        let touchStartX = 0;
        let touchEndX = 0;
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX - 45) nextSlide();
            if (touchEndX > touchStartX + 45) prevSlide();
        }, { passive: true });
    

    window.scaleDeckFrame = scaleDeckFrame;
    window.prevSlide = prevSlide;
    window.nextSlide = nextSlide;

    // Trigger scale immediately and on load
    scaleDeckFrame();
    setTimeout(scaleDeckFrame, 30);
    setTimeout(scaleDeckFrame, 150);
    document.addEventListener('DOMContentLoaded', () => {
        scaleDeckFrame();
        setTimeout(scaleDeckFrame, 100);
    });
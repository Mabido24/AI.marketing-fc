// Interactive Quota & Plan Calculator Logic — AI.marketing-fc
document.addEventListener('DOMContentLoaded', () => {
    const siteStatusSelect = document.getElementById('calc-site-status');
    const articlesSlider = document.getElementById('calc-articles');
    const articlesValDisplay = document.getElementById('articles-val');
    
    const checkLlms = document.getElementById('calc-llms');
    const checkVideos = document.getElementById('calc-videos');
    const checkWhitelabel = document.getElementById('calc-whitelabel');

    const planTitle = document.getElementById('calc-plan-title');
    const planDesc = document.getElementById('calc-plan-desc');
    const planPrice = document.getElementById('calc-price');
    const quotaArticles = document.getElementById('quota-articles');
    const quotaGeo = document.getElementById('quota-geo');
    const quotaEngine = document.getElementById('quota-engine');
    const planSelectModal = document.getElementById('plan-select');

    function updateCalculator() {
        const status = siteStatusSelect.value;
        const count = parseInt(articlesSlider.value);
        articlesValDisplay.textContent = count;

        let calculatedPrice = 149;
        let title = "Formule 2 : AI Autopilot";
        let desc = "Optimisation de votre site existant avec contenus SEO/GEO, FAQ structurées, micro-vidéos et rapport mensuel.";
        let qArticles = "";
        let qGeo = "Inclus (Dispositif complet)";
        let engine = "Inclus (Rapport & Suivi Mensuel)";
        let recommendedPlan = 2;

        if (status === 'new') {
            // Base Launchpad = 190€ for 10 articles. Additional articles = +9€/article
            if (count <= 10) {
                calculatedPrice = 190;
            } else {
                calculatedPrice = 190 + (count - 10) * 9;
            }
            
            if (count >= 25) {
                recommendedPlan = 3;
                title = "Formule 3 : Domination 360° (Sur-Mesure)";
                desc = "Création du site + Production intensive de contenus d'autorité et dispositif d'empreinte IA complet.";
            } else {
                recommendedPlan = 1;
                title = "Formule 1 : AI Launchpad";
                desc = "Conçue pour la création de site neuf & alimentation en contenus optimisés SEO, IA et rapport de visibilité.";
            }

            qArticles = `${count} articles stratégiques / mois`;

        } else if (status === 'existing') {
            // Base Autopilot = 149€ (includes 6 articles + 20 FAQ + 10 videos). Additional articles = +8€/article
            if (count <= 6) {
                calculatedPrice = 149;
            } else if (count <= 15) {
                calculatedPrice = 149 + (count - 6) * 8;
            } else if (count <= 30) {
                calculatedPrice = 221 + (count - 15) * 8.5; // Smooth transition up to ~349€ at 30 articles
            } else {
                calculatedPrice = 349 + (count - 30) * 7.5; // Scale beyond 30
            }

            calculatedPrice = Math.round(calculatedPrice);

            if (count >= 20) {
                recommendedPlan = 3;
                title = "Formule 3 : Domination 360°";
                desc = "Production intensive d'articles + 10 micro-vidéos + FAQ Schema + rapport stratégique mensuel.";
            } else {
                recommendedPlan = 2;
                title = "Formule 2 : AI Autopilot (Évolutif)";
                desc = "Boost de votre site existant sans refonte : articles sur-mesure, FAQ structurées, micro-vidéos et suivi.";
            }

            const videoText = checkVideos.checked ? " + 10 Vidéos" : "";
            const faqCount = Math.min(count * 2, 40);
            qArticles = `${count} articles + ${faqCount} FAQ${videoText}`;

        } else {
            // Both / Intensive
            calculatedPrice = Math.round(249 + (count - 10) * 7.5);
            recommendedPlan = 3;
            title = "Formule 3 : Domination 360° (Pro)";
            desc = "Dispositif omnicanal haute intensité : création/refonte + volume massif d'articles et contenus multimédias.";
            qArticles = `${count} articles + 40 FAQ + 10 Vidéos`;
        }

        // Adjust optional checkboxes additions
        if (checkVideos.checked && status === 'new') calculatedPrice += 30;

        planTitle.textContent = title;
        planDesc.textContent = desc;
        planPrice.textContent = calculatedPrice + "€";
        quotaArticles.textContent = qArticles;
        quotaGeo.textContent = qGeo;
        quotaEngine.textContent = engine;

        if (planSelectModal) {
            planSelectModal.value = recommendedPlan.toString();
        }
    }

    if (siteStatusSelect && articlesSlider) {
        siteStatusSelect.addEventListener('change', updateCalculator);
        articlesSlider.addEventListener('input', updateCalculator);
        checkLlms.addEventListener('change', updateCalculator);
        checkVideos.addEventListener('change', updateCalculator);
        checkWhitelabel.addEventListener('change', updateCalculator);
        updateCalculator();
    }

    // Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci ! Votre demande d\'audit GEO & AEO a bien été enregistrée par AI.marketing-fc. Notre équipe vous recontactera sous 24h.');
            contactForm.reset();
        });
    }
});

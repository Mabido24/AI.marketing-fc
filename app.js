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

        let recommendedPlan = 2;
        let price = 149;
        let title = "Offre 2 : AI Autopilot Engine";
        let desc = "Idéal pour booster un site existant avec micro-contenus, FAQ Schema et indexation IA.";
        let qArticles = `${count} blogs / 34 livrables`;
        let qGeo = "Inclus (Hub + llms.txt)";
        let engine = "AI.marketing-fc Entity Hub";

        if (status === 'new') {
            if (count > 20 || checkWhitelabel.checked) {
                recommendedPlan = 3;
                price = 349;
                title = "Offre 3 : Domination 360° (Suite Hybride)";
                desc = "Le couteau suisse absolu : volume de contenu massif (30+ articles) + footprint technique d'entité.";
                qArticles = `${count} articles complets / mois`;
                qGeo = "Inclus (Ultra Complete)";
                engine = "AI.marketing-fc 360° Suite";
            } else {
                recommendedPlan = 1;
                price = 190;
                title = "Offre 1 : AI Launchpad";
                desc = "Conçu pour la création de site neuf & alimentation massive en articles SEO/GEO.";
                qArticles = `${count} articles optimisés / mois`;
                qGeo = "Suivi Citations IA Propriétaire";
                engine = "Moteur Éditorial AI.marketing-fc";
            }
        } else if (status === 'existing') {
            if (count > 15 || (checkWhitelabel.checked && checkVideos.checked)) {
                recommendedPlan = 3;
                price = 349;
                title = "Offre 3 : Domination 360° (Suite Hybride)";
                desc = "Optimisation du site existant + Alimentation massive en articles de blog.";
                qArticles = `${count} articles + 34 livrables d'entité`;
                qGeo = "Hub d'Entité + Schema + Audit IA";
                engine = "Suite Hybride AI.marketing-fc";
            } else {
                recommendedPlan = 2;
                price = 149;
                title = "Offre 2 : AI Autopilot Engine";
                desc = "Idéal pour booster un site existant sans modifier son architecture.";
                qArticles = "6 blogs + 20 FAQ + 10 Vidéos";
                qGeo = "Hub d'Entité + llms.txt";
                engine = "AI.marketing-fc Entity Hub";
            }
        } else {
            // 'both'
            recommendedPlan = 3;
            price = 349;
            title = "Offre 3 : Domination 360° (Suite Hybride)";
            desc = "Puissance maximale sur tous les fronts pour une domination totale de votre niche.";
            qArticles = `${Math.max(count, 30)} articles & livrables`;
            qGeo = "Hub + Schema + Citations IA";
            engine = "Suite Hybride AI.marketing-fc";
        }

        planTitle.textContent = title;
        planDesc.textContent = desc;
        planPrice.textContent = price + "€";
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

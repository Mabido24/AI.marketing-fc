// Interactive Quota & Plan Calculator Logic
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
        let title = "Offre 2 : AI Autopilot (Mabido Core)";
        let desc = "Idéal pour booster un site existant avec micro-contenus, FAQ Schema et indexation IA.";
        let qArticles = `${count} blogs / 34 livrables`;
        let qGeo = "Inclus (Hub + llms.txt)";
        let engine = "Mabido Agency Slot";

        if (status === 'new') {
            if (count > 20 || checkWhitelabel.checked) {
                recommendedPlan = 3;
                price = 349;
                title = "Offre 3 : Domination 360° (Combo Hybride)";
                desc = "Le couteau suisse absolu : volume Blazly (30+ articles) + footprint technique Mabido.";
                qArticles = `${count} articles complets / mois`;
                qGeo = "Inclus (Ultra Complete)";
                engine = "Blazly Tier 4 + Mabido Slot";
            } else {
                recommendedPlan = 1;
                price = 190;
                title = "Offre 1 : AI Launchpad (Blazly Core)";
                desc = "Conçu pour la création de site neuf & alimentation massive en articles SEO/GEO.";
                qArticles = `${count} articles optimisés / mois`;
                qGeo = "Suivi Citations IA Blazly";
                engine = "Blazly Tier 3/4 Engine";
            }
        } else if (status === 'existing') {
            if (count > 15 || (checkWhitelabel.checked && checkVideos.checked)) {
                recommendedPlan = 3;
                price = 349;
                title = "Offre 3 : Domination 360° (Combo Hybride)";
                desc = "Optimisation du site existant + Alimentation massive en articles de blog.";
                qArticles = `${count} articles + 34 livrables Mabido`;
                qGeo = "Hub d'Entité + Schema + LLM Audit";
                engine = "Blazly + Mabido Combined";
            } else {
                recommendedPlan = 2;
                price = 149;
                title = "Offre 2 : AI Autopilot (Mabido Core)";
                desc = "Idéal pour booster un site existant sans modifier son architecture.";
                qArticles = "6 blogs + 20 FAQ + 10 Vidéos";
                qGeo = "Hub d'Entité + llms.txt";
                engine = "Mabido Agency Slot";
            }
        } else {
            // 'both'
            recommendedPlan = 3;
            price = 349;
            title = "Offre 3 : Domination 360° (Combo Hybride)";
            desc = "Puissance maximale sur tous les fronts pour une domination totale de niche.";
            qArticles = `${Math.max(count, 30)} articles & livrables`;
            qGeo = "Hub + Schema + Citations Blazly";
            engine = "Blazly Tier 4 + Mabido Slot";
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
            alert('Merci ! Votre demande d\'audit GEO & AEO a bien été enregistrée. Notre équipe vous recontactera sous 24h.');
            contactForm.reset();
        });
    }
});

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
        let title = "Formule 2 : AI Autopilot";
        let desc = "Idéale pour booster un site existant avec micro-contenus, FAQ structurées, indexation IA et rapport mensuel.";
        let qArticles = `${count} articles + 28 livrables`;
        let qGeo = "Inclus (Optimisation complète)";
        let engine = "Inclus (Rapport & Suivi Mensuel)";

        if (status === 'new') {
            if (count > 20) {
                recommendedPlan = 3;
                price = 349;
                title = "Formule 3 : Domination 360°";
                desc = "La solution globale : volume de contenus massif (30+ articles) + dispositif d'empreinte IA + rapport mensuel approfondi.";
                qArticles = `${count} articles complets / mois`;
                qGeo = "Inclus (Optimisation Ultime)";
                engine = "Inclus (Rapport VIP & Suivi Mensuel)";
            } else {
                recommendedPlan = 1;
                price = 190;
                title = "Formule 1 : AI Launchpad";
                desc = "Conçue pour la création de site neuf & alimentation en contenus optimisés SEO, IA et rapport de visibilité.";
                qArticles = `${count} articles stratégiques / mois`;
                qGeo = "Inclus (Citations IA)";
                engine = "Inclus (Rapport & Suivi Mensuel)";
            }
        } else if (status === 'existing') {
            if (count > 15) {
                recommendedPlan = 3;
                price = 349;
                title = "Formule 3 : Domination 360°";
                desc = "Optimisation du site existant + Production intensive de contenus d'autorité + rapport d'analyse mensuel.";
                qArticles = `${count} articles + 28 livrables d'entité`;
                qGeo = "Indexation IA + FAQ + Audits";
                engine = "Inclus (Rapport VIP & Suivi Mensuel)";
            } else {
                recommendedPlan = 2;
                price = 149;
                title = "Formule 2 : AI Autopilot";
                desc = "Idéale pour booster un site existant sans modifier son architecture + rapport mensuel.";
                qArticles = "6 articles + 20 FAQ + 10 Vidéos";
                qGeo = "Inclus (Optimisation complète)";
                engine = "Inclus (Rapport & Suivi Mensuel)";
            }
        } else {
            // 'both'
            recommendedPlan = 3;
            price = 349;
            title = "Formule 3 : Domination 360°";
            desc = "Puissance maximale sur tous les fronts pour une domination totale de votre secteur avec rapport stratégique.";
            qArticles = `${Math.max(count, 30)} articles & livrables`;
            qGeo = "Inclus (Dispositif complet)";
            engine = "Inclus (Rapport VIP & Suivi Mensuel)";
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

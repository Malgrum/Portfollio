// --- INITIALISATION EMAILJS ---
(function() {
    // Remplace par ta "Public Key" EmailJS
    emailjs.init("VOTRE_PUBLIC_KEY"); 
})();

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. GESTION DU SWITCH DE LANGUE ---
    const langCheckbox = document.getElementById("lang-switch");
    
    // Charger la langue sauvegardée au démarrage
    if (localStorage.getItem("language") === "en") {
        document.body.classList.add("en");
        if(langCheckbox) langCheckbox.checked = true;
    }

    // Écouter le changement d'état du switch
    if (langCheckbox) {
        langCheckbox.addEventListener("change", () => {
            if (langCheckbox.checked) {
                document.body.classList.add("en");
                localStorage.setItem("language", "en");
            } else {
                document.body.classList.remove("en");
                localStorage.setItem("language", "fr");
            }
        });
    }

    // --- 2. GESTION DU FORMULAIRE DE CONTACT (EMAILJS) ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const btn = document.querySelector('#contact-form button[type="submit"]');
            const isEn = document.body.classList.contains('en');
            
            // On sauvegarde le contenu original du bouton (pourrait être du texte ou des spans)
            const originalContent = btn.innerHTML;
            
            // Feedback visuel pendant l'envoi
            btn.innerHTML = isEn ? 'SENDING...' : 'ENVOI EN COURS...';
            btn.style.opacity = "0.5";
            btn.disabled = true;

            // Envoi via EmailJS
            // Remplace 'YOUR_SERVICE_ID' et 'YOUR_TEMPLATE_ID' par tes IDs EmailJS
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(() => {
                    alert(isEn ? 'Message Sent! I will get back to you soon.' : 'Message Envoyé ! Je reviens vers toi vite.');
                    contactForm.reset();
                    btn.innerHTML = originalContent;
                    btn.style.opacity = "1";
                    btn.disabled = false;
                }, (error) => {
                    console.error('EmailJS Error:', error);
                    alert(isEn ? 'Error... Please try again later.' : 'Erreur lors de l\'envoi... réessaye plus tard.');
                    btn.innerHTML = originalContent;
                    btn.style.opacity = "1";
                    btn.disabled = false;
                });
        });
    }
});
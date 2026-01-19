document.addEventListener("DOMContentLoaded", () => {
    const langCheckbox = document.getElementById("lang-switch");
    
    // 1. Charger la langue sauvegardée
    if (localStorage.getItem("language") === "en") {
        document.body.classList.add("en");
        if(langCheckbox) langCheckbox.checked = true; // Coche le switch si c'était en anglais
    }

    // 2. Écouter le changement d'état du switch
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
});
// Počkáme, až se načte celé HTML, než začneme s JS
document.addEventListener("DOMContentLoaded", () => {
    const scrollMap = [
        { btn: ".one",  target: ".jq--uvod" },
        { btn: ".two",  target: ".jq--omne" },
        { btn: ".three",target: ".projekty" },
        { btn: ".four", target: ".kontakty-foot" },
    ];

    const scrollMap2 = [
        { btn: ".one1",  target: ".jq--uvod" },
        { btn: ".two1",  target: ".jq--omne" },
        { btn: ".three1",target: ".projekty" },
        { btn: ".four1", target: ".kontakty-foot" },
    ];

    const logo       = document.querySelector(".logo");
    const navbar     = document.querySelector(".navbar");
    const navmobile  = document.querySelector(".mobil");
    const ham        = document.querySelector(".hamburger");
    const cross      = document.querySelector(".cross");
    const option     = document.querySelector(".option");

    // Funkce pro bezpečné získání výšky navbaru
    function ziskejVyskuNav() {
        return navbar ? navbar.offsetHeight : 70; // fallback na 70px
    }

    // ── scroll helper (přidána pojistka proti null targetu) ────────────────
    function scrollTo(targetSelector, offset) {
        const target = document.querySelector(targetSelector);
        if (!target) {
            console.warn("Cíl pro scroll nebyl nalezen:", targetSelector);
            return;
        }
        const kam = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: kam - offset, behavior: "smooth" });
    }

    // Desktop navigace
    scrollMap.forEach(({ btn, target }) => {
        const el = document.querySelector(btn);
        if (el) {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                scrollTo(target, ziskejVyskuNav());
            });
        }
    });

    // Mobilní navigace
    scrollMap2.forEach(({ btn, target }) => {
        const el = document.querySelector(btn);
        if (el) {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                zavritMobil();
                // Malá pauza, aby se menu stihlo zavřít animací
                setTimeout(() => scrollTo(target, 20), 350);
            });
        }
    });

    // ── mobil helpers ──────────────────────────────────────
    function otevritMobil() {
        if (!navbar || !navmobile) return;
        navbar.style.display = "none";
        if (ham) ham.style.display = "none";

        if (cross) {
            cross.style.position = "absolute";
            cross.style.top      = "8px";
            cross.style.right    = "8px";
            cross.style.zIndex   = "10001";
            if (!navmobile.contains(cross)) navmobile.appendChild(cross);
            cross.style.display = "flex";
        }

        navmobile.classList.add("mobileopen");
        if (logo) {
            logo.classList.add("logo-styly");
            logo.style.opacity = "1";
        }

        if (option) {
            option.style.top = navmobile.scrollHeight + 110 + "px";
        }
    }

    function zavritMobil() {
        if (!navmobile) return;
        navmobile.classList.remove("mobileopen");
        if (ham) ham.style.display = "flex";
        if (cross) cross.style.display = "none";

        if (logo) {
            logo.style.opacity = "0";
            logo.classList.remove("logo-styly");
        }

        if (option) option.style.top = "100px";
        setTimeout(() => { if (navbar) navbar.style.display = "flex"; }, 400);
    }

    function checkwindow() {
        if (!navmobile || !navbar) return;

        if (window.innerWidth > 660) {
            navmobile.classList.remove("mobileopen");
            navbar.style.display = "flex";
            if (ham) ham.style.display = "none";
            if (cross) cross.style.display = "none";
            if (option) option.style.top = "100px";
        } else {
            navbar.style.display = "none";
            if (ham) ham.style.display = "flex";
        }
    }

    // Listenery přidáme jen jednou
    if (ham) ham.addEventListener("click", otevritMobil);
    if (cross) cross.addEventListener("click", zavritMobil);

    window.addEventListener("resize", checkwindow);
    checkwindow(); // Spustit hned po načtení

    // Sledování změn pro pozici přepínače
    if (navmobile) {
        const observer = new MutationObserver(() => {
            if (navmobile.classList.contains("mobileopen") && option) {
                setTimeout(() => {
                    option.style.top = navmobile.offsetHeight + 110 + "px";
                }, 650);
            }
        });
        observer.observe(navmobile, { attributes: true, attributeFilter: ["class"] });
    }
});
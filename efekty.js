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

let logo      = document.querySelector(".logo");
const navbar   = document.querySelector(".navbar");
const navmobile= document.querySelector(".mobil");
const ham      = document.querySelector(".hamburger");
const cross    = document.querySelector(".cross");
const option   = document.querySelector(".option");   // přepínač tématu

let vyska = navbar.offsetHeight;

// ── scroll helper ──────────────────────────────────────
function scrollTo(targetSelector, offset) {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const kam = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: kam - offset, behavior: "smooth" });
}

// desktop nav
scrollMap.forEach(({ btn, target }) => {
    const el = document.querySelector(btn);
    if (!el) return;
    el.addEventListener("click", (e) => {
        e.preventDefault();
        scrollTo(target, vyska);
    });
});

// mobilní nav
scrollMap2.forEach(({ btn, target }) => {
    const el = document.querySelector(btn);
    if (!el) return;
    el.addEventListener("click", (e) => {
        e.preventDefault();
        zavritMobil();                  // zavřít menu před scrollem
        setTimeout(() => scrollTo(target, 20), 350);
    });
});

// ── mobil helpers ──────────────────────────────────────
function otevritMobil() {
    navbar.style.display = "none";
    ham.style.display    = "none";

    // křížek – přesuneme ho do horního pravého rohu mobilního menu
    cross.style.position = "absolute";
    cross.style.top      = "8px";
    cross.style.right    = "8px";
    cross.style.zIndex   = "10001";
    // musíme ho dát jako child do .mobil, aby se správně pozicoval
    if (!navmobile.contains(cross)) {
        navmobile.appendChild(cross);
    }
    cross.style.display = "flex";

    navmobile.classList.add("mobileopen");
    logo.classList.add("logo-styly");
    logo.style.opacity = "1";

    // přepínač přesuneme pod otevřené menu, aby nepřekrýval tlačítka
    if (option) {
        option.style.top = navmobile.scrollHeight + 110 + "px";
    }
}

function zavritMobil() {
    navmobile.classList.remove("mobileopen");
    ham.style.display   = "flex";
    cross.style.display = "none";
    logo.style.opacity  = "0";
    logo.classList.remove("logo-styly");

    // vrátíme křížek zpět do headeru a obnovíme fixed pozici
    const header = document.querySelector("header");
    if (header && !header.contains(cross)) {
        header.appendChild(cross);
    }
    cross.style.position = "fixed";
    cross.style.top      = "7px";
    cross.style.right    = "17px";

    // přepínač vrátíme na původní pozici
    if (option) {
        option.style.top = "100px";
    }

    setTimeout(() => { navbar.style.display = "flex"; }, 400);
}

function checkwindow() {
    if (window.innerWidth > 660) {
        // desktop – reset všeho
        navmobile.style.opacity = "0";
        logo.style.opacity      = "0";
        navmobile.classList.remove("mobileopen");
        navbar.style.display    = "flex";
        logo.classList.add("logo-styly");
        ham.style.display       = "none";
        cross.style.display     = "none";

        if (option) option.style.top = "100px";

    } else {
        // mobil
        navbar.style.display = "none";
        ham.style.display    = "flex";

        // přidáváme listenery jen jednou – ochrana proti duplicitám
        if (!ham.dataset.bound) {
            ham.addEventListener("click", otevritMobil);
            cross.addEventListener("click", zavritMobil);
            ham.dataset.bound = "1";
        }
    }
}

// ── init ───────────────────────────────────────────────
checkwindow();
window.addEventListener("resize", checkwindow);

// ── dynamická pozice přepínače při otevřeném menu ──────
// pokud se výška mobilního menu změní (animace), přepočítáme
const observer = new MutationObserver(() => {
    if (navmobile.classList.contains("mobileopen") && option) {
        // počkáme na konec CSS animace (max-height transition ~1s)
        setTimeout(() => {
            option.style.top = navmobile.offsetHeight + 110 + "px";
        }, 650);
    }
});

observer.observe(navmobile, { attributes: true, attributeFilter: ["class"] });
const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const navLinks = document.querySelector<HTMLDivElement>(".nav-links");

if (menuToggle && navLinks) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navLinks.classList.add("hidden");
    navLinks.classList.remove("mobile-menu");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("hidden", isExpanded);
    navLinks.classList.toggle("mobile-menu", !isExpanded);
  });

  navLinks.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

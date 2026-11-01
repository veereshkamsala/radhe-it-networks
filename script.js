const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("open", !isExpanded);
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      navLinks.classList.remove("open");
    });
  });
}

const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

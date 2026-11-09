const toggle = document.querySelector<HTMLButtonElement>(".whatsapp-toggle");
const closeButton = document.querySelector<HTMLButtonElement>(".whatsapp-close");
const panel = document.querySelector<HTMLElement>("#whatsapp-panel");

if (toggle && closeButton && panel) {
  const setOpen = (isOpen: boolean) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close WhatsApp chat options" : "Open WhatsApp chat options");
    panel.setAttribute("aria-hidden", String(!isOpen));
    panel.classList.toggle("hidden", !isOpen);

    if (isOpen) {
      panel.querySelector<HTMLAnchorElement>(".whatsapp-topic")?.focus();
    } else {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  closeButton.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
    }
  });
}

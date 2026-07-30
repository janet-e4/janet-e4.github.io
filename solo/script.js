/*
  Design contract — Exhale Ledger
  JavaScript only enhances the direct Nick email action and restrained editorial
  reveals. Navigation, content, FAQs, and the mailto lead path work without it.
*/

document.documentElement.classList.add("js");

const year = document.querySelector("#year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const form = document.querySelector("#contact-form");
if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("Name") || "").trim();
    const contact = String(data.get("Email or phone") || "").trim();
    const dayEater = String(data.get("What eats most of my day") || "").trim();

    const subject = "Core Cell Solo — I want help that isn't another job";
    const body = [
      `Name: ${name}`,
      `Email or phone: ${contact}`,
      "",
      "What eats most of my day:",
      dayEater,
      "",
      "Sent from CREATAIV Core Cell Solo v1.0.0.",
    ].join("\n");

    window.location.href = `mailto:nick@e4lv.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

const revealTargets = document.querySelectorAll(
  ".load-copy, .desk-detail, .reframe-copy, .person-entry, .process-list > li, .ownership-ledger, .questions-copy, .contact-form",
);

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  revealTargets.forEach((element) => element.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  revealTargets.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
    observer.observe(element);
  });
}

/*
  Design contract — The Red-Pen Audit
  JavaScript only enhances the direct mail action and restrained editorial
  reveals. All content, navigation, FAQs, and the Nick lead path work without it.
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
    const tried = String(data.get("What I tried before") || "").trim();

    const subject = "Core Cell — I tried AI before";
    const body = [
      `Name: ${name}`,
      `Email or phone: ${contact}`,
      "",
      "What I tried before:",
      tried,
      "",
      "Sent from the CREATAIV Core Cell ‘You Tried AI’ page.",
    ].join("\n");

    window.location.href = `mailto:nick@e4lv.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

const revealTargets = document.querySelectorAll(
  ".section-body > h2, .week-line, .diagnosis, .ownership-ledger, .handover, .truth-ledger, .faq-list, .contact-form",
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
    { rootMargin: "0px 0px -10%", threshold: 0.08 },
  );

  revealTargets.forEach((element) => observer.observe(element));
}

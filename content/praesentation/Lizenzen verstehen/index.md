---
title: "Was sind OER?"
outputs:
  - Reveal
---

{{< logoBox src="/iWIP/bilder/logo_siblog_iwip.png" text="SciBlog iWIP" >}}

<script>
  function triggerPrint() {
    window.print(); // oder eine andere Funktion, je nach Zweck
  }
</script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.search.includes("print-pdf")) {
    // Warten, bis Reveal "ready" ist
    Reveal.addEventListener("ready", function () {
      setTimeout(() => {
        window.print();
      }, 300); // etwas Spielraum lassen
    });
  }
});
</script>



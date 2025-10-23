---
title: "Lizenzen verstehen"
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

<div class="top-toggle">
  <div class="top-row">
    <button onclick="triggerPrint()" title="Präsentation speichern">💾</button>
    <button onclick="location.href='/iWIP/oer/warum_oer'" title="Zur Blogansicht">📄</button>
    <a class="qr-icon-button" href="LINK-ZUM-INHALT" title="Zur Präsentation">
    </a>
  </div>
</div>

---

## Lizenzen verstehen

---

### Was sind Creative Commons Lizenzen?

- Vereinfachen das **Teilen und Nutzen kreativer Werke**
- Bieten **standardisierte Lizenzbausteine**
- Urheber behalten ihre Rechte – erlauben aber bestimmte Nutzungen

---

### CC – Bausteine (Kurzüberblick)

| Kürzel | Bedeutung | Erklärung |
|--------|------------|------------|
| **BY** | Attribution | Der **Name des Urhebers** muss genannt werden. |
| **SA** | Share Alike | Weitergabe nur **unter gleichen Bedingungen**. |
| **NC** | Non Commercial | **Keine kommerzielle Nutzung** erlaubt. |
| **ND** | No Derivatives | **Keine Bearbeitung oder Veränderung** erlaubt. |

---

### Lizenzkürzel – Aufbau

Ein Lizenzkürzel setzt sich aus mehreren Teilen zusammen:

**`CC BY-SA 3.0 DE`**

| Teil | Bedeutung |
|------|------------|
| **CC** | Creative Commons |
| **BY-SA** | Lizenzbedingungen (Namensnennung + Weitergabe unter gleichen Bedingungen) |
| **3.0** | Versionsnummer |
| **DE** | Portierung für Deutschland (optional) |

---

### Beispiele in der Praxis

- **CC BY 4.0** (Namensnennung, internationale Version)
- **CC BY-NC-ND** (Namensnennung, nicht-kommerziell, keine Änderungen)
- Manche Websites nutzen Symbole: ![CC Symbole Beispiel](https://mirrors.creativecommons.org/presskit/icons/cc.svg)

---

### Fragen?

**Vielen Dank für die Aufmerksamkeit!**

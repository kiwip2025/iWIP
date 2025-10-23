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

## Lizenzen verstehen

### CC – Bedingungen
Creative Commons (CC) bietet verschiedene **Bausteine**, die kombinierbar sind:

| Kürzel | Bedeutung | Erklärung |
|--------|------------|------------|
| **BY** | Attribution | Der **Name des Urhebers** muss genannt werden. |
| **SA** | Share Alike | Das Werk darf **nur unter gleichen Bedingungen** weitergegeben werden. |
| **NC** | Non Commercial | **Keine kommerzielle Nutzung** erlaubt. |
| **ND** | No Derivatives | Das Werk darf **nicht verändert** werden. |

---

### Lizenzkürzel – Aufbau
Ein Lizenzkürzel setzt sich aus mehreren Teilen zusammen, z. B.:

**`CC BY-SA 3.0 DE`**

| Teil | Bedeutung |
|------|------------|
| **CC** | Creative Commons |
| **BY-SA** | Lizenzbedingungen (Namensnennung + Weitergabe unter gleichen Bedingungen) |
| **3.0** | Versionsnummer |
| **DE** | Portierung für Deutschland (optional – sonst international gültig) |

> In der Praxis sind Bezeichnungen oft gemischt (z. B. englisch/deutsch, mit oder ohne Bindestriche, oft mit Symbolen).

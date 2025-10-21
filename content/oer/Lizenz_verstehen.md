---
title: "Lizenzen verstehen"
date: 2025-06-12
draft: false
description: "Creative-Commons-Lizenzen regeln die Nutzung, Weitergabe und Bearbeitung von Werken. Sie basieren auf Bausteinen wie Namensnennung, nicht-kommerzielle Nutzung, Weitergabe unter gleichen Bedingungen oder Bearbeitungsverbot."
summary: "Grundlagen zu Creative-Commons-Lizenzen und ihrem Aufbau."
tags: ["OER", "Creative Commons", "Lizenzierung", "Wirtschaftspädagogik"]
categories: ["OER"]
---

<!-- ✅ Druck- und Präsentations-Steuerung -->
<script>
  function triggerPrint() {
    window.print(); // Öffnet Druck- bzw. PDF-Export
  }
</script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.search.includes("print-pdf")) {
    Reveal.addEventListener("ready", function () {
      setTimeout(() => {
        window.print();
      }, 300);
    });
  }
});
</script>

<!-- ✅ Buttons oben rechts -->
<div class="top-toggle" style="position: fixed; top: 10px; right: 10px; z-index: 999;">
  <button onclick="triggerPrint()" title="Präsentation speichern">💾</button>
  <button onclick="location.href='/iWIP/praesentation/warum_oer'" title="Zur Präsentationsansicht">🖥️</button>
</div>

---

## 📚 Lizenzen verstehen

### ✅ Creative Commons – Grundbausteine

Creative Commons (CC) stellt standardisierte Lizenzen bereit, mit denen Urheber festlegen können, **wie ihre Werke genutzt werden dürfen**.

| Kürzel | Bedeutung        | Erklärung |
|--------|------------------|-----------|
| **BY** | Attribution      | Der **Urheber muss genannt** werden. |
| **SA** | Share Alike      | Weitergabe **nur unter gleichen Bedingungen** erlaubt. |
| **NC** | Non Commercial   | **Keine kommerzielle Nutzung** erlaubt. |
| **ND** | No Derivatives   | **Keine Bearbeitung/Veränderung** des Werkes erlaubt. |

---

### 🧩 Aufbau eines Lizenzkürzels

Ein vollständiges Lizenzkürzel sieht z. B. so aus:

**`CC BY-SA 3.0 DE`**

| Teil     | Erklärung |
|----------|-----------|
| **CC**   | Creative Commons – Lizenzfamilie |
| **BY-SA** | Lizenzbedingungen (Namensnennung + Weitergabe unter gleichen Bedingungen) |
| **3.0**  | Versionsnummer |
| **DE**   | Länderportierung (optional – z. B. deutsch) |

> Hinweis: Schreibweisen können leicht variieren, z. B. `CC-BY-SA`, `CC BY SA`, `CC BY-SA 4.0 International`.

---

### 💡 Warum ist das für OER wichtig?

- **OER (Open Educational Resources)** müssen offen lizenziert sein.  
- Creative Commons ist dafür **der Standard weltweit**.  
- Klare Lizenzen sorgen für **rechtliche Sicherheit** bei Nutzung, Veränderung und Weitergabe.

---

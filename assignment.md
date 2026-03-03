# Projekt: Car Track Builder

Téma: Souhrnné opakování JavaScriptu a práce s Gitem

---

## Cíl

Vytvořit webovou aplikaci pro návrh vlastní závodní tratě v mřížce

---

## Hlavní požadavky (Co to musí umět)

1. Mřížka (Grid):
   - Aplikace vygeneruje herní plochu o velikosti 20x20 políček.
   - Generování musí proběhnout dynamicky pomocí JavaScriptu.
2. Kreslení tratě:
   - Kliknutím na políčko se změní jeho typ (např. tráva -> silnice -> voda -> tráva). 
   - Vizuální změna musí být řešena pomocí CSS tříd.
3. Datový model:
   - Stav celé mapy musí být držen v proměnné v JavaScriptu (pole nebo pole objektů). 
   - Data musí být vždy synchronizovaná s tím, co je vidět na obrazovce.
4. Menu a Navigace:
   - Aplikace má dvě obrazovky: Hlavní menu a Editor. 
   - Menu obsahuje tlačítka "Nová mapa" (zobrazí editor s čistou mapou) a "Načíst mapu".
5. Ukládání a Načítání:
   - Uživatel může rozpracovanou mapu uložit pod vlastním názvem. 
   - Data se ukládají do localStorage prohlížeče.
   - Uživatel si může ze seznamu vybrat a načíst dříve uloženou mapu.
6. Verzování (Git):
   - Projekt musí být verzován pomocí Gitu. 
   - Každá větší funkcionalita musí být vyvíjena na vlastní větvi (feature/...).

---

## Doporučené postupy a tipy

- **Grid & DOM:** Využijte createElement a appendChild pro dynamické generování. Zvažte použití CSS Grid pro layout mřížky.
- **Interakce:** Pro efektivní zpracování kliknutí na buňky gridu využijte princip Event Delegation (jeden listener na rodiči).
- **Struktura Dat:** Mějte data oddělená od zobrazení (DOM). Udržujte stav mapy v poli (nebo poli objektů).
- **Navigace (SPA):** Pro přepínání mezi "Menu" a "Editorem" stačí dynamicky přidávat/odebírat CSS třídu (např. .hidden), která skryje nepotřebné sekce.
- **Ukládání Dat:** localStorage pracuje s textem. Pro uložení pole/objektů využijte JSON.stringify() a pro načtení JSON.parse().
- **Git Workflow:** Nezapomínejte na pravidelné commity. Pracujte na feature větvích
(feature/grid, feature/save-load...) a hotové části slučujte do main.

---

## Bonusové výzvy

- **Typy silnic:** Místo jednoduchého přepínání (silnice/tráva) přidejte paletu nástrojů (rovná, zatáčka, křižovatka).
- **Chytré cesty:** Aplikace sama pozná, jaký dílek silnice použít podle sousedních políček.
- **Export:** Tlačítko pro export mapy do textového kódu (JSON) pro sdílení s kamarády.
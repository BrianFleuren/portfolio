/* =========================================================
   Taalwissel NL / EN

   De HTML is in het Engels geschreven; dit bestand bevat de
   Nederlandse tegenhanger van elke zin en wisselt ze om.

   Onderhoud: de sleutel links is de Engelse tekst zoals die
   letterlijk in index.html staat (spaties genormaliseerd).
   Pas je de Engelse tekst aan, pas dan ook de sleutel aan —
   anders blijft die zin in het Engels staan. Zet
   localStorage.setItem('bf-lang-debug','1') om ontbrekende
   vertalingen in de console te zien.
   ========================================================= */

(function () {
  "use strict";

  var STORE = "bf-lang";
  var DEFAULT = "nl";

  /* ---------- zichtbare tekst ---------- */

  var NL = {
    /* --- navigatie en chrome --- */
    "Brian Fleuren — Building Engineering Portfolio": "Brian Fleuren — Portfolio Bouwkunde",
    "Skip to content": "Naar de inhoud",
    "Building Engineering · Avans": "Bouwkunde · Avans",
    "Projects": "Projecten",
    "About me": "Over mij",
    "Building Engineering · Avans Hogeschool": "Bouwkunde · Avans Hogeschool",

    /* --- hero en introductie --- */
    "Where a design meets the way it gets built": "Waar een ontwerp de uitvoering ontmoet",
    "Get in touch": "Neem contact op",
    "Introduction": "Introductie",
    "Building things came first. The engineering came after.":
      "Eerst bouwen. De techniek kwam daarna.",
    "I am a third-year Building Engineering student at Avans University of Applied Sciences in 's-Hertogenbosch. I have been building and designing things for as long as I can remember; these days that means variant studies, building-physics calculations and BIM models in Revit.":
      "Ik ben derdejaarsstudent Bouwkunde aan Avans Hogeschool in 's-Hertogenbosch. Van jongs af aan ben ik bezig met bouwen en ontwerpen; inmiddels betekent dat variantenstudies, bouwfysische berekeningen en BIM-modellen in Revit.",
    "What holds my attention is the point where a drawing meets reality — the span direction that decides which walls carry load, the duct run that has to be in the plan before it becomes a problem, the detail that decides whether a facade actually works.":
      "Wat mij boeit is het moment waarop een tekening de werkelijkheid raakt — de spanrichting die bepaalt welke wanden dragend worden, het kanalenverloop dat in het ontwerp moet zitten voordat het een probleem wordt, het detail dat bepaalt of een gevel echt werkt.",
    "The three projects below cover the range: four weeks on a live hospital site with a main contractor, an individual design taken down to detail level, and a large project run by a team.":
      "De drie projecten hieronder laten de hele breedte zien: vier weken op een draaiende ziekenhuisbouwplaats bij een hoofdaannemer, een individueel ontwerp uitgewerkt tot op detailniveau, en een groot project gerund door een team.",
    "Third year": "Derdejaars",
    "Site experience": "Bouwplaatservaring",
    "Detailing": "Detaillering",
    "More about me": "Meer over mij",
    "Download CV (PDF)": "Download cv (pdf)",
    "Download portfolio (PDF)": "Download portfolio (pdf)",

    /* --- kerncijfers --- */
    "Weeks on site": "Weken op de bouw",
    "Units planned": "Wooneenheden gepland",
    "Graduating": "Afstuderen",

    /* --- projectrail --- */
    "Cube House": "Kubuswoning",
    "Temporary AZC": "Tijdelijk AZC",

    /* ===================== PROJECT 01 ===================== */
    "Project 01": "Project 01",
    "Professional practice": "Beroepspraktijk",
    "Rijnstate hospital: Radiology & Nuclear Medicine":
      "Ziekenhuis Rijnstate: Radiologie & Nucleaire Geneeskunde",
    "Four weeks on site in Arnhem with main contractor Bouwbedrijf Berghege, working alongside the site manager on an extension built hard against a hospital that never closed for a day.":
      "Vier weken op de bouwplaats in Arnhem bij hoofdaannemer Bouwbedrijf Berghege, meelopend met de uitvoerder aan een uitbreiding die pal tegen een ziekenhuis aan werd gebouwd dat geen dag dicht ging.",
    "Arnhem · Summer 2025": "Arnhem · zomer 2025",
    "Twenty-four columns on a four by six grid": "Vierentwintig kolommen in een raster van vier bij zes",

    "Location": "Locatie",
    "Rijnstate hospital, Arnhem": "Ziekenhuis Rijnstate, Arnhem",
    "Contractor": "Hoofdaannemer",
    "On site": "Op de bouwplaats",
    "10 June — 8 July 2025": "10 juni — 8 juli 2025",
    "My role": "Mijn rol",
    "Intern to the site manager": "Stagiair bij de uitvoerder",
    "Handover": "Oplevering",
    "January 2026": "januari 2026",
    "Radiology & Nuclear Medicine extension": "Uitbreiding Radiologie & Nucleaire Geneeskunde",

    "The building": "Het gebouw",
    "A new wing on the north side of the hospital, holding outpatient rooms on the ground floor and the Radiology and Nuclear Medicine department above, including two hybrid operating theatres where imaging and surgery happen in the same room.":
      "Een nieuw bouwdeel aan de noordzijde van het ziekenhuis, met poliklinieken op de begane grond en daarboven de afdeling Radiologie en Nucleaire Geneeskunde, inclusief twee hybride operatiekamers waar beeldvorming en chirurgie in dezelfde ruimte plaatsvinden.",
    "The frame is twenty-four concrete columns on a fixed four by six grid, with hollow-core floors and a masonry cavity wall. Simple, until you look at what has to happen inside it.":
      "De draagconstructie bestaat uit vierentwintig betonnen kolommen in een vast raster van vier bij zes, met kanaalplaatvloeren en een gemetselde spouwmuur. Simpel, totdat je kijkt naar wat er binnenin moet gebeuren.",
    "Why it was hard": "Waarom het lastig was",
    "Everything had to be built against a hospital that stayed fully open. The accident and emergency entrance sat directly opposite our scaffolding, so the site was shaped as much by what the hospital needed as by what the building needed.":
      "Alles moest gebouwd worden tegen een ziekenhuis dat volledig open bleef. De ingang van de spoedeisende hulp lag recht tegenover onze steiger, dus de bouwplaats werd net zo goed bepaald door wat het ziekenhuis nodig had als door wat het gebouw nodig had.",
    "The rooms themselves are unforgiving too: scanners impose limits on vibration and on what may come near them, and the theatre walls carry lead shielding that has to stay intact.":
      "De ruimtes zelf zijn ook onverbiddelijk: scanners stellen eisen aan trillingen en aan wat er in de buurt mag komen, en de wanden van de operatiekamers bevatten loodafscherming die intact moet blijven.",

    "Construction": "Bouwwijze",
    "What the extension is made of": "Waar de uitbreiding uit bestaat",
    "A hybrid of stacked and assembled construction: masonry and calcium silicate on site, prefabricated concrete over the openings.":
      "Een combinatie van stapelbouw en montagebouw: metselwerk en kalkzandsteen op locatie, prefab beton boven de openingen.",
    "Frame": "Draagconstructie",
    "24 concrete columns, 4 × 6 grid": "24 betonnen kolommen, raster 4 × 6",
    "Bays": "Stramienmaat",
    "Floors": "Vloeren",
    "200 mm hollow core + 60 mm topping": "200 mm kanaalplaat + 60 mm druklaag",
    "Cavity wall": "Spouwmuur",
    "100 brick · 80 cavity · 150 mineral wool · 150 calcium silicate":
      "100 metselwerk · 80 spouw · 150 minerale wol · 150 kalkzandsteen",
    "Thermal": "Thermisch",
    "Rc ≥ 4.7 m²K/W": "Rc ≥ 4,7 m²K/W",
    "Shielded walls": "Stralingswanden",
    "250 mm metal stud with 2 mm lead": "250 mm metal stud met 2 mm lood",

    "Elevations": "Gevels",
    "North and east elevations at 1:50 — brickwork, aluminium frames and the planted screen around the plant storey. Drawing by Croes Bouwtechnisch Ingenieursbureau for Berghege and Rijnstate.":
      "Noord- en oostgevel op 1:50 — metselwerk, aluminium kozijnen en de groene afscherming rond de installatieverdieping. Tekening van Croes Bouwtechnisch Ingenieursbureau voor Berghege en Rijnstate.",
    "Window sill at 1:5 from the project detail book. The radiation shielding does not sit in the glazing — it sits in the metal-stud wall behind, as lead sheet between layers of plasterboard.":
      "Onderdorpel op 1:5 uit het detailboek van het project. De stralingswering zit niet in het glas — die zit in de metal-studwand erachter, als loodfolie tussen lagen gipskarton.",

    "Constraints": "Randvoorwaarden",
    "Building against a hospital that stayed open": "Bouwen tegen een ziekenhuis dat openbleef",
    "The site rules were written around the hospital, not around the build.":
      "De bouwplaatsregels waren geschreven rond het ziekenhuis, niet rond de bouw.",
    "The ambulance route kept clear at all times, without exception":
      "De ambulanceroute te allen tijde vrijhouden, zonder uitzondering",
    "Nothing ferrous brought inside the scanners' magnetic field line":
      "Niets van ijzer binnen de magneetveldlijn van de scanners brengen",
    "Vibration kept below the limit the imaging equipment could tolerate":
      "Trillingen onder de grens houden die de beeldvormende apparatuur verdraagt",
    "Noisy work held back until the wards were awake, with fixed transport routes so construction traffic never crossed hospital traffic":
      "Geluidsproducerend werk uitstellen tot de afdelingen wakker waren, met vaste transportroutes zodat bouwverkeer en ziekenhuisverkeer elkaar nooit kruisten",
    "The setting": "De context",
    "From the scaffold, looking across the fenced work area straight at the accident and emergency entrance. Everything on the left is a building site; everything on the right is a hospital running normally.":
      "Vanaf de steiger, over het afgezette werkterrein recht op de ingang van de spoedeisende hulp. Alles links is bouwplaats; alles rechts is een ziekenhuis dat gewoon doordraait.",
    "Facade": "Gevel",
    "The cavity wall going up in the alley between the new wing and the existing building — outer leaf part-built, insulation still open.":
      "De spouwmuur die omhoog komt in de steeg tussen het nieuwe bouwdeel en het bestaande gebouw — buitenblad half gemetseld, isolatie nog open.",

    "My contribution": "Mijn bijdrage",
    "What I owned": "Wat ik zelf heb bedacht",
    "Most days were hands-on. Three things, though, were mine to design rather than to carry.":
      "De meeste dagen waren handen uit de mouwen. Drie dingen mocht ik echter zelf bedenken in plaats van sjouwen.",
    "Work I designed": "Werk dat ik bedacht",
    "Took the raw transcript of a work meeting and turned it into usable minutes: seven themed sections, a decision list, and an action table giving every item an owner and a deadline. I did the same for the meeting that followed.":
      "Het ruwe transcript van een werkvergadering omgezet naar bruikbare notulen: zeven thematische onderdelen, een besluitenlijst en een actiepuntentabel waarin elk punt een eigenaar en een deadline kreeg. Bij de vergadering daarna heb ik hetzelfde gedaan.",
    "Built my own weekly measurement schedule for the operating-theatre walls. Those walls are electrically isolated by design, and services were being drilled through them constantly — the schedule made it visible, week by week, which walls were still sound and which had stopped being sound.":
      "Zelf een wekelijks doormeetschema opgezet voor de wanden van de operatiekamers. Die wanden zijn bewust elektrisch geïsoleerd, en er werd voortdurend doorheen geboord voor leidingen — het schema maakte week voor week zichtbaar welke wanden nog goed waren en welke dat niet meer waren.",
    "Carried out a workplace safety inspection against the site's own checklist and wrote it up.":
      "Een werkplekinspectie uitgevoerd aan de hand van de checklist van de bouwplaats en die uitgewerkt.",
    "Work I carried out": "Werk dat ik uitvoerde",
    "Setting out and plumbing masonry profiles so the brickwork would land on its gauge":
      "Metselprofielen uitzetten en waterpas stellen zodat het metselwerk op maat uitkomt",
    "Fixing vapour-tight membrane behind prefabricated panels, then drilling and resin-anchoring the brackets that carry them":
      "Dampdichte folie aanbrengen achter prefab wandjes, daarna gaten boren en de consoles met injectiemortel verankeren",
    "Cutting service penetrations through the shielded walls and sleeving them":
      "Sparingen voor leidingen uitzagen in de stralingswanden en afwerken",
    "Building the timber support frame for an operating-theatre sliding door":
      "De houten ophangconstructie bouwen voor een schuifdeur van een operatiekamer",
    "Profiles": "Profielen",
    "Set out level and at the right spacing — get this wrong and the bricks do not fit.":
      "Waterpas en op de juiste afstand uitgezet — zit dit scheef, dan passen de stenen niet.",
    "Bracket": "Console",
    "Stainless bracket carrying a prefabricated lintel, with the vapour-tight membrane dressed in behind it.":
      "RVS-console die een prefab latei draagt, met de dampdichte folie er netjes achter weggewerkt.",
    "Openings": "Sparingen",
    "The timber frame we built to carry an operating-theatre sliding door.":
      "De houten constructie die we bouwden om een schuifdeur van een operatiekamer te dragen.",
    "My detail": "Mijn detail",
    "Roof edge at 1:5, drawn in CAD afterwards at school. Aluminium trim, a prefabricated concrete band borrowed from a solution I met on site, 160 mm mineral wool with a 30 mm continuous layer, and a sedum finish — facade and roof both at Rc ≥ 4.7 m²K/W.":
      "Dakranddetail op 1:5, achteraf op school in CAD getekend. Aluminium dakrand, een prefab betonband geïnspireerd op een oplossing die ik op de bouw tegenkwam, 160 mm minerale wol met een doorlopende laag van 30 mm, en een sedumdak — gevel en dak beide op Rc ≥ 4,7 m²K/W.",
    "Afterwards": "Achteraf",
    "Back at school I took the facade apart again and redesigned the roof edge myself, working through two variants before settling on one where the roof bears fully on the load-bearing wall. The prefabricated concrete band came straight from something I had watched go up in Arnhem.":
      "Terug op school heb ik de gevel opnieuw uit elkaar gehaald en de dakrand zelf herontworpen, via twee varianten naar een oplossing waarbij het dak volledig op de dragende wand oplegt. De prefab betonband kwam rechtstreeks uit iets wat ik in Arnhem omhoog had zien gaan.",
    "Sketch": "Schets",
    "Working the cavity wall out by hand: 100 brick, 80 cavity, 150 mineral wool, 150 calcium silicate.":
      "De spouwmuur met de hand uitgewerkt: 100 metselwerk, 80 spouw, 150 minerale wol, 150 kalkzandsteen.",
    "Four weeks of carrying, drilling and setting out taught me something no drawing had: my interest sits":
      "Vier weken sjouwen, boren en uitzetten leerden mij iets wat geen tekening me had kunnen leren: mijn interesse ligt",
    "before": "vóór",
    "the site exists — in the preparation, the planning and the estimate.":
      "de bouwplaats bestaat — in de werkvoorbereiding, de planning en de begroting.",

    /* ===================== PROJECT 02 ===================== */
    "Project 02": "Project 02",
    "Individual": "Individueel",
    "Cube House: from preliminary to final design": "Kubuswoning: van VO naar DO",
    "Module 1.3. A detached house with a cross-shaped floor plan, developed from preliminary design (VO) all the way to final design (DO). Floor plan, elevations, section, load-bearing structure, foundation and ventilation worked out entirely by me in Revit.":
      "Module 1.3. Een vrijstaande woning met een kruisvormige plattegrond, uitgewerkt van voorlopig ontwerp (VO) tot definitief ontwerp (DO). Plattegrond, gevels, doorsnede, draagconstructie, fundering en ventilatie volledig zelf uitgewerkt in Revit.",
    "Fig. 01": "Afb. 01",
    "Overview drawing, A1 at 1:100. Ground-floor plan, four elevations, section A-A, 3D view and roof plan — built up entirely in Revit. Click to enlarge.":
      "Overzichtstekening, A1 op 1:100. Plattegrond begane grond, vier gevels, doorsnede A-A, 3D-aanzicht en dakplan — volledig opgebouwd in Revit. Klik om te vergroten.",
    "1.3 — preliminary to final design": "1.3 — van VO naar DO",
    "Individual project": "Individueel project",
    "Brief": "Opgave",
    "Detached house with studios and a workspace": "Vrijstaande woning met studio's en werkruimte",
    "Dimensions": "Afmetingen",
    "15.7 m wide · ridge height +5.57 m": "15,7 m breed · nokhoogte +5,57 m",
    "Delivered": "Opgeleverd",
    "April 2025": "april 2025",
    "The brief": "De opgave",
    "The house is made up of four volumes rotated around a diagonal axis. That produces a cross-shaped plan in which every wing takes on its own function: living, working, guest accommodation and four studios.":
      "De woning is opgebouwd uit vier volumes die om een diagonale as zijn gedraaid. Daardoor ontstaat een kruisvormige plattegrond waarin elke vleugel een eigen functie krijgt: wonen, werken, logeren en vier studio's.",
    "The difficulty sat in that rotated main form. Every kink in the facade demands its own answer in the load-bearing structure, the foundation and the detailing.":
      "De uitdaging zat in die gedraaide hoofdvorm. Elke knik in de gevel vraagt om een eigen oplossing in de draagconstructie, de fundering en de detaillering.",
    "What I produced": "Wat ik heb gemaakt",
    "Ground-floor plan at 1:100": "Plattegrond begane grond op 1:100",
    "Four elevations and section A-A": "Vier gevelaanzichten en doorsnede A-A",
    "3D model and visualisation in Revit": "3D-model en visualisatie in Revit",
    "Principle details of facade and foundation": "Principedetails van gevel en fundering",
    "Fig. 02": "Afb. 02",
    "Ground floor, 1:100. Four volumes rotated around a diagonal axis: living room, kitchen/dining, guest room, workspace and four studios.":
      "Begane grond, 1:100. Vier volumes gedraaid om een diagonale as: woonkamer, keuken/eetruimte, gastenverblijf, werkruimte en vier studio's.",
    "Fig. 03": "Afb. 03",
    "3D view from the Revit model. The rotation of the volumes is what makes the massing — and what complicates the structure.":
      "3D-aanzicht uit het Revit-model. De draaiing van de volumes maakt de hoofdvorm — en compliceert de constructie.",
    "Fig. 04": "Afb. 04",
    "Section A-A, 1:100, with the build-up of roof, facade and floor and the level markers up to +5.57 m.":
      "Doorsnede A-A, 1:100, met de opbouw van dak, gevel en vloer en de peilmaten tot +5,57 m.",
    "All four elevations at 1:100. Every kink in the plan shows up here as a change of plane in the facade.":
      "Alle vier de gevels op 1:100. Elke knik in de plattegrond komt hier terug als een verspringing in de gevel.",

    "Structure": "Constructie",
    "Load-bearing structure and foundation": "Draagconstructie en fundering",
    "Two variants for the span direction, tested against the rotated main form of the house.":
      "Twee varianten voor de spanrichting, afgezet tegen de gedraaide hoofdvorm van de woning.",
    "Span direction north–south. Short spans in the side wings, a longer span across the central section.":
      "Spanrichting noord-zuid. Korte overspanningen in de zijvleugels, een langere overspanning in het middendeel.",
    "Span direction east–west. Same plan, rotated span. This changes which walls become load-bearing.":
      "Spanrichting oost-west. Zelfde plattegrond, gedraaide overspanning. Dit verandert welke wanden dragend worden.",
    "Why two variants": "Waarom twee varianten",
    "Rotating the span direction immediately changes which walls carry load and where the foundation has to get heavier. I worked both variants out so that the choice could be made on evidence rather than assumed.":
      "Door de spanrichting te draaien verandert direct welke wanden dragend zijn en waar de fundering zwaarder moet worden. Ik heb beide varianten uitgewerkt om die keuze onderbouwd te kunnen maken, in plaats van hem aan te nemen.",
    "What I learned here": "Wat ik hier heb geleerd",
    "That a design decision taken at the front end — in this case rotating the volumes — works its way through to structure and cost at the back end. The diagonal axis looks good, but it produces extra kinks in the load-bearing structure and in the foundation.":
      "Dat een ontwerpkeuze aan de voorkant — in dit geval het draaien van de volumes — aan de achterkant doorwerkt in constructie en kosten. De diagonale as ziet er goed uit, maar levert extra knikken op in de draagconstructie en in de fundering.",
    "Fig. 05": "Afb. 05",
    "Floor with foundation. Strip foundations under the load-bearing walls, with an insulated PS floor between them.":
      "Vloer met fundering. Fundering op staal onder de dragende wanden, met een geïsoleerde PS-vloer daartussen.",

    "Building physics": "Bouwfysica",
    "Ventilation concepts: system C and system D": "Ventilatieconcepten: systeem C en systeem D",
    "Two ventilation principles worked out on the same floor plan, so that the consequences for comfort, space and energy could be compared side by side.":
      "Twee ventilatieprincipes uitgewerkt op dezelfde plattegrond, om de gevolgen voor comfort, ruimtebeslag en energie naast elkaar te kunnen vergelijken.",
    "System C": "Systeem C",
    "Natural supply through vents in the facade, mechanical extract at the moisture-loaded rooms. In the drawing, two vents were deliberately struck out because they sat on the wrong facade.":
      "Natuurlijke toevoer via roosters in de gevel, mechanische afvoer bij de vochtbelaste ruimtes. In de tekening zijn twee roosters bewust geschrapt omdat ze op de verkeerde gevel zaten.",
    "Simple and inexpensive": "Eenvoudig en goedkoop",
    "Needs little space for ducts": "Weinig ruimte nodig voor kanalen",
    "No heat recovery": "Geen warmteterugwinning",
    "System D": "Systeem D",
    "Balanced ventilation: supply and extract both mechanical, with heat recovery. The duct runs are drawn out across the whole house from the plant room.":
      "Gebalanceerde ventilatie: toevoer en afvoer beide mechanisch, met warmteterugwinning. Het kanalenverloop is over de hele woning uitgetekend vanaf de technische ruimte.",
    "Heat recovery, so more energy efficient": "Warmteterugwinning, dus energiezuiniger",
    "Needs space for ducts and a plant room": "Vraagt ruimte voor kanalen en een technische ruimte",
    "Higher investment and more maintenance": "Hogere investering en meer onderhoud",
    "Variant 1. Blue: natural supply through facade vents. Red: mechanical extract from the toilet, bathroom and kitchen.":
      "Variant 1. Blauw: natuurlijke toevoer via gevelroosters. Rood: mechanische afvoer vanuit wc, badkamer en keuken.",
    "Blue: mechanical supply ducts to the habitable rooms. Red: extract from the wet rooms back to the plant room.":
      "Blauw: mechanische toevoerkanalen naar de verblijfsruimtes. Rood: afvoer vanuit de natte ruimtes naar de technische ruimte.",
    "For this house, system D fits the energy requirements best — provided the duct routing is taken into account in the design itself. That last point turned out to be the core of the assignment.":
      "Voor deze woning sluit systeem D het beste aan bij de energie-eisen — mits het kanalenverloop al in het ontwerp wordt meegenomen. Dat laatste bleek de kern van de opgave.",

    "Principle details at 1:5": "Principedetails op 1:5",
    "Drawn by hand, layer by layer, so that every part of the build-up has to be accounted for.":
      "Met de hand getekend, laag voor laag, zodat elk onderdeel van de opbouw verantwoord moet worden.",
    "Roof edge. Bitumen, waterproof membrane, XPS 040, vapour barrier, roof decking, timber joists and plasterboard.":
      "Dakrand. Bitumen, waterkerende folie, XPS 040, dampremmende folie, dakbeschot, houten liggers en gipskarton.",
    "Foundation. Strip footing, insulated floor and the transition into the cavity wall.":
      "Fundering. Fundering op staal, geïsoleerde vloer en de overgang naar de spouwmuur.",
    "Window frame, detail 01. Brick, cavity, 30 mm insulation, 160 mm insulation between studs, plasterboard — with joint and seam sealing.":
      "Kozijn, detail 01. Baksteen, spouw, 30 mm isolatie, 160 mm isolatie tussen de stijlen, gipskarton — met naad- en kierdichting.",

    /* ===================== PROJECT 03 ===================== */
    "Project 03": "Project 03",
    "Group · 6 students": "Groep · 6 studenten",
    "Temporary asylum seekers' centre, Hoorn-West": "Tijdelijk AZC Hoorn-West",
    "A realisation plan for roughly 350 prefab housing units, commissioned by the COA (the Dutch central agency for the reception of asylum seekers). Elective module Project Management, with a team of six students from four different disciplines.":
      "Een realisatieplan voor circa 350 prefab wooneenheden in opdracht van het COA. Keuzemodule Projectmanagement, met een team van zes studenten uit vier verschillende studierichtingen.",
    "Fig. 06": "Afb. 06",
    "Three-storey stacked units in timber cladding, with bicycle parking along the access route. Rendered from our Revit model.":
      "Drielaags gestapelde units met houten gevelbekleding, met fietsenstallingen langs de ontsluitingsroute. Gerenderd vanuit ons Revit-model.",
    "Client": "Opdrachtgever",
    "Scale": "Omvang",
    "350 to 360 housing units": "350 tot 360 wooneenheden",
    "Build time": "Bouwtijd",
    "12 months": "12 maanden",
    "6 students, 4 disciplines": "6 studenten, 4 studierichtingen",
    "October 2025": "oktober 2025",
    "Deliver a temporary asylum seekers' centre within twelve months, built up from prefab modular units. The units are produced in the factory while the foundation is laid on site, so production runs parallel to the work on the building site.":
      "Een tijdelijk asielzoekerscentrum realiseren binnen twaalf maanden, opgebouwd uit prefab modulaire units. De units worden in de fabriek geproduceerd terwijl op locatie de fundering wordt aangelegd, waardoor productie parallel loopt aan het werk op de bouwplaats.",
    "Alongside the housing units, the plan covers sanitary facilities, communal living and dining areas, offices for the COA and the layout of the outdoor space.":
      "Naast de woonunits omvat het plan sanitaire ruimtes, gemeenschappelijke verblijf- en eetruimtes, kantoren voor het COA en de inrichting van het buitenterrein.",
    "What we steered on": "Waar we op stuurden",
    "A maximum deviation of 2% against the budget":
      "Maximaal 2% afwijking ten opzichte van de begroting",
    "Zero accidents involving lost time": "Nul ongevallen met verzuim",
    "Quality in line with the Bbl, NEN standards and the COA's programme of requirements":
      "Kwaliteit volgens het Bbl, de NEN-normen en het programma van eisen van het COA",
    "Limiting nuisance through the BLVC plan": "Beperken van overlast via het BLVC-plan",
    "The 3D model and the building-engineering input":
      "Het 3D-model en de bouwkundige inbreng",
    "In a team drawn from construction management, spatial development and civil engineering, I was the building engineer. Working the units out in Revit therefore landed with me.":
      "In een team met bouwtechnische bedrijfskunde, ruimtelijke ontwikkeling en civiele techniek was ik de bouwkundige. Het uitwerken van de units in Revit lag daarmee bij mij.",
    "Fig. 07": "Afb. 07",
    "Floor plan of a single housing unit, 10.6 × 6.0 m: four beds, a shared living and dining area, kitchen and sanitary facilities. This drawing was used as the cover of the realisation plan.":
      "Plattegrond van één wooneenheid, 10,6 × 6,0 m: vier slaapplekken, een gedeelde woon- en eetruimte, keuken en sanitair. Deze tekening is als omslag van het realisatieplan gebruikt.",
    "Fig. 08": "Afb. 08",
    "Section through three stacked storeys, with floor build-up and foundation.":
      "Doorsnede over drie gestapelde bouwlagen, met vloeropbouw en fundering.",
    "What I worked on": "Waar ik aan heb gewerkt",
    "The 3D model of the housing units in Revit, including plans and sections":
      "Het 3D-model van de wooneenheden in Revit, inclusief plattegronden en doorsneden",
    "The building-engineering development of the final design, together with two teammates":
      "De bouwkundige uitwerking van het definitieve ontwerp, samen met twee teamgenoten",
    "Thinking through working methods per construction phase: foundation, floors and placing the units":
      "Meedenken over werkmethoden per bouwfase: fundering, vloeren en het plaatsen van de units",
    "My role in the team": "Mijn rol in het team",
    "My fellow students came from other disciplines, so the building-engineering work fell to me naturally. A teammate who was originally going to build the Revit model swapped that task with me once it became clear it suited my background better.":
      "Mijn medestudenten kwamen uit andere richtingen, waardoor de bouwkundige uitwerking vanzelf bij mij terechtkwam. Een teamgenoot die eerst het Revit-model zou maken, ruilde die taak met mij toen bleek dat dit beter bij mijn achtergrond paste.",
    "That swap turned out to be the right call: our 3D model was":
      "Die ruil bleek achteraf de juiste keuze: ons 3D-model was",
    "noticeably more complete and more detailed": "duidelijk completer en gedetailleerder",
    "than those of most other groups.": "dan dat van de meeste andere groepen.",
    "Fig. 09": "Afb. 09",
    "The communal outdoor space between the blocks: playground, seating and paths, with external stairs and galleries serving the upper floors.":
      "De gemeenschappelijke buitenruimte tussen de blokken: speelplek, zitplekken en paden, met buitentrappen en galerijen die de bovenste lagen ontsluiten.",
    "Fig. 10": "Afb. 10",
    "Gallery access along the facade. Stacking the units and serving them from an external gallery keeps the structure simple and demountable.":
      "Galerijontsluiting langs de gevel. Het stapelen van de units en ze vanaf een buitengalerij ontsluiten houdt de constructie simpel en demontabel.",
    "Fig. 11": "Afb. 11",
    "Site layout from the BLVC plan: construction phases, driving routes, site huts, waste separation, first-aid points and emergency exits.":
      "Bouwplaatsinrichting uit het BLVC-plan: bouwfases, rijroutes, keten, afvalscheiding, EHBO-punten en nooduitgangen.",
    "What I took from it": "Wat ik eruit heb gehaald",
    "I had to work remotely for part of the project. That is exactly when I noticed how much a good communication plan is worth. It sounds like a formality, but in practice it is the difference between a team that sits waiting for each other and a team that keeps working. Agreeing clearly who picks up what — and writing it down — saved us a lot of time.":
      "Een deel van het project heb ik op afstand moeten werken. Juist daardoor merkte ik hoeveel een goed communicatieplan waard is. Het klinkt als een formaliteit, maar in de praktijk is het het verschil tussen een team dat op elkaar wacht en een team dat doorwerkt. Duidelijk afspreken wie wat oppakt — en dat vastleggen — heeft ons veel tijd bespaard.",
    "I also noticed that my own interest sits mainly with the design side. It was genuinely useful to look at a building project once from the position of project manager and supervisor, precisely because it shows what a design decision means further down the process.":
      "Daarnaast merkte ik dat mijn interesse vooral bij het ontwerpgedeelte ligt. Het is nuttig geweest om een keer vanuit de rol van projectleider en toezichthouder naar een bouwproject te kijken, juist omdat het laat zien wat een ontwerpkeuze verderop in het proces betekent.",

    /* --- overig werk --- */
    "Also on the drawing board": "Ook op de tekentafel",
    "Other project experience": "Overige projectervaring",
    "Smaller assignments and one thing I built entirely off my own back.":
      "Kleinere opdrachten en één ding dat ik volledig op eigen initiatief heb gebouwd.",
    "Project analysis": "Projectanalyse",
    "A building-engineering analysis of a live construction project, focused on the structure and how it was actually executed on site.":
      "Een bouwkundige analyse van een lopend bouwproject, met aandacht voor de constructie en de uitvoering op de bouwplaats.",
    "Sustainability assignment": "Duurzaamheidsopdracht",
    "Facade detail, my own house": "Geveldetail eigen woning",
    "Independent research into the options for making an existing facade construction more sustainable, worked out as a detail.":
      "Zelfstandig onderzoek naar de verduurzamingsmogelijkheden van een bestaande gevelconstructie, uitgewerkt als detail.",
    "Own initiative": "Eigen initiatief",
    "Revit automation": "Revit-automatisering",
    "Built my own integration (an MCP connection) to automate repetitive modelling work in Revit — because the fastest way to understand a tool is to take it apart.":
      "Zelf een koppeling (een MCP-integratie) gebouwd om repeterend modelleerwerk in Revit te automatiseren — omdat je een programma het snelst doorgrondt door het uit elkaar te halen.",

    /* ===================== OVER MIJ ===================== */
    "Practical, technical, and": "Praktisch, technisch en",
    "curious about how it fits together": "nieuwsgierig naar hoe het in elkaar zit",
    "I am a third-year Building Engineering student with a practical, technical streak. I have been building and designing things since I was young; that has grown into making variant studies, building-physics calculations and BIM models in Revit.":
      "Ik ben derdejaarsstudent Bouwkunde met een praktische, technische instelling. Van jongs af aan ben ik bezig met bouwen en zelf ontwerpen; dat is uitgegroeid tot het maken van variantenstudies, bouwfysische berekeningen en BIM-modellen in Revit.",
    "I combine an eye for detail and self-discipline with strong communication skills, picked up as a closing manager in hospitality, where I run staff and day-to-day operations on my own. What interests me most is the moment a design has to survive contact with reality: the span direction that changes which walls carry load, the duct run that has to be in the plan before it is a problem, the detail that decides whether a facade actually works.":
      "Ik combineer oog voor detail en discipline met sterke communicatieve vaardigheden, opgedaan als sluitingsbeheerder in de horeca, waar ik zelfstandig personeel en bedrijfsvoering aanstuur. Wat mij het meest interesseert is het moment waarop een ontwerp de werkelijkheid moet overleven: de spanrichting die verandert welke wanden dragend zijn, het kanalenverloop dat in het ontwerp moet zitten voordat het een probleem wordt, het detail dat bepaalt of een gevel echt werkt.",
    "I am currently looking for a practical work placement in the Nijmegen / Wijchen region where I can put that technical knowledge to work.":
      "Ik ben op zoek naar een praktijkervaringsplek in de regio Nijmegen/Wijchen waar ik die technische kennis in de praktijk kan brengen.",

    "Software & tools": "Software & tools",
    "Open one to see what I actually use it for, and what it taught me.":
      "Klik er een open om te zien waar ik het echt voor gebruik, en wat het me heeft geleerd.",
    "BIM modelling, schedules & parameters": "BIM-modelleren, schema's & parameters",
    "My main tool, and the one I have put the most hours into. What I have learned is that a model is only as useful as the discipline behind it: consistent naming, parameters that genuinely carry information, and schedules that read straight out of the model instead of being retyped next to it.":
      "Mijn belangrijkste programma, en het programma waar ik de meeste uren in heb zitten. Wat ik heb geleerd is dat een model niet bruikbaarder is dan de discipline erachter: consequent benoemen, parameters die echt informatie dragen, en schema's die rechtstreeks uit het model komen in plaats van ernaast te worden overgetypt.",
    "For the Cube House I built everything from a single model — plan, four elevations, section, 3D view and roof plan — and laid them out on one A1 sheet, so a change to the model updates every view at once. On the asylum seekers' centre I took the modelling over from a teammate, and our model came out more complete and more detailed than most of the other groups'. I have also built my own integration to automate repetitive modelling work, because the quickest way to understand a tool is to take it apart.":
      "Voor de Kubuswoning heb ik alles vanuit één model opgebouwd — plattegrond, vier gevels, doorsnede, 3D-aanzicht en dakplan — en op één A1-blad gezet, zodat een wijziging in het model alle aanzichten tegelijk bijwerkt. Bij het AZC nam ik het modelleerwerk over van een teamgenoot, en ons model werd completer en gedetailleerder dan dat van de meeste andere groepen. Daarnaast heb ik zelf een koppeling gebouwd om repeterend modelleerwerk te automatiseren, omdat je een programma het snelst doorgrondt door het uit elkaar te halen.",
    "Used in": "Toegepast in",
    "All three projects": "Alle drie de projecten",
    "CAD drawing packages": "CAD-tekenpakketten",
    "2D construction drawing and detailing": "2D-bouwkundig tekenwerk en detaillering",
    "Where Revit gives you the whole building, a 2D package is where one detail gets resolved. I drew my roof-edge detail at 1:5 as a production-ready sheet: every layer hatched, dimensions on the build-up, leaders naming each material, and a title block recording the scale, the date and who drew it.":
      "Waar Revit je het hele gebouw geeft, is een 2D-pakket de plek waar één detail wordt opgelost. Mijn dakranddetail op 1:5 heb ik getekend als een uitvoeringsgerede tekening: elke laag gearceerd, maatvoering op de opbouw, verwijzingen naar elk materiaal, en een stempel met schaal, datum en tekenaar.",
    "The lesson was that the skill is not the software, it is the conventions. Line weights, hatching and annotation exist so that someone can read the drawing correctly without you standing next to them explaining it.":
      "De les was dat de vaardigheid niet in de software zit maar in de conventies. Lijndiktes, arceringen en annotaties bestaan zodat iemand de tekening goed kan lezen zonder dat jij ernaast staat om het uit te leggen.",
    "Calculations, schedules & budgets": "Berekeningen, schema's & begrotingen",
    "The most useful thing I made on site was a spreadsheet. The operating-theatre walls had to stay electrically isolated while services were being drilled through them constantly, so I set up a weekly measurement schedule — one row per wall, one column per check — which made it immediately visible which walls were still sound and exactly when one stopped being sound.":
      "Het nuttigste dat ik op de bouwplaats heb gemaakt was een spreadsheet. De wanden van de operatiekamers moesten elektrisch geïsoleerd blijven terwijl er voortdurend doorheen werd geboord voor leidingen, dus zette ik een wekelijks doormeetschema op — één regel per wand, één kolom per meting — waardoor meteen zichtbaar was welke wanden nog goed waren en precies wanneer er een afviel.",
    "I have also worked with a cost structure split across labour, materials, subcontracting, plant and overheads, comparing budget against committed cost and forecast, and with a criteria table for weighing construction variants against each other. What I took from all of it: a good sheet answers a question, a bad one just stores numbers.":
      "Daarnaast heb ik gewerkt met een kostenopbouw verdeeld over arbeid, materiaal, onderaanneming, materieel en opslagen, waarbij begroting, bestede kosten en prognose naast elkaar staan, en met een criteriatabel om bouwmethoden tegen elkaar af te wegen. Wat ik eruit heb gehaald: een goed werkblad beantwoordt een vraag, een slecht werkblad bewaart alleen getallen.",
    "Rijnstate / Berghege · Cube House": "Rijnstate / Berghege · Kubuswoning",
    "Compositing photography onto drawings": "Fotografie samenvoegen met tekeningen",
    "I used it to put a drawing and the real site into the same frame: I took the A0 construction-site layout drawing for the hospital project and composited my own site photographs onto the positions they were taken from, so the plan and what it actually looked like can be read together.":
      "Ik heb het gebruikt om een tekening en de echte bouwplaats in hetzelfde beeld te zetten: de A0-bouwplaatsinrichting van het ziekenhuisproject heb ik gecombineerd met mijn eigen foto's, geplaatst op de positie waar ze genomen zijn, zodat de tekening en de werkelijkheid samen te lezen zijn.",
    "Working at that size taught me layer discipline, masking and resolution — and that a file which gets away from you becomes unusable no matter how good the image is.":
      "Werken op dat formaat leerde me laagdiscipline, maskeren en resolutie — en dat een bestand dat je uit handen loopt onbruikbaar wordt, hoe goed het beeld ook is.",
    "Vector diagrams and project graphics": "Vectordiagrammen en projectgrafiek",
    "I use Illustrator for the graphic side of presenting a project: diagrams, phasing drawings and figures that have to stay sharp at any size, and for tidying up exported linework before it goes into a report.":
      "Illustrator gebruik ik voor de grafische kant van het presenteren van een project: diagrammen, faseringstekeningen en figuren die op elk formaat scherp moeten blijven, en om geëxporteerd lijnwerk op te schonen voordat het in een verslag gaat.",
    "Drawing in vectors rather than pixels forces you to think in shapes and layers from the start, which is the same habit that makes a CAD drawing readable.":
      "Tekenen in vectoren in plaats van pixels dwingt je vanaf het begin in vormen en lagen te denken, en dat is dezelfde gewoonte die een CAD-tekening leesbaar maakt.",
    "Multi-page reports and portfolios": "Meerpagina-verslagen en portfolio's",
    "For documents that run to many pages — setting up a grid, master pages and paragraph styles so a long report or portfolio stays consistent throughout, instead of being laid out page by page and drifting as it goes.":
      "Voor documenten die over veel pagina's lopen — een grid, stramienpagina's en alineastijlen opzetten zodat een lang verslag of portfolio overal consistent blijft, in plaats van pagina voor pagina te worden opgemaakt en gaandeweg af te drijven.",
    "It is the same principle as a BIM model or a drawing set: define the system once, then let every page inherit it.":
      "Het is hetzelfde principe als bij een BIM-model of een tekeningenset: definieer het systeem één keer en laat elke pagina het overnemen.",

    "What I can already do": "Wat ik al kan",
    "BIM modelling & parametric work in Revit": "BIM-modelleren & parametrisch werken in Revit",
    "Variant studies of building methods (system build, timber frame)":
      "Variantenstudies bouwmethoden (systeembouw, HSB)",
    "Floor types and foundation variants": "Vloertypen en funderingsvarianten",
    "Building-physics calculations (daylight, solar load)":
      "Bouwfysische berekeningen (daglicht, Q_zon)",
    "Sustainability analysis of facade constructions": "Duurzaamheidsanalyse gevelconstructies",
    "Materials science": "Materiaalkunde",

    "Education": "Opleiding",
    "Where I learned it": "Waar ik het heb geleerd",
    "BSc Building Engineering": "HBO Bouwkunde",
    "Avans University of Applied Sciences, 's-Hertogenbosch": "Avans Hogeschool, 's-Hertogenbosch",
    "Building methods, materials science and BIM modelling. Currently in the third year.":
      "Bouwmethoden, materiaalkunde en BIM-modelleren. Momenteel in het derde jaar.",
    "Completed": "Afgerond",
    "HAVO — Economics & Society": "Havo — Economie & Maatschappij",
    "Graduated with an average of 7.5.": "Geslaagd met een gemiddelde van 7,5.",

    "Experience": "Werkervaring",
    "Work & responsibility": "Werk & verantwoordelijkheid",
    "Jan 2023 — present": "jan 2023 — heden",
    "Closing manager": "Sluitingsbeheerder",
    "Independently responsible for closing the restaurant and running the floor staff during evening shifts":
      "Zelfstandig verantwoordelijk voor het afsluiten van de zaak en het aansturen van personeel tijdens avonddiensten",
    "Keeping an eye on staffing costs and matching the rota to expected demand":
      "Bewaken van personeelskosten en de bezetting afstemmen op de verwachte drukte",
    "Receiving and advising guests on drinks and menu choices, and resolving problems on the spot":
      "Gasten ontvangen en adviseren over drank- en menukeuze, en problemen ter plekke oplossen",
    "Feb — May 2023": "feb — mei 2023",
    "Intern": "Stagiair",
    "Shadowed experienced colleagues and advised clients":
      "Meegelopen met ervaren collega's en klanten geadviseerd",
    "Maintained contact with internal and external relations":
      "Contacten onderhouden met interne en externe relaties",
    "Jan 2019 — Jan 2023": "jan 2019 — jan 2023",
    "Sales assistant": "Verkoopmedewerker",
    "Handled transactions and processed complaints":
      "Transacties afgehandeld en klachten verwerkt",
    "Kept the shop floor tidy and professional":
      "Een nette, professionele winkelomgeving verzorgd",

    "Outside the studio": "Naast de studie",
    "Coaching Jong Dames 3": "Coach Jong Dames 3",
    "MHC Wijchen — field hockey, second class": "MHC Wijchen — hockey, tweede klasse",
    "I plan the season and run the weekly training sessions for a squad of 14 to 16 players, and I coordinate sponsorship for the team's kit. It is the same skill as running a project team, just with more mud: decide what matters, make it clear who does what, and keep everyone moving.":
      "Ik maak de seizoensplanning en verzorg de wekelijkse trainingen voor een selectie van 14 tot 16 speelsters, en ik coördineer de sponsoring van de kledingpakketten. Het is dezelfde vaardigheid als het leiden van een projectteam, alleen met meer modder: bepalen wat telt, duidelijk maken wie wat doet, en iedereen in beweging houden.",
    "Languages": "Talen",
    "Dutch": "Nederlands",
    "— native": "— moedertaal",
    "English": "Engels",
    "— advanced": "— vergevorderd",
    "Spanish": "Spaans",
    "— elementary": "— elementair",
    "Certificates": "Certificaten",
    "— safety": "— veiligheid",
    "Interests": "Interesses",
    "Construction & engineering": "Bouw & techniek",
    "Design": "Ontwerpen",
    "Cooking": "Koken",
    "Sport": "Sporten",

    /* ===================== CONTACT ===================== */
    "Let's talk about": "Laten we het hebben over",
    "a placement or a project": "een stage of een project",
    "Currently looking for": "Op zoek naar",
    "A practical work placement in the Nijmegen / Wijchen region where I can put my technical knowledge into practice — ideally somewhere that lets me work on design development, detailing and BIM.":
      "Een praktijkervaringsplek in de regio Nijmegen/Wijchen waar ik mijn technische kennis in de praktijk kan brengen — het liefst ergens waar ik aan ontwerpuitwerking, detaillering en BIM kan werken.",
    "Email": "E-mail",
    "Phone": "Telefoon",
    "Based in": "Woonplaats",
    "Wijchen, the Netherlands": "Wijchen, Nederland",
    "Studying": "Opleiding",
    "Send me an email": "Stuur me een e-mail",
    "Badge not loading? Open the profile": "Badge laadt niet? Open het profiel",
    "directly on LinkedIn": "direct op LinkedIn"
  };

  /* ---------- attributen (alt-teksten, aria-labels) ---------- */

  var NL_ATTR = {
    "Sections": "Secties",
    "Projects": "Projecten",
    "Enlarged drawing": "Vergrote tekening",
    "Close": "Sluiten",
    "Render of two three-storey timber-clad accommodation blocks at dusk.":
      "Render van twee drielaagse woonblokken met houten gevelbekleding in de schemering.",
    "Portrait photograph of Brian Fleuren.": "Portretfoto van Brian Fleuren.",
    "The new hospital wing under construction: brick facade behind full scaffolding, with a mortar silo and site fencing in front.":
      "Het nieuwe ziekenhuisdeel in aanbouw: gemetselde gevel achter volledige steiger, met een mortelsilo en bouwhekken ervoor.",
    "North and east elevations of the hospital extension at 1:50, showing the brick facade, aluminium frames and the planted roof storey.":
      "Noord- en oostgevel van de ziekenhuisuitbreiding op 1:50, met metselwerk, aluminium kozijnen en de begroeide installatieverdieping.",
    "Window sill detail at 1:5 from the project detail book, with the full cavity wall build-up annotated.":
      "Onderdorpeldetail op 1:5 uit het detailboek, met de volledige spouwmuuropbouw benoemd.",
    "View down from the scaffolding over the site, with the hospital's accident and emergency entrance and parked ambulances directly opposite.":
      "Uitzicht vanaf de steiger over het bouwterrein, met recht tegenover de ingang van de spoedeisende hulp en geparkeerde ambulances.",
    "The cavity wall part-built along the alley between the new wing and the existing hospital, with insulation still exposed.":
      "De half gemetselde spouwmuur in de steeg tussen het nieuwe bouwdeel en het bestaande ziekenhuis, met de isolatie nog open.",
    "Masonry profiles set out and plumbed along the facade, with prefabricated brick lintels resting on stainless brackets.":
      "Metselprofielen uitgezet en waterpas gesteld langs de gevel, met prefab lateien op RVS-consoles.",
    "A stainless steel bracket bolted to the concrete floor edge, carrying a prefabricated concrete lintel, with black vapour-tight membrane dressed behind it.":
      "Een RVS-console bevestigd aan de betonnen vloerrand die een prefab betonlatei draagt, met zwarte dampdichte folie erachter weggewerkt.",
    "A timber support frame built into a plasterboard wall opening for an operating-theatre sliding door.":
      "Een houten ophangconstructie in een gipswandopening voor een schuifdeur van een operatiekamer.",
    "Hand-drawn roof edge detail at 1:5 with an aluminium roof trim, prefabricated concrete band, insulation and a sedum finish.":
      "Dakranddetail op 1:5 met aluminium dakrand, prefab betonband, isolatie en een sedumafwerking.",
    "Hand-drawn axonometric sketch of the cavity wall, annotated with the thickness of each layer.":
      "Handgetekende axonometrische schets van de spouwmuur, met de dikte van elke laag erbij.",
    "A1 overview drawing of the cube house containing four elevations, the ground-floor plan, section A-A, a 3D view and a roof plan.":
      "A1-overzichtstekening van de kubuswoning met vier gevels, de plattegrond begane grond, doorsnede A-A, een 3D-aanzicht en een dakplan.",
    "Ground-floor plan of the cube house with room numbers, areas and dimension lines.":
      "Plattegrond begane grond van de kubuswoning met ruimtenummers, oppervlaktes en maatlijnen.",
    "3D view of the cube house showing the rotated brick volumes.":
      "3D-aanzicht van de kubuswoning met de gedraaide gemetselde volumes.",
    "Section A-A through the cube house with construction build-up annotations and level markers.":
      "Doorsnede A-A door de kubuswoning met de opbouw van de constructie en peilmaten.",
    "Four elevations of the cube house at scale 1:100: front, right side, rear and left side.":
      "Vier gevels van de kubuswoning op schaal 1:100: voorgevel, rechterzijgevel, achtergevel en linkerzijgevel.",
    "Hand-drawn floor plan with arrows indicating a north-south span direction.":
      "Handgetekende plattegrond met pijlen die een spanrichting noord-zuid aangeven.",
    "Hand-drawn floor plan with arrows indicating an east-west span direction.":
      "Handgetekende plattegrond met pijlen die een spanrichting oost-west aangeven.",
    "Hand-drawn foundation plan showing strip footings under the load-bearing walls and an insulated floor between them.":
      "Handgetekend funderingsplan met fundering op staal onder de dragende wanden en een geïsoleerde vloer daartussen.",
    "Floor plan marked up in blue and red for ventilation system C, with two facade vents crossed out.":
      "Plattegrond in blauw en rood ingetekend voor ventilatiesysteem C, met twee gevelroosters doorgestreept.",
    "Floor plan marked up in blue and red showing the duct layout for balanced ventilation system D.":
      "Plattegrond in blauw en rood met het kanalenverloop voor gebalanceerd ventilatiesysteem D.",
    "Hand-drawn roof edge detail at 1:5 with annotated layers from bitumen down to plasterboard.":
      "Handgetekend dakranddetail op 1:5 met alle lagen benoemd, van bitumen tot gipskarton.",
    "Hand-drawn foundation detail at 1:5 showing the strip footing, insulated floor and cavity wall build-up.":
      "Handgetekend funderingsdetail op 1:5 met fundering op staal, geïsoleerde vloer en de spouwmuuropbouw.",
    "Hand-drawn window frame detail at 1:5 with dimensions and sealing annotations.":
      "Handgetekend kozijndetail op 1:5 met maatvoering en aanduidingen voor de dichting.",
    "Render of two three-storey timber-clad accommodation blocks with bicycle shelters in front.":
      "Render van twee drielaagse woonblokken met houten gevelbekleding en fietsenstallingen ervoor.",
    "Dimensioned floor plan of one housing unit measuring 10.6 by 6.0 metres, with four beds, a shared living and dining area, kitchen and bathroom.":
      "Gemaatvoerde plattegrond van één wooneenheid van 10,6 bij 6,0 meter, met vier slaapplekken, een gedeelde woon- en eetruimte, keuken en sanitair.",
    "Section through three stacked storeys of housing units showing floors, foundation and furnishing.":
      "Doorsnede over drie gestapelde bouwlagen met wooneenheden, met vloeren, fundering en inrichting.",
    "Render of the communal courtyard between the accommodation blocks, with a playground, benches and paths.":
      "Render van de gemeenschappelijke binnenruimte tussen de woonblokken, met speelplek, banken en paden.",
    "Render of a gallery-access block with an external staircase and a fenced play area in front.":
      "Render van een galerijblok met een buitentrap en een omheind speelveld ervoor.",
    "Site layout plan showing construction phases, driving routes, site huts, waste containers and emergency assembly points.":
      "Bouwplaatsinrichtingstekening met bouwfases, rijroutes, keten, afvalcontainers en verzamelplaatsen bij nood."
  };

  /* ---------- meta ---------- */

  var META_NL = {
    description:
      "Portfolio van Brian Fleuren, derdejaarsstudent Bouwkunde aan Avans Hogeschool: bouwplaatservaring bij een hoofdaannemer, BIM-modelleren in Revit, variantenstudies, bouwfysica en detaillering.",
    ogDescription:
      "Derdejaarsstudent Bouwkunde aan Avans. Vier weken op een ziekenhuisbouwplaats bij een hoofdaannemer, en ontwerpwerk van eerste schets tot uitvoeringsdetail."
  };

  /* =========================================================
     Motor
     ========================================================= */

  var debug = false;
  try { debug = window.localStorage.getItem("bf-lang-debug") === "1"; } catch (e) {}

  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, SVG: 1, NOSCRIPT: 1 };
  var nodes = null;      // [{node, en, lead, trail}]
  var attrNodes = null;  // [{el, attr, en}]

  function collect() {
    nodes = [];
    attrNodes = [];

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        for (var p = n.parentNode; p && p !== document.body; p = p.parentNode) {
          if (SKIP_TAGS[p.nodeName]) return NodeFilter.FILTER_REJECT;
        }
        return n.nodeValue && n.nodeValue.trim()
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    var n, missing = [];
    while ((n = walker.nextNode())) {
      var raw = n.nodeValue;
      var key = raw.replace(/\s+/g, " ").trim();
      if (!NL[key]) {
        if (debug && key.length > 2 && !/^[\d\s·×—–\-|/#.,]+$/.test(key)) missing.push(key);
        continue;
      }
      nodes.push({
        node: n,
        en: key,
        lead: /^\s/.test(raw) ? " " : "",
        trail: /\s$/.test(raw) ? " " : ""
      });
    }

    ["alt", "aria-label", "title"].forEach(function (attr) {
      Array.prototype.forEach.call(document.querySelectorAll("[" + attr + "]"), function (el) {
        if (el.closest("svg")) return;
        var v = (el.getAttribute(attr) || "").trim();
        if (NL_ATTR[v]) attrNodes.push({ el: el, attr: attr, en: v });
      });
    });

    if (debug && missing.length) {
      console.warn("[i18n] geen Nederlandse vertaling voor " + missing.length + " zin(nen):", missing);
    }
  }

  function render(lang) {
    if (!nodes) collect();
    var nl = lang === "nl";

    nodes.forEach(function (item) {
      item.node.nodeValue = item.lead + (nl ? NL[item.en] : item.en) + item.trail;
    });
    attrNodes.forEach(function (item) {
      item.el.setAttribute(item.attr, nl ? NL_ATTR[item.en] : item.en);
    });

    document.documentElement.lang = lang;
    document.title = nl ? NL["Brian Fleuren — Building Engineering Portfolio"]
                        : "Brian Fleuren — Building Engineering Portfolio";

    var desc = document.querySelector('meta[name="description"]');
    var ogd = document.querySelector('meta[property="og:description"]');
    if (desc) {
      if (!desc.dataset.en) desc.dataset.en = desc.content;
      desc.content = nl ? META_NL.description : desc.dataset.en;
    }
    if (ogd) {
      if (!ogd.dataset.en) ogd.dataset.en = ogd.content;
      ogd.content = nl ? META_NL.ogDescription : ogd.dataset.en;
    }

    // LinkedIn toont de badge in de taal van data-locale
    var badge = document.querySelector(".LI-profile-badge");
    if (badge) badge.setAttribute("data-locale", nl ? "nl_NL" : "en_US");

    Array.prototype.forEach.call(document.querySelectorAll("[data-lang-btn]"), function (btn) {
      var on = btn.dataset.langBtn === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-on", on);
    });
  }

  function set(lang) {
    render(lang);
    try { window.localStorage.setItem(STORE, lang); } catch (e) {}
  }

  var saved = null;
  try { saved = window.localStorage.getItem(STORE); } catch (e) {}
  render(saved === "en" || saved === "nl" ? saved : DEFAULT);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang-btn]");
    if (btn) set(btn.dataset.langBtn);
  });

  // zodat andere scripts kunnen weten welke taal actief is
  window.bfLang = { set: set, current: function () { return document.documentElement.lang; } };
})();

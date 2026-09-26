# Fruitypedia Master Image Generation Prompt Sheet & Visual Style Guide

This prompt sheet is engineered directly from the **Phase 1.5 Golden Master Blueberry, Apple & Mango reference imagery**. It contains copy-paste ready prompts for all 40 pending fruit monographs in the catalog to generate uniform, high-contrast, fine-dining editorial imagery.

---

## 1. The Golden Master Visual Rules

All Fruitypedia hero images follow a strict **botanical editorial formula** to guarantee that the UI overlays, animations, and typography render with optimal readability and zero visual clutter.

```
+-------------------------------------------------------------+
|                                                             |
|  [LEFT 60%: CLEAN NEGATIVE SPACE]     [RIGHT 40%: SUBJECT]  |
|                                                             |
|  - Deep matte black (#09090b)         - Whole fresh fruit   |
|  - Minimal subtle dark slate texture  - Sliced half/wedge   |
|  - No fruit, no props, no text        - Leaves / stems      |
|  - Space reserved for:                - Wet dark slate slab |
|    * Script nickname                  - Chiaroscuro rim     |
|    * Cormorant Garamond Title           lighting & drops    |
|    * Scientific identity badge                              |
|    * Hero bio & benefit chips                               |
|                                                             |
+-------------------------------------------------------------+
```

### Key Principles:
1. **Right-Weighted Framing (Rule of Thirds):** The fruit subject MUST be arranged on the **right 35%–40%** of the frame. The left 60% MUST remain deep, moody, dark negative space so editorial typography in `FruitHero.astro` remains crisp and legible.
2. **Duo Presentation:** Arrange **one whole fruit** showing exterior skin/bloom/texture alongside **one cleanly sliced half or cross-section** revealing interior flesh, seeds, pulp, and hydration.
3. **Plinth & Surface:** A wet, dark, textured charcoal slate slab/cutting board in the lower foreground. No white plates, plastic wrap, cutting knives, or kitchen clutter.
4. **Lighting:** Cinematic chiaroscuro studio lighting. Soft directional light from upper left/top with rim highlights outlining the silhouette and specular glints on natural water droplets.
5. **Color & Backdrop:** Deep black void background (`#000000` / `#09090b`) with a faint ambient glow tailored to the fruit's primary hue.
6. **Recommended Aspect Ratio:** `--ar 16:9` (widescreen landscape) for full-bleed hero banners and macro parallax breaks.

---

## 2. File Placement & Naming Convention

Save your generated and reviewed images directly into the corresponding public folders:

- **Hero Image:** `public/images/fruits/<slug>/hero.jpg` (1920×1080 or 2560×1440, JPG or WebP, ~500KB–800KB)
- **Macro-Break Image:** `public/images/fruits/<slug>/macro-break.jpg` (1920×1080, JPG or WebP)

---

## 3. Master Prompt Catalog (All 40 Pending Fruits)

---

### 1. Kiwi (Macro-Break)
*Note: Hero image already generated and active.*
- **File:** `public/images/fruits/kiwi/macro-break.jpg`
- **Prompt:**
> Extreme macro food science photography of sliced green kiwi fruit, ultra close-up focusing on translucent emerald parenchymal cells, tiny jet-black seeds embedded in radiating pale rays, fine water droplets glistening on fruit pulp, dark textured slate foreground, shot on 100mm macro lens, f/2.8, shallow depth of field, hyper-detailed crystalline cellular texture. --ar 16:9

---

### 2. Avocado (*Persea americana*)
- **Category:** Berry / Subtropical
- **Hero File:** `public/images/fruits/avocado/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh ripe Hass avocado, right-weighted composition with the fruit positioned on the right third of the frame, leaving clean deep matte dark negative space on the left. Arrangement shows one whole avocado with dark pebbled leathery skin alongside one half sliced lengthwise revealing buttery pale green-yellow flesh, smooth circular brown pit, and fresh green laurel leaf, resting on a wet dark charcoal slate slab. Dramatic chiaroscuro studio lighting, warm rim highlights on the buttery contours, deep black background, Hasselblad H6D-100c, 85mm, f/4.0, ultra-photorealistic. --ar 16:9
- **Macro File:** `public/images/fruits/avocado/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced ripe avocado, focusing on the velvety buttery oleic lipid matrix, smooth gradient from silky lime-green flesh near the rind to rich creamy ivory butter, delicate natural oil sheen, wet dark slate backdrop, 100mm macro lens, f/2.8, hyper-detailed lipid emulsion texture. --ar 16:9

---

### 3. Dragonfruit / Pitaya (*Selenicereus undatus*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/dragonfruit/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of vibrant red dragonfruit (pitaya), right-weighted composition positioned on the right third of the frame, leaving clean deep black negative space on the left. Featuring one whole fruit with fiery magenta skin and yellow-green tipped bracts, alongside a cleanly sliced half displaying crystalline snow-white pulp speckled with thousands of tiny edible black seeds, resting on a dark rustic slate slab with water droplets. Cinematic studio chiaroscuro lighting, neon-vivid natural contrast, deep black backdrop, 85mm lens, f/4.0, 8k. --ar 16:9
- **Macro File:** `public/images/fruits/dragonfruit/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro food photography of white dragonfruit flesh, ultra close-up of translucent mucilaginous cellular pulp studded with jet-black teardrop seeds, liquid light refraction, glistening micro-droplets of juice, dark slate background, shallow depth of field, 100mm macro, f/2.8. --ar 16:9

---

### 4. Fig (*Ficus carica*)
- **Category:** Tropical / Mediterranean
- **Hero File:** `public/images/fruits/fig/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe Black Mission figs, right-weighted composition with the figs on the right third of the frame, leaving clean matte dark negative space on the left. Arrangement displays one whole purple-black fig with subtle dusty bloom alongside one gently torn fig revealing a lush crimson-red honeyed interior glistening with natural syrupy nectar and seeds, resting on a dark textured slate slab with a fresh fig leaf. Moody chiaroscuro studio lighting, warm specular highlights, deep dark background, 85mm lens, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/fig/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of an opened ripe fig, focusing on the intricate syconium interior showing hundreds of glistening crimson-red internal florets, dripping droplet of golden natural honey nectar, tiny crunchy seeds, dark slate background, 100mm macro lens, f/2.8, crystalline botanical detail. --ar 16:9

---

### 5. Guava (*Psidium guajava*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/guava/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh tropical pink guava, right-weighted composition positioned on the right third of the frame, leaving clean deep black negative space on the left. Displays one whole pale green-yellow guava with a fresh leaf alongside one cross-section halved guava displaying vibrant salmon-pink seeded pulp, resting on a dark textured slate slab with subtle water droplets. Dramatic directional chiaroscuro lighting, soft rim light, deep dark backdrop, 85mm lens, f/4.0, ultra-photorealistic. --ar 16:9
- **Macro File:** `public/images/fruits/guava/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced pink guava, focusing on the vibrant salmon-pink pericarp cells and seed core, glistening droplets of ascorbic-acid-rich juice, translucent flesh texture, dark slate background, 100mm macro lens, f/2.8. --ar 16:9

---

### 6. Papaya (*Carica papaya*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/papaya/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe tropical papaya, right-weighted composition on the right third of the frame, leaving clean matte dark negative space on the left. Shows one whole golden-green papaya alongside one half sliced lengthwise revealing rich salmon-orange flesh and a central cavity filled with glistening caviar-like black gelatinous seeds, resting on dark charcoal slate with fresh droplets. Cinematic chiaroscuro lighting, deep black background, 85mm lens, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/papaya/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of papaya seed cavity, focusing on jet-black gelatinous spherical seeds coated in glistening mucilage resting against succulent carotenoid-orange pulp, glistening liquid light reflections, 100mm macro, f/2.8. --ar 16:9

---

### 7. Lychee (*Litchi chinensis*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/lychee/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh lychees, right-weighted composition positioned on the right third of the frame, leaving clean deep black negative space on the left. Features a cluster of bumpy rose-red pebbled fruits with dark green leaves, one fruit partially peeled revealing a glistening translucent pearl-white aril and dark seed beneath, resting on wet dark slate. Moody chiaroscuro studio lighting, rim light highlights, 85mm lens, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/lychee/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of peeled lychee fruit, focusing on the wet glassy translucent pearl-white aril pulp, glistening cellular vesicles brimming with floral juice, dark slate background, shallow depth of field, 100mm macro lens, f/2.8. --ar 16:9

---

### 8. Jackfruit (*Artocarpus heterophyllus*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/jackfruit/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of mature jackfruit, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Arrangement shows a section of green spiky hexagonal rind alongside several plump, golden-yellow succulent edible pods (arils) separated from white rag fibers, resting on a dark textured charcoal slate slab with dew drops. Chiaroscuro studio lighting, warm amber glow, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/jackfruit/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of a ripe jackfruit bulb, focusing on the dense fibrous golden-yellow carotenoid meat, glistening droplets of sweet tropical nectar, delicate cellular fiber strands, dark slate, 100mm macro, f/2.8. --ar 16:9

---

### 9. Jamun / Java Plum (*Syzygium cumini*)
- **Category:** Berry / Tropical
- **Hero File:** `public/images/fruits/jamun/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh Indian Jamun (black plum), right-weighted composition on the right third of the frame, leaving clean deep matte dark negative space on the left. Displays a cluster of glossy deep midnight-purple oblong berries with slender leaves, one sliced open showing vibrant magenta-violet flesh and pale seed, resting on a dark slate slab with glistening water beads. Dramatic chiaroscuro studio lighting, purple rim highlights, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/jamun/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced jamun berry, focusing on the deep anthocyanin purple-violet stained flesh, glistening astringent juice meniscus, taut reflective skin edge, dark slate background, 100mm macro lens, f/2.8. --ar 16:9

---

### 10. Custard Apple / Sitaphal (*Annona squamosa*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/custard-apple/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe Custard Apple (Sugar Apple / Sitaphal), right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Shows one whole knobby pale-green segmented fruit alongside one broken open naturally revealing rich creamy ivory-white custard pulp segments surrounding glossy black seeds, resting on dark charcoal slate with dew drops. Chiaroscuro studio lighting, 85mm lens, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/custard-apple/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of custard apple interior, focusing on velvety granular ivory-white custard pulp glistening with natural sugars, soft melting texture, jet-black seed contrast, dark slate, 100mm macro lens, f/2.8. --ar 16:9

---

### 11. Amla / Indian Gooseberry (*Phyllanthus emblica*)
- **Category:** Berry
- **Hero File:** `public/images/fruits/amla/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh green Amla (Indian gooseberry), right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Arrangement shows translucent pale-green spherical berries with six subtle vertical segment lines and delicate feathery leaves, one halved showing pale crisp interior and stone, resting on wet dark slate. Clean chiaroscuro lighting, green backlight, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/amla/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced amla fruit, focusing on translucent lime-green cellular pulp illuminated from behind, micro-droplets of vitamin-C rich juice, fine crystalline texture, dark slate, 100mm macro, f/2.8. --ar 16:9

---

### 12. Pineapple (*Ananas comosus*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/pineapple/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe golden pineapple, right-weighted composition positioned on the right third of the frame, leaving clean matte dark negative space on the left. Shows one whole pineapple with textured diamond rind and spiky crown alongside a thick golden circular slice showing fibrous radial eyes, resting on a dark slate slab with moisture droplets. Dramatic chiaroscuro lighting, golden rim accents, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/pineapple/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced pineapple flesh, focusing on glistening fibrous golden-yellow pulp cells, droplets of bromelain-rich juice, crystalline sugar vacuoles, dark slate, 100mm macro lens, f/2.8. --ar 16:9

---

### 13. Grape (*Vitis vinifera*)
- **Category:** Berry
- **Hero File:** `public/images/fruits/grape/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of dark Concord grapes, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. A luscious cluster of frosted midnight-blue grapes with dusty silvery waxy bloom and curly vine tendril, one grape sliced in half revealing translucent emerald pulp and tiny seeds, resting on dark charcoal slate with dew drops. Chiaroscuro studio lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/grape/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of a single deep purple grape, focusing on microscopic frosted wax platelets (pruinescence) on taut skin, glistening spherical water droplet refracting light, dark slate, 100mm macro, f/2.8. --ar 16:9

---

### 14. Lemon (*Citrus limon*)
- **Category:** Citrus
- **Hero File:** `public/images/fruits/lemon/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh lemons, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Arrangement shows one whole glossy bright yellow lemon with dark green citrus leaf alongside a clean cross-section halve displaying radiant radiating juice vesicles and pale pith, resting on wet dark slate. Chiaroscuro lighting, specular highlights, 85mm lens, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/lemon/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced lemon, backlit to illuminate hundreds of translucent spindle-shaped juice sacs filled with citric acid, glowing citrus yellow matrix, fine droplets, 100mm macro lens, f/2.8. --ar 16:9

---

### 15. Cherry (*Prunus avium*)
- **Category:** Stone Fruit
- **Hero File:** `public/images/fruits/cherry/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe dark red cherries, right-weighted composition on the right third of the frame, leaving clean deep matte dark negative space on the left. A pair of deep mahogany-red cherries with fresh green stems, one sliced cleanly in half showing dark ruby meat and tan stone, resting on wet dark slate with glistening water beads. Dramatic chiaroscuro studio lighting, mirror-like skin reflections, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/cherry/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced dark red cherry, focusing on glistening ruby-crimson anthocyanin pulp fibers, natural juice droplets clinging to the cut edge, dark slate, 100mm macro lens, f/2.8. --ar 16:9

---

### 16. Coconut (*Cocos nucifera*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/coconut/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh mature coconut, right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Displays a fibrous brown textured shell cracked open into clean halves revealing thick, pure snow-white solid endosperm meat with subtle splashes of fresh coconut water, resting on dark charcoal slate. Chiaroscuro lighting, crisp white contrast, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/coconut/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of fresh white coconut meat, focusing on the dense fibrous cellular lattice of pure white endosperm, microscopic droplets of natural lauric oil on the surface, dark slate, 100mm macro, f/2.8. --ar 16:9

---

### 17. Plum (*Prunus domestica*)
- **Category:** Stone Fruit
- **Hero File:** `public/images/fruits/plum/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe Italian plums, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Shows one whole deep indigo-purple plum with frosted silvery bloom alongside one halved plum revealing sweet golden-amber translucent flesh and central pit, resting on wet dark slate. Moody chiaroscuro studio lighting, warm amber glow, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/plum/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced plum, focusing on the vivid contrast between powdery frosted purple skin and glowing translucent golden-amber flesh fibers, glistening juice droplet, 100mm macro lens, f/2.8. --ar 16:9

---

### 18. Apricot (*Prunus armeniaca*)
- **Category:** Stone Fruit
- **Hero File:** `public/images/fruits/apricot/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh ripe apricots, right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Arrangement shows one whole velvet golden-orange apricot with red blush alongside one split half showing warm saffron-orange interior flesh and smooth almond-like pit, resting on dark textured slate. Warm directional chiaroscuro lighting, 85mm lens, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/apricot/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of apricot skin and flesh, focusing on delicate velvety pubescent fuzz along the golden-orange skin edge, soft melting carotenoid parenchymal cells beneath, 100mm macro, f/2.8. --ar 16:9

---

### 19. Passionfruit (*Passiflora edulis*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/passionfruit/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe purple passionfruit, right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Shows one whole wrinkled purple globe alongside one cleanly sliced half overflowing with glossy golden-orange gelatinous pulp and crunchy dark seeds, resting on dark charcoal slate with water beads. Chiaroscuro studio lighting, vibrant orange contrast, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/passionfruit/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of passionfruit interior, focusing on translucent golden-yellow gelatinous aril sacs enclosing textured black seeds, glistening liquid viscosity and bubbles, dark slate, 100mm macro, f/2.8. --ar 16:9

---

### 20. Date (*Phoenix dactylifera*)
- **Category:** Stone Fruit
- **Hero File:** `public/images/fruits/date/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of plump Medjool dates, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Shows a cluster of glossy wrinkled amber-brown dates on a palm twig, one torn open revealing soft caramel-textured fibrous interior and slender pointed pit, resting on dark slate. Warm chiaroscuro lighting, rich caramel highlights, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/date/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of torn Medjool date, focusing on soft fibrous translucent caramel flesh, delicate sugar crystal micro-bloom, rich golden-amber tones, dark slate background, 100mm macro lens, f/2.8. --ar 16:9

---

### 21. Blackberry (*Rubus fruticosus*)
- **Category:** Berry
- **Hero File:** `public/images/fruits/blackberry/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of wild blackberries, right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. A cluster of glossy jet-black aggregate drupelets with deep crimson undertones and a serrated green bramble leaf, one drupelet cluster sliced showing juice, resting on wet dark slate with dew drops. Chiaroscuro studio lighting, specular glints on each drupelet, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/blackberry/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of blackberry aggregate fruit, focusing on individual plump spherical black drupelets, microscopic pistil hairs (styles), glistening liquid meniscus between drupelets, dark slate, 100mm macro, f/2.8. --ar 16:9

---

### 22. Raspberry (*Rubus idaeus*)
- **Category:** Berry
- **Hero File:** `public/images/fruits/raspberry/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh red raspberries, right-weighted composition on the right third of the frame, leaving clean deep matte dark negative space on the left. A cluster of thimble-shaped scarlet-red raspberries with hollow core and green mint-leaf accent, resting on a dark rustic charcoal slate slab with water droplets. Dramatic chiaroscuro studio lighting, bright ruby luminescence, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/raspberry/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of red raspberry drupelets, focusing on velvety microscopic hairs on glowing translucent crimson spheres, cellular light scattering, glistening moisture, 100mm macro lens, f/2.8. --ar 16:9

---

### 23. Sapodilla / Chikoo (*Manilkara zapota*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/sapodilla/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe Sapodilla (Chikoo), right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Displays one whole oval fruit with cinnamon-brown scurfy skin and a green leaf alongside one cleanly halved fruit showing granular honey-brown translucent flesh and glossy black seeds, resting on dark charcoal slate. Warm chiaroscuro lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/sapodilla/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced sapodilla, focusing on the fine brown sugar crystalline texture of the translucent amber flesh, glistening droplets of malt-sweet juice, dark slate, 100mm macro lens, f/2.8. --ar 16:9

---

### 24. Bael / Wood Apple (*Aegle marmelos*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/bael/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of Indian Bael fruit (Wood Apple), right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Shows one whole smooth hard grey-green shell alongside one cracked open shell revealing dense golden-amber aromatic resinous pulp studded with hairy seeds, resting on dark slate with dew drops. Chiaroscuro studio lighting, warm golden glow, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/bael/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of bael fruit interior, focusing on viscous sticky golden-orange mucilage fibers, translucent resin pockets, aromatic botanical texture, dark slate, 100mm macro lens, f/2.8. --ar 16:9

---

### 25. Ber / Indian Jujube (*Ziziphus mauritiana*)
- **Category:** Stone Fruit
- **Hero File:** `public/images/fruits/ber/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh Indian Ber (Jujube), right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Displays a cluster of glossy golden-green and bronze-mottled oval fruits with green leaves, one sliced open showing crisp apple-like ivory flesh and pointed central stone, resting on wet dark slate. Chiaroscuro lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/ber/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced ber fruit, focusing on crisp porous white parenchymal cell fracture, fine glistening surface moisture, glossy yellow-green skin edge, dark slate, 100mm macro, f/2.8. --ar 16:9

---

### 26. Durian (*Durio zibethinus*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/durian/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of King Durian (Musang King), right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. A cracked open section of spiky thorn-covered husk displaying two plump, pillowy golden custard-yellow aril pods resting in natural carpel chambers, on a dark slate slab. Dramatic chiaroscuro studio lighting, warm buttery rim light, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/durian/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of ripe durian custard aril, focusing on the velvety wrinkled golden-yellow skin membrane, dense creamy butter-like lipid texture, subtle glistening fatty sheen, 100mm macro, f/2.8. --ar 16:9

---

### 27. Mangosteen (*Garcinia mangostana*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/mangosteen/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of Queen Mangosteen, right-weighted composition on the right third of the frame, leaving clean deep matte dark negative space on the left. Shows one whole round deep-purple fruit with thick green calyx alongside one fruit with top rind lifted off revealing immaculate segmented snow-white garlic-shaped arils, resting on dark charcoal slate with dew drops. Chiaroscuro lighting, purple-white contrast, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/mangosteen/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of mangosteen segments, focusing on glistening snow-white cellular vesicles brimming with sweet-tart juice, contrasted against thick royal-purple pericarp rim, 100mm macro, f/2.8. --ar 16:9

---

### 28. Starfruit / Carambola (*Averrhoa carambola*)
- **Category:** Tropical
- **Hero File:** `public/images/fruits/starfruit/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe yellow starfruit (carambola), right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Shows one whole five-angled ribbed fruit alongside clean cross-section 5-pointed star slices showing translucent amber-yellow juicy flesh, resting on wet dark slate with water drops. Chiaroscuro studio lighting, backlit translucency, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/starfruit/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of a star-shaped carambola slice, illuminated from behind to highlight translucent chartreuse parenchymal cells, delicate vascular veins, crystalline edge, 100mm macro, f/2.8. --ar 16:9

---

### 29. Pear (*Pyrus communis*)
- **Category:** Pome
- **Hero File:** `public/images/fruits/pear/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe Bosc / Bartlett pear, right-weighted composition on the right third of the frame, leaving clean deep matte dark negative space on the left. Displays one whole golden-russet teardrop pear with stem and leaf alongside one half sliced lengthwise showing melting ivory flesh and starry seed core, resting on dark charcoal slate with moisture droplets. Chiaroscuro lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/pear/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced pear, focusing on glistening ivory hypanthium flesh, tiny gritty sclereid stone cells embedded in juicy melting texture, clear juice bead, dark slate, 100mm macro, f/2.8. --ar 16:9

---

### 30. Lime (*Citrus aurantiifolia*)
- **Category:** Citrus
- **Hero File:** `public/images/fruits/lime/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh Key limes, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Shows one whole glossy dark green lime with citrus leaves alongside sliced lime halves and a wedge displaying radiant pale green juice vesicles, resting on wet dark slate with fine spray droplets. High-contrast chiaroscuro lighting, emerald rim highlights, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/lime/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced lime wedge, backlit to reveal hundreds of translucent emerald-green spindle-shaped juice sacs glistening with tart citric acid, oil glands along rind, 100mm macro, f/2.8. --ar 16:9

---

### 31. Grapefruit (*Citrus paradisi*)
- **Category:** Citrus
- **Hero File:** `public/images/fruits/grapefruit/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of Ruby Red grapefruit, right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Shows one whole yellow-orange globe with pink blush alongside a cleanly halved fruit showing vibrant crimson-pink pinwheel segments packed with juicy vesicles, resting on wet dark charcoal slate. Dramatic chiaroscuro studio lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/grapefruit/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of halved ruby red grapefruit, focusing on glistening ruby-crimson juice vesicles bursting with liquid, white segmental membranes, fine water beads, 100mm macro lens, f/2.8. --ar 16:9

---

### 32. Mandarin (*Citrus reticulata*)
- **Category:** Citrus
- **Hero File:** `public/images/fruits/mandarin/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe mandarin orange, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Features one whole bright orange mandarin with green stem and leaves alongside one partially peeled fruit showing loose white albedo webbing and separated crescent segments, resting on dark slate with dew drops. Chiaroscuro studio lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/mandarin/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of mandarin orange segment, focusing on translucent delicate membrane displaying individual plump orange juice vesicles within, white pith lacing, 100mm macro, f/2.8. --ar 16:9

---

### 33. Pomelo (*Citrus maxima*)
- **Category:** Citrus
- **Hero File:** `public/images/fruits/pomelo/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of giant pomelo (Citrus maxima), right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Displays a pale green-yellow pomelo with thick white spongy pith sliced open, revealing immense crunchy rose-pink juice vesicles separated from the membrane, resting on dark charcoal slate. Chiaroscuro lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/pomelo/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of individual pomelo juice sacs, focusing on colossal translucent spindle-shaped pink vesicles, crisp non-leaking texture, glistening surface moisture, 100mm macro, f/2.8. --ar 16:9

---

### 34. Cantaloupe (*Cucumis melo var. cantalupensis*)
- **Category:** Melon
- **Hero File:** `public/images/fruits/cantaloupe/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe cantaloupe (muskmelon), right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Arrangement shows a round melon with textured tan corky netting alongside a thick sliced crescent wedge showing rich salmon-orange juicy meat and seed cavity, resting on dark slate with water droplets. Warm chiaroscuro lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/cantaloupe/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced cantaloupe, focusing on glistening salmon-orange melon flesh, delicate cellular fiber grain, pooling droplets of sweet hydration water, dark slate, 100mm macro lens, f/2.8. --ar 16:9

---

### 35. Honeydew (*Cucumis melo var. inodorus*)
- **Category:** Melon
- **Hero File:** `public/images/fruits/honeydew/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe Honeydew melon, right-weighted composition on the right third of the frame, leaving clean deep matte dark negative space on the left. Shows one whole smooth pale yellow-cream melon alongside a sliced half displaying cool shimmering pale lime-green succulent flesh and central seed cavity, resting on wet dark slate. Soft chiaroscuro studio lighting, cool emerald glow, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/honeydew/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of honeydew flesh, focusing on succulent translucent pale-green cellular meat saturated with 90 percent biological water, fine crystalline light scattering, 100mm macro, f/2.8. --ar 16:9

---

### 36. Galia Melon (*Cucumis melo L.*)
- **Category:** Melon
- **Hero File:** `public/images/fruits/galia/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of Galia melon, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Displays one whole golden-yellow melon with intricate fine white net webbing alongside a sliced wedge revealing pale green-white melting interior flesh, resting on dark charcoal slate with dew drops. Chiaroscuro studio lighting, 85mm lens, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/galia/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of Galia melon, focusing on the intricate corky lace netting of the golden rind transitioning into melting pale-green translucent sweet flesh, micro juice droplets, 100mm macro, f/2.8. --ar 16:9

---

### 37. Winter Melon (*Benincasa hispida*)
- **Category:** Melon
- **Hero File:** `public/images/fruits/winter-melon/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of Winter Melon (Ash Gourd), right-weighted composition on the right third of the frame, leaving clean deep matte dark negative space on the left. Shows a cylindrical green gourd with characteristic frosty white chalky wax bloom alongside a thick sliced cross-section wheel revealing snowy-white sponge flesh and flat seeds, resting on wet dark slate. Chiaroscuro studio lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/winter-melon/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced winter melon, focusing on snowy-white porous spongy parenchymal tissue holding high-purity biological water, delicate glistening cellular cell walls, 100mm macro, f/2.8. --ar 16:9

---

### 38. Quince (*Cydonia oblonga*)
- **Category:** Pome
- **Hero File:** `public/images/fruits/quince/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe golden Quince, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. Shows one whole pear-shaped golden-yellow quince with subtle velvety grey fuzz and dark green leaves alongside one halved fruit revealing dense cream-colored interior and seed core, resting on dark charcoal slate with water drops. Chiaroscuro studio lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/quince/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced quince, focusing on dense granular hypanthium flesh with microscopic sclereid stone cells, velvety fuzz on golden skin edge, 100mm macro lens, f/2.8. --ar 16:9

---

### 39. Asian Pear (*Pyrus pyrifolia*)
- **Category:** Pome
- **Hero File:** `public/images/fruits/asian-pear/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of Asian Pear (Nashi), right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Arrangement shows one whole spherical apple-shaped russet-tan pear with pale lenticel speckles and leaf alongside a clean cross-section half showing crystalline, water-saturated snow-white flesh and starry core, resting on wet dark slate. Chiaroscuro lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/asian-pear/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of Asian pear cross-section, focusing on crystalline cellular fracture overflowing with clear juice, translucent white cell matrix, reflective moisture, 100mm macro, f/2.8. --ar 16:9

---

### 40. Loquat (*Rhaphiolepis bibas*)
- **Category:** Pome
- **Hero File:** `public/images/fruits/loquat/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of fresh Loquats, right-weighted composition on the right third of the frame, leaving clean deep black negative space on the left. A cluster of small golden-apricot oval fruits with serrated leathery leaves, one peeled in half showing juicy golden-amber flesh and two smooth mahogany-brown seeds, resting on dark slate with water beads. Warm chiaroscuro studio lighting, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/loquat/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of peeled loquat, focusing on delicate peeled skin edge, radiant amber-gold juicy pulp cells, glossy brown seed facet, dark slate, 100mm macro lens, f/2.8. --ar 16:9

---

### 41. Nectarine (*Prunus persica var. nucipersica*)
- **Category:** Stone Fruit
- **Hero File:** `public/images/fruits/nectarine/hero.jpg`
- **Hero Prompt:**
> Commercial editorial food photography of ripe yellow nectarine, right-weighted composition on the right third of the frame, leaving clean deep dark negative space on the left. Displays one whole ultra-smooth fuzz-free nectarine with scarlet-crimson and gold marbled skin alongside one halved fruit showing dense succulent yellow flesh and grooved central stone, resting on wet dark charcoal slate. Dramatic chiaroscuro studio lighting, mirror sheen, 85mm, f/4.0. --ar 16:9
- **Macro File:** `public/images/fruits/nectarine/macro-break.jpg`
- **Macro Prompt:**
> Extreme macro photography of sliced nectarine, focusing on taut smooth red-gold skin boundary, dense non-mealy yellow pulp fibers glistening with sweet juice, dark slate, 100mm macro, f/2.8. --ar 16:9

---

## 4. Quick Generation Checklist for Midjourney / DALL-E 3 / Flux / Imagen

When copying into your image generator:
- **Midjourney v6.1:** Append `--ar 16:9 --style raw --v 6.1`
- **DALL-E 3:** Set aspect ratio to `1792×1024` (widescreen)
- **Flux.1 [dev]:** Set aspect ratio to `16:9` (1344×768 or 1536×864)
- **Imagen 3:** Set aspect ratio to `16:9`

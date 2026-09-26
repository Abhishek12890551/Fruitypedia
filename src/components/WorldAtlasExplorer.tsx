import React, { useState, useMemo } from "react";
import type { Fruit } from "@/types";
import { OriginMap } from "./OriginMap";

interface WorldAtlasExplorerProps {
  allFruits: Fruit[];
}

export interface ContinentalBiome {
  id: string;
  name: string;
  shortLabel: string;
  icon: string;
  description: string;
  fruitSlugs: string[];
}

export const CONTINENTAL_BIOMES: ContinentalBiome[] = [
  {
    id: "all",
    name: "All Continental Biomes",
    shortLabel: "All Continents",
    icon: "🌍",
    description: "Global geographic provenance and evolutionary birthplaces across all production monographs.",
    fruitSlugs: [
      "apple",
      "banana",
      "blueberry",
      "mango",
      "orange",
      "peach",
      "strawberry",
      "watermelon",
      "pomegranate",
      "avocado",
      "fig",
      "kiwi",
      "dragonfruit",
      "guava",
      "papaya",
      "lychee",
      "jackfruit",
      "jamun",
      "custard-apple",
      "amla",
      "pineapple",
      "grape",
      "lemon",
      "cherry",
      "coconut",
      "plum",
      "apricot",
      "passionfruit",
      "date",
      "blackberry",
      "raspberry",
      "sapodilla",
      "bael",
      "ber",
      "durian",
      "mangosteen",
      "starfruit",
      "pear",
      "lime",
      "grapefruit",
      "mandarin",
      "pomelo",
      "cantaloupe",
      "honeydew",
      "galia",
      "winter-melon",
      "quince",
      "asian-pear",
      "loquat",
      "nectarine",
    ],
  },
  {
    id: "central-asia",
    name: "Central Asia & The Tian Shan Corridor",
    shortLabel: "Central Asia",
    icon: "🏔️",
    description: "Wild mountain apple forests (Malus sieversii) and ancient pomegranate oases along Silk Road passes.",
    fruitSlugs: ["apple", "pomegranate", "apricot", "pear", "plum", "quince"],
  },
  {
    id: "east-asia",
    name: "East Asia & The Yangtze River Valley",
    shortLabel: "East Asia",
    icon: "🎋",
    description: "Neolithic Chinese river basins where stone fruits and wild kiwifruit vines were cultivated.",
    fruitSlugs: ["peach", "orange", "kiwi", "plum", "mandarin", "asian-pear", "loquat", "nectarine"],
  },
  {
    id: "south-asia",
    name: "South Asia & The Subtropical Foothills",
    shortLabel: "South Asia",
    icon: "🛕",
    description: "Vedic river floodplains and dense subtropical rainforest canopies of the Indian subcontinent.",
    fruitSlugs: [
      "mango",
      "guava",
      "papaya",
      "lychee",
      "jackfruit",
      "jamun",
      "custard-apple",
      "amla",
      "lemon",
      "sapodilla",
      "bael",
      "ber",
      "starfruit",
      "winter-melon",
    ],
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia & Indo-Malayan Archipelago",
    shortLabel: "Southeast Asia",
    icon: "🌴",
    description: "Equatorial rainforest canopies and volcanic islands, home to wild seeded bananas, citrus, coconuts, and tropical pitayas.",
    fruitSlugs: [
      "banana",
      "orange",
      "dragonfruit",
      "coconut",
      "durian",
      "mangosteen",
      "starfruit",
      "lime",
      "pomelo",
    ],
  },
  {
    id: "north-america",
    name: "North America & Boreal Acidic Heath",
    shortLabel: "North America",
    icon: "🌲",
    description: "Acidic, glaciated peatlands, pine barrens, and native Algonquian foraging territories.",
    fruitSlugs: ["blueberry", "strawberry", "avocado", "blackberry", "raspberry"],
  },
  {
    id: "south-america",
    name: "South America & The Pacific Coastal Valleys",
    shortLabel: "South America",
    icon: "🌋",
    description: "Chilean coastal sands, Mesoamerican volcanic highlands, and Parana river basins of ancestral cultivation.",
    fruitSlugs: ["strawberry", "avocado", "pineapple", "passionfruit", "sapodilla", "grapefruit"],
  },
  {
    id: "northeast-africa",
    name: "Northeast Africa & The Mediterranean Basin",
    shortLabel: "Northeast Africa & Levant",
    icon: "🏛️",
    description: "The Sudanese Sahel, Nile Valley, and Fertile Crescent where wild watermelons, grapes, cherries, and Neolithic figs were selected.",
    fruitSlugs: ["watermelon", "fig", "pomegranate", "grape", "cherry", "date", "plum", "cantaloupe", "honeydew", "galia"],
  },
];

export const HISTORICAL_DIASPORA_DOSSIERS: Record<
  string,
  {
    ancestralTaxon: string;
    archaeologicalEpoch: string;
    tradeCorridor: string;
    diasporaNarrative: string;
  }
> = {
  apple: {
    ancestralTaxon: "Malus sieversii (Wild Tian Shan Apple)",
    archaeologicalEpoch: "c. 8,000–4,000 BCE",
    tradeCorridor: "The Great Silk Road & Trans-Eurasian Caravan Trails",
    diasporaNarrative:
      "Originating in the wild apple forests flanking Almaty ('Father of Apples') in Kazakhstan, sweet wild apples were dispersed westward by horses and travelers along the Silk Road, cross-hybridizing with European crabapples (Malus sylvestris) to form the modern domestic dessert apple.",
  },
  banana: {
    ancestralTaxon: "Musa acuminata × Musa balbisiana",
    archaeologicalEpoch: "c. 5,000 BCE (Kuk Swamp, New Guinea)",
    tradeCorridor: "Austronesian Sea Voyaging & Trans-Indian Ocean Trade",
    diasporaNarrative:
      "Austronesian maritime voyagers transported seedless parthenocarpic banana suckers across the Indian Ocean to Madagascar and East Africa around 500 BCE. Islamic agricultural expansion later introduced bananas to the Mediterranean basin, followed by Portuguese transport to the Canary Islands and the Caribbean.",
  },
  blueberry: {
    ancestralTaxon: "Vaccinium corymbosum (Highbush Blueberry)",
    archaeologicalEpoch: "Pre-Columbian Indigenous Foraging; 1916 CE Modern Domestication",
    tradeCorridor: "Algonquian Indigenous Preserves & Modern Agronomic Breeding",
    diasporaNarrative:
      "Gathered for millennia by indigenous North American peoples who dried berries with deer meat into nutrient-dense pemmican. Blueberries resisted European commercial farming until 1916, when Elizabeth White and USDA botanist Frederick Coville unraveled their obligatory symbiotic association with mycorrhizal soil fungi in the New Jersey pine barrens.",
  },
  mango: {
    ancestralTaxon: "Mangifera indica",
    archaeologicalEpoch: "c. 2,000 BCE (Vedic Period)",
    tradeCorridor: "Buddhist Monastic Pilgrimages & Portuguese Maritime Navigation",
    diasporaNarrative:
      "Revered in ancient Sanskrit hymns and associated with Gautama Buddha, who meditated in tranquil mango groves. Buddhist monks distributed seedlings throughout East Asia by the 4th century BCE. In the 16th century, Portuguese traders introduced Indian grafted cultivars to Brazil and Mozambique.",
  },
  orange: {
    ancestralTaxon: "Citrus reticulata × Citrus maxima (Mandarin × Pummelo)",
    archaeologicalEpoch: "c. 2,500 BCE (South China & Assam)",
    tradeCorridor: "Moorish Andalusian Agronomy & Maritime Silk Routes",
    diasporaNarrative:
      "Originating in the subtropical river valleys of southern China and Northeast India, sweet oranges were systematically cultivated in Imperial Chinese orchards. Arab traders carried the fruit to Moorish Spain and Sicily in the 10th century, where sophisticated gravity-fed acequia irrigation networks established the Mediterranean citrus belt.",
  },
  peach: {
    ancestralTaxon: "Prunus persica",
    archaeologicalEpoch: "c. 6,000–4,000 BCE (Zhejiang & Yangtze Valley)",
    tradeCorridor: "Ancient Silk Road & Persian Imperial Orchards",
    diasporaNarrative:
      "Domesticated from wild stone fruit progenitors in China's lower Yangtze River basin, where peach stones have been recovered from Neolithic archaeological digs. The fruit traveled through the Silk Road to the Persian Empire, where Alexander the Great encountered it and introduced it to Greece as the 'Persian Apple' (persikon).",
  },
  strawberry: {
    ancestralTaxon: "Fragaria virginiana × Fragaria chiloensis",
    archaeologicalEpoch: "1750s CE (Botanical Garden of Versailles / Brittany)",
    tradeCorridor: "Trans-Atlantic French Agronomic Hybridization",
    diasporaNarrative:
      "Modern garden strawberries did not exist in antiquity. In 1714, French spy and military engineer Amédée-François Frézier smuggled live specimens of the giant Chilean beach strawberry (Fragaria chiloensis) to France. Accidentally planted adjacent to North American scarlet meadow strawberries (Fragaria virginiana) in Brittany, they serendipitously cross-pollinated to spawn the modern octoploid hybrid.",
  },
  watermelon: {
    ancestralTaxon: "Citrullus lanatus (Kordofan Egusi Subspecies)",
    archaeologicalEpoch: "c. 2,300 BCE (Old Kingdom Saqqara, Egypt)",
    tradeCorridor: "Nile Basin Caravans & Trans-Saharan Oasis Networks",
    diasporaNarrative:
      "Depicted in ancient Egyptian tomb frescoes as large oblong fruit served at royal funerary feasts, watermelons served as living natural canteens for trans-Saharan desert caravans. Genetic sequencing has confirmed modern watermelons descend from non-bitter white-fleshed wild melons in Kordofan, Sudan, which were traded into the Roman and Byzantine empires.",
  },
  pomegranate: {
    ancestralTaxon: "Punica granatum L.",
    archaeologicalEpoch: "c. 3,000 BCE (Early Bronze Age Jericho & Nimrud)",
    tradeCorridor: "Phoenician Maritime Routes & Royal Persian Paradises",
    diasporaNarrative:
      "Cultivated across the Fertile Crescent and Iranian plateau since the 3rd millennium BCE, carbonized pomegranate remains have been excavated at Bronze Age Jericho and Nimrud. Phoenician maritime traders introduced cultivation across North Africa to Carthage, where Moorish horticulturists later planted vast orchards in Andalusia, giving Granada its botanical name.",
  },
  avocado: {
    ancestralTaxon: "Persea americana var. drymifolia",
    archaeologicalEpoch: "c. 8,000–5,000 BCE (Coxcatlán Cave, Tehuacán Valley)",
    tradeCorridor: "Mesoamerican Indigenous Trade & Spanish Galleon Routes",
    diasporaNarrative:
      "Archaeological evidence from Mexico's Tehuacán Valley shows continuous selective foraging and cultivation of avocados stretching back nearly 10,000 years. Aztec culinary treatises documented in the 16th-century Florentine Codex recorded ahuacatl preparations, which Spanish explorers dispersed through Central and South America prior to 20th-century commercial grafting in California.",
  },
  fig: {
    ancestralTaxon: "Ficus carica L.",
    archaeologicalEpoch: "c. 9,400–9,200 BCE (Gilgal I, Jordan Valley)",
    tradeCorridor: "Fertile Crescent Neolithic Dispersal & Greco-Roman Maritime Routes",
    diasporaNarrative:
      "Parthenocarpic fig remains unearthed at the Neolithic site of Gilgal I in the lower Jordan Valley represent the earliest recorded plant domestication in human history, predating domesticated wheat by roughly a thousand years. Figs served as indispensable sweet staple rations for travelers, soldiers, and sea crews across the ancient Mediterranean basin.",
  },
  kiwi: {
    ancestralTaxon: "Actinidia deliciosa",
    archaeologicalEpoch: "c. 12th Century CE (Song Dynasty); 1904 CE Commercial Introduction",
    tradeCorridor: "Yangtze River Valley & Trans-Pacific Agronomic Exchange",
    diasporaNarrative:
      "Documented in Song Dynasty herbal pharmacopeias as mǐhóutáo along the upper Yangtze River valley, wild kiwi vines were prized for medicinal infusion and foraging. In 1904, educator Isabel Fraser transported seeds to New Zealand, where horticulturalist Hayward Wright bred the world-standard green cultivar that was famously rebranded as 'Kiwifruit' in 1959.",
  },
  dragonfruit: {
    ancestralTaxon: "Selenicereus undatus (formerly Hylocereus undatus)",
    archaeologicalEpoch: "Pre-Columbian Mesoamerican Foraging; 19th Century French Indochina",
    tradeCorridor: "Trans-Pacific French Maritime Routes & Mekong Delta Agronomy",
    diasporaNarrative:
      "Native to the tropical dry forests and coastal scrublands of southern Mexico and Central America, pitaya was harvested by indigenous civilizations for cooling hydration. In the late 19th century, French traders brought cactus cuttings to Vietnam, where the crop thrived in the Mekong Delta and Binh Thuan province, becoming Southeast Asia's leading export fruit.",
  },
  guava: {
    ancestralTaxon: "Psidium guajava L.",
    archaeologicalEpoch: "c. 800 BCE (Coastal Peru & Mesoamerica)",
    tradeCorridor: "Spanish Maritime Galleons & Mughal Indian Agronomy",
    diasporaNarrative:
      "Indigenous to tropical America from Mexico to Peru, where archaeological deposits show early domestic foraging. Transported across the Pacific and Indian oceans by 16th-century Portuguese trade fleets, guava adapted flawlessly to the Indian subcontinent, giving rise to celebrated cultivars in Allahabad and Maharashtra.",
  },
  papaya: {
    ancestralTaxon: "Carica papaya L.",
    archaeologicalEpoch: "Pre-Columbian Maya & Olmec Domestication",
    tradeCorridor: "Spanish Manila Galleons & Tropical Asian Naturalization",
    diasporaNarrative:
      "Domesticated in southern Mexico and Central America by ancestral Indigenous cultures. Spanish voyagers introduced seeds to the Caribbean and the Philippines in the 1500s, from where it diffused swiftly throughout India and tropical Asia, becoming the premier source of natural culinary papain.",
  },
  lychee: {
    ancestralTaxon: "Litchi chinensis Sonn.",
    archaeologicalEpoch: "c. 111 BCE (Han Dynasty, South China)",
    tradeCorridor: "Chinese Imperial Relays & East India Company Plantations",
    diasporaNarrative:
      "Prized as an imperial delicacy in Guangdong and Fujian for over two millennia, lychees were rushed to northern capitals by imperial pony express. In the late 18th century, English and French botanists transported trees to Bengal and the fertile floodplains of Bihar, establishing India's prestigious Shahi lychee heartland.",
  },
  jackfruit: {
    ancestralTaxon: "Artocarpus heterophyllus Lam.",
    archaeologicalEpoch: "c. 4,000–3,000 BCE (Western Ghats, India)",
    tradeCorridor: "Indian Ocean Monsoon Spice Routes & Tamil Sangam Eras",
    diasporaNarrative:
      "Indigenous to the ancient evergreen rain forests of India's Western Ghats, jackfruit is documented extensively in ancient Tamil Sangam poetry as one of the three royal fruits. Carried by early Indian Ocean maritime traders to Southeast Asia, it became a cornerstone agroforestry crop across the tropics.",
  },
  jamun: {
    ancestralTaxon: "Syzygium cumini (L.) Skeels",
    archaeologicalEpoch: "Vedic Era (c. 1,500 BCE, Jambudvipa)",
    tradeCorridor: "Ancient Silk Road South Branch & Indian Ocean Diaspora",
    diasporaNarrative:
      "Sacred to Vedic cosmology, the Indian subcontinent was historically referred to as Jambudvipa ('land of the Jamun trees'). Subsisted on by travelers and praised in the Ramayana, it spread throughout tropical Asia and the Indian Ocean rim as an indispensable seasonal berry and Ayurvedic metabolic remedy.",
  },
  "custard-apple": {
    ancestralTaxon: "Annona squamosa L.",
    archaeologicalEpoch: "Pre-Columbian Mesoamerica; 16th Century Deccan Dispersal",
    tradeCorridor: "Portuguese Goa Maritime Routes & Deccan Plateau Orchards",
    diasporaNarrative:
      "Originating in the tropical lowlands of the West Indies and Central America, the sugar apple was introduced to western India via Portuguese traders in Goa. Thriving in the arid, limestone-rich soils of the Deccan plateau, it became deeply woven into regional Indian heritage under the devotional name Sitaphal.",
  },
  amla: {
    ancestralTaxon: "Phyllanthus emblica L.",
    archaeologicalEpoch: "c. 1,000 BCE (Charaka & Sushruta Samhitas)",
    tradeCorridor: "Ancient Indian Ayurvedic Trade & Buddhist Herbal Networks",
    diasporaNarrative:
      "Native throughout the dry deciduous and subtropical forests of the Indian subcontinent. Central to the foundation of ancient Indian medicine and the 3,000-year-old Chyawanprash formulation, amla was planted in monastery courtyards and temple groves throughout South and Southeast Asia.",
  },
  pineapple: {
    ancestralTaxon: "Ananas comosus var. comosus",
    archaeologicalEpoch: "c. 2,000 BCE (Parana-Paraguay River Basin)",
    tradeCorridor: "Tupi-Guarani Trade Routes & Trans-Atlantic European Navigations",
    diasporaNarrative:
      "Domesticated by Indigenous Tupi-Guarani peoples in the Parana-Paraguay basin, who transported crowns across tropical South America and the Antilles. Encountered by Columbus in 1493, pineapples became the ultimate aristocratic status symbol across European glasshouses before 19th-century commercial canning in Hawaii.",
  },
  grape: {
    ancestralTaxon: "Vitis vinifera subsp. sylvestris",
    archaeologicalEpoch: "c. 6,000 BCE (Shulaveri-Shomu & Areni-1, South Caucasus)",
    tradeCorridor: "Phoenician Mediterranean Trade & Roman Imperial Viticulture",
    diasporaNarrative:
      "First domesticated in the South Caucasus and northern Fertile Crescent, where ancient clay kvevri amphorae preserve the earliest traces of viticulture. Phoenician and Greek maritime traders dispersed table and wine grape cultivars across the Mediterranean basin, which Roman agronomists perfected and planted throughout Europe.",
  },
  lemon: {
    ancestralTaxon: "Citrus medica × Citrus × aurantium",
    archaeologicalEpoch: "c. 1st Century CE (Assam & Roman Trade)",
    tradeCorridor: "Arab Agricultural Revolution & Mediterranean Maritime Fleets",
    diasporaNarrative:
      "Originating from natural hybridization in the foothills of Assam and northern Burma. Introduced to southern Italy during the late Roman empire and systematically cultivated throughout Islamic Spain and Sicily by 1000 CE, lemons subsequently protected world navigators from scurvy during the Age of Sail.",
  },
  cherry: {
    ancestralTaxon: "Prunus avium L.",
    archaeologicalEpoch: "c. 300 BCE (Pontus, Black Sea) & 74 BCE Roman Introduction",
    tradeCorridor: "Roman Military Highways & European Temperate Orchards",
    diasporaNarrative:
      "Native to the temperate woodlands flanking the Black Sea in ancient Pontus. Roman general Lucullus introduced cultivated trees from Cerasus (Giresun, Turkey) to Rome in 74 BCE, where legionary engineers planted cherry orchards along Roman roads across France, Britain, and Germany.",
  },
  coconut: {
    ancestralTaxon: "Cocos nucifera L.",
    archaeologicalEpoch: "c. 3,000 BCE (Austronesian & Indian Ocean Expansions)",
    tradeCorridor: "Trans-Pacific Ocean Currents & Indo-Malayan Maritime Spice Routes",
    diasporaNarrative:
      "With buoyant husks evolved to survive months adrift on ocean currents, coconuts colonized equatorial coasts naturally before human domestication in Southeast Asia and the Indian subcontinent. Austronesian sailors transported domestic coconuts to Pacific atolls, while Indian and Arab dhows spread them across the African coast.",
  },
  plum: {
    ancestralTaxon: "Prunus domestica L.",
    archaeologicalEpoch: "c. 4,000–2,000 BCE (Caspian & Caucasus Basin)",
    tradeCorridor: "Ancient Greek & Roman Trans-Continental Orchards",
    diasporaNarrative:
      "Hexaploid hybrid between cherry plum and blackthorn originating near the Caspian Sea. Introduced into ancient Greece and Rome by classical agronomists, plums diversified into dessert varieties and durable prunes prized along medieval European trade routes.",
  },
  apricot: {
    ancestralTaxon: "Prunus armeniaca L.",
    archaeologicalEpoch: "c. 3,000 BCE (Garni, Armenian Highlands & Central Asia)",
    tradeCorridor: "The Ancient Silk Road & High Himalayan Caravan Trails",
    diasporaNarrative:
      "Domesticated across the Armenian highlands and Central Asia, archaeological pits dating to 3000 BCE exist at Garni. Dispersed by Silk Road traders and high-altitude Himalayan merchants into Ladakh, Persia, and the Mediterranean via Alexander the Great's campaigns.",
  },
  passionfruit: {
    ancestralTaxon: "Passiflora edulis Sims",
    archaeologicalEpoch: "Pre-Columbian South America; 1569 CE Spanish Botanical Records",
    tradeCorridor: "Trans-Pacific Spanish Galleons & 19th-Century Tropical Stations",
    diasporaNarrative:
      "Native to the Paraná basin of Brazil, Paraguay, and northern Argentina. Spanish doctor Nicolás Monardes described the flower in 1569. Transported to Hawaii in 1880, New Zealand, and Indian botanical research stations in Coorg and the Nilgiris, becoming a beloved high-altitude tropical crop.",
  },
  date: {
    ancestralTaxon: "Phoenix dactylifera L.",
    archaeologicalEpoch: "c. 4,000–3,000 BCE (Mesopotamia & Ancient Egypt)",
    tradeCorridor: "Trans-Saharan Caravan Oases & Arabian Maritime Incense Routes",
    diasporaNarrative:
      "Humanity's ancient desert sustenance domesticated along the Tigris, Euphrates, and Nile river valleys. Cultivated on desert oases across North Africa and the Levant, Islamic trade carried date cultivation into the Thar desert of Rajasthan and Gujarat's coastal Kutch.",
  },
  blackberry: {
    ancestralTaxon: "Rubus fruticosus L. sensu lato",
    archaeologicalEpoch: "Neolithic Foraging; 19th–20th Century Pomology",
    tradeCorridor: "Celtic Woodland Gatherings & Pacific Northwest Berry Breeding",
    diasporaNarrative:
      "Foraged across temperate European and North American bramble thickets since prehistoric times, seeds have been discovered in the stomachs of Neolithic bog bodies like Tollund Man. Cultivated intentionally from the 19th century in the UK and Oregon to create thornless commercial varieties.",
  },
  raspberry: {
    ancestralTaxon: "Rubus idaeus L.",
    archaeologicalEpoch: "c. 4th Century CE (Mount Ida, Crete) & Medieval France",
    tradeCorridor: "Medieval Monastery Gardens & Modern High-Tunnel Horticulture",
    diasporaNarrative:
      "Gathered from wild brambles on Crete's Mount Ida by ancient Greeks and Romans, raspberries were domesticated across medieval French and English monastery infirmaries. European cultivars later cross-bred with native North American wild red raspberries to create vigorous primocane varieties.",
  },
  sapodilla: {
    ancestralTaxon: "Manilkara zapota (L.) P. Royen",
    archaeologicalEpoch: "c. 2,000 BCE (Mesoamerica & Maya Civilization)",
    tradeCorridor: "Manila-Acapulco Galleon Trade & 1898 Gholvad Indian Introduction",
    diasporaNarrative:
      "Cherished by the ancient Maya for both sweet fruit and chicle tree resin. Spanish galleons carried sapodilla seeds from Mexico to the Philippines, from where it entered Southeast Asia. Introduced to Gholvad, Maharashtra in 1898 by Sir Dinshaw Petit, western India became the world's greatest Chikoo haven.",
  },
  bael: {
    ancestralTaxon: "Aegle marmelos (L.) Corrêa",
    archaeologicalEpoch: "c. 2,000–1,500 BCE (Vedic Period, Rigveda)",
    tradeCorridor: "Ancient Gangetic Pilgrimage Routes & Sacred Temple Agro-Ecology",
    diasporaNarrative:
      "Sacred to Lord Shiva in Hindu cosmology, bael trees have been planted across Indian temple sanctuaries and dry deciduous forests for millennia. Valued as an irreplaceable gastroprotective rasayana in Charaka Samhita, its cultivation spread across Sri Lanka, Nepal, and Indochina.",
  },
  ber: {
    ancestralTaxon: "Ziziphus mauritiana Lam.",
    archaeologicalEpoch: "c. 2,500 BCE (Indus Valley Civilization, Harappa)",
    tradeCorridor: "Ancient Thar Desert Caravans & Indian Ocean Dhow Routes",
    diasporaNarrative:
      "Carbonized jujube stones from Harappan archaeological digs prove Ber was an essential staple of Bronze Age Indus Valley inhabitants. Thriving in saline, drought-prone soils, Indian merchants and Arab navigators transported it across the Red Sea, the Sahel, and tropical northern Australia.",
  },
  durian: {
    ancestralTaxon: "Durio zibethinus L.",
    archaeologicalEpoch: "Ancient Sundaland Rainforests; 15th Century Maritime Trade",
    tradeCorridor: "Indo-Malayan Maritime Spice Corridors & Bat Pollination Habitats",
    diasporaNarrative:
      "Indigenous to the ancient dipterocarp rainforests of Borneo and Sumatra, durian co-evolved with nocturnal nectar bats. Immortalized by Alfred Russel Wallace in 1856, durian migrated across Siamese and Malay kingdoms to become Southeast Asia's celebrated, high-value King of Fruits.",
  },
  mangosteen: {
    ancestralTaxon: "Garcinia mangostana L.",
    archaeologicalEpoch: "Pleistocene Sunda Shelf; 18th Century Colonial Botanical Exchanges",
    tradeCorridor: "Spice Island Royal Navigations & British Royal Botanical Gardens",
    diasporaNarrative:
      "An ancient apomictic triploid native to the humid forests of Malaysia and Indonesia. Legend says Queen Victoria offered a 100-pound reward to anyone who could deliver an unblemished fruit. Introduced to Ceylon and the Courtallam hills of Tamil Nadu in the late 1700s, it remains the elusive Queen of Fruits.",
  },
  starfruit: {
    ancestralTaxon: "Averrhoa carambola L.",
    archaeologicalEpoch: "c. 1,000 BCE (Sri Lanka & Indo-Malayan Archipelago)",
    tradeCorridor: "Portuguese Malabar Corridors & Trans-Atlantic Tropical Diffusion",
    diasporaNarrative:
      "Native to the tropical river basins of Sri Lanka, Indonesia, and South India. Portuguese travelers in 16th-century Goa documented carambola under its Malayalam name and carried seeds to Brazil, the West Indies, and later Florida, where modern sweet cultivars were bred.",
  },
  pear: {
    ancestralTaxon: "Pyrus communis L.",
    archaeologicalEpoch: "c. 3,000–1,000 BCE (Caucasus & Ancient Greece)",
    tradeCorridor: "Homeric Aegean Orchards & French Enlightenment Pomology",
    diasporaNarrative:
      "Praised by Homer in the Odyssey as a 'gift of the gods', wild pears originated in the Caucasus and Anatolia. Ancient Romans bred dozens of named cultivars, which French and Belgian monks and master pomologists in the 17th and 18th centuries refined into the buttery, melting dessert pears enjoyed worldwide today.",
  },
  lime: {
    ancestralTaxon: "Citrus aurantiifolia (Christm.) Swingle",
    archaeologicalEpoch: "c. 1,000 BCE (Indo-Malayan Foothills)",
    tradeCorridor: "Arabian Indian Ocean Dhows & Spanish Galleon Navigation",
    diasporaNarrative:
      "Native to the tropical woodlands of Southeast Asia and eastern India, the Key lime was carried across the Indian Ocean by Arabian maritime merchants to the Levant and North Africa. During the 15th-century Age of Discovery, Spanish explorers transported it to the West Indies, where it adapted vigorously and prevented shipboard scurvy.",
  },
  grapefruit: {
    ancestralTaxon: "Citrus × aurantium f. aurantium (Citrus paradisi Macfad.)",
    archaeologicalEpoch: "c. 1750 CE (Bridgetown, Barbados)",
    tradeCorridor: "Trans-Atlantic Caribbean Plantations & Florida Citrus Expansion",
    diasporaNarrative:
      "A relatively modern botanical hybrid arising spontaneously in 18th-century Barbados when sweet orange pollen crossed with Indonesian pomelo seeds brought by Captain Shaddock. Originally dubbed 'The Forbidden Fruit', it was renamed grapefruit for its cluster-fruiting habit and became a hallmark of Floridian and Mediterranean citrus groves.",
  },
  mandarin: {
    ancestralTaxon: "Citrus reticulata Blanco",
    archaeologicalEpoch: "c. 2,000 BCE (Yangtze River Basin, China)",
    tradeCorridor: "Imperial Chinese Tribute Routes & Silk Maritime Corridors",
    diasporaNarrative:
      "One of the foundational true wild ancestral species of the citrus genus, native to south-central China and Vietnam. Cherished in imperial Chinese court ceremonies as emblems of auspicious prosperity, mandarins spread slowly along ancient Asian trading paths before being introduced to England and the Mediterranean in 1805.",
  },
  pomelo: {
    ancestralTaxon: "Citrus maxima (Burm.) Merr.",
    archaeologicalEpoch: "c. 1,500 BCE (Indo-Malayan Archipelago)",
    tradeCorridor: "Austronesian Island Canoes & Dutch East India Shipping",
    diasporaNarrative:
      "The colossal patriarch of the citrus family, indigenous to Malaysia and Indonesia. Austronesian navigators carried its hearty, thick-rinded fruit on trans-oceanic sea voyages. In the 17th century, English sea captain Shaddock transported seeds from Polynesia to the Caribbean, pioneering modern pummelo and hybrid citrus culture.",
  },
  cantaloupe: {
    ancestralTaxon: "Cucumis melo var. cantalupensis",
    archaeologicalEpoch: "c. 2,000 BCE (Nile Valley & Ancient Persia)",
    tradeCorridor: "Papal Estates of Cantalupo & Roman Agronomic Treatises",
    diasporaNarrative:
      "Diverging from wild African and Indian muskmelon ancestors, true warty cantaloupes were cultivated in ancient Persia and Egypt before being imported by Armenian monks to the papal gardens at Cantalupo near Rome in the 15th century, subsequently captivating French and European Renaissance gastronomy.",
  },
  honeydew: {
    ancestralTaxon: "Cucumis melo var. inodorus",
    archaeologicalEpoch: "c. 2,400 BCE (Ancient Egypt & Middle East)",
    tradeCorridor: "Nile Royal Funerary Offerings & French Charentais Breeding",
    diasporaNarrative:
      "Smooth-skinned winter melons were depicted in ancient Egyptian tomb wall paintings as sacred hydrating offerings. Prized by Ottoman and European royalty for their extended winter cellar storage longevity, they were introduced to France as 'White Antibes' before American agronomists established them in arid Californian valleys.",
  },
  galia: {
    ancestralTaxon: "Cucumis melo L. (Ha-Ogen × Honey Dew F1 Hybrid)",
    archaeologicalEpoch: "1973 CE (Neve Yaar Research Center, Israel)",
    tradeCorridor: "Modern Levantine Agronomic Innovation & Global Cold Chains",
    diasporaNarrative:
      "Bred in the 1970s by renowned Israeli plant breeder Dr. Zvi Karchi at the Agricultural Research Organization, the Galia melon ingeniously combined the intense musky aroma of Israeli Ha-Ogen netted melons with the dense, sugary sweetness of honeydew, revolutionizing contemporary Mediterranean greenhouse horticulture.",
  },
  "winter-melon": {
    ancestralTaxon: "Benincasa hispida (Thunb.) Cogn.",
    archaeologicalEpoch: "c. 3,000 BCE (Indo-China & Eastern India)",
    tradeCorridor: "Sino-Indian Ayurvedic Trade & Song Dynasty Agronomic Compendiums",
    diasporaNarrative:
      "Native to the warm subtropical forests of Southeast Asia and the eastern Himalayas, winter melon was documented in ancient Ayurvedic pharmacopeias as 'Kushmanda'. Its naturally secreted protective white wax coat enabled fruits to survive undamaged in storehouses for over twelve months without spoiling, providing vital famine nutrition.",
  },
  quince: {
    ancestralTaxon: "Cydonia oblonga Mill.",
    archaeologicalEpoch: "c. 4,000 BCE (Caucasus & Northern Iran)",
    tradeCorridor: "Aphrodite Sacred Groves & Medieval Monastic Confectionery",
    diasporaNarrative:
      "Predating the domestic dessert apple, the fragrant golden quince flourished in the rocky valleys of the Caucasus and ancient Persia. Associated with the goddess Aphrodite in ancient Crete and Rome as the mythical golden apple of love, medieval European apothecaries and monks prized it as the supreme foundation for pectin jellies and marmalades.",
  },
  "asian-pear": {
    ancestralTaxon: "Pyrus pyrifolia (Burm.f.) Nakai",
    archaeologicalEpoch: "c. 1,000 BCE (Yangtze River Basin, China)",
    tradeCorridor: "Edo Period Orchardists & Trans-Pacific Agronomic Migration",
    diasporaNarrative:
      "Cultivated across China, Japan, and Korea for over two millennia, Pyrus pyrifolia was selected specifically for extreme juiciness, spherical apple-like contours, and crisp, crystalline cell structures rather than soft melting flesh. Chinese immigrants and pioneer pomologists transported treasured grafted scions to California during the Gold Rush.",
  },
  loquat: {
    ancestralTaxon: "Rhaphiolepis bibas (Lour.) Galasso & Banfi (Eriobotrya japonica)",
    archaeologicalEpoch: "c. 1,500 BCE (Southeastern China)",
    tradeCorridor: "Tang Dynasty Silk Road & European Enlightenment Arboretums",
    diasporaNarrative:
      "Originating in the rugged hill country of south-central China where it was celebrated in Tang dynasty poetry for blossoming in winter and fruiting in spring. Introduced to Japan in antiquity where exceptional large-fruited cultivars were selected, the loquat arrived at the Royal Botanic Gardens at Kew in 1787 and swiftly graced the Riviera coast.",
  },
  nectarine: {
    ancestralTaxon: "Prunus persica var. nucipersica",
    archaeologicalEpoch: "c. 2,000 BCE (Central & Northern China)",
    tradeCorridor: "Persian Silk Routes & Renaissance English Pomology",
    diasporaNarrative:
      "Arising as a natural recessive genetic mutation of the fuzzy peach that eliminates fuzz trichomes, smooth-skinned nectarines were cultivated alongside peaches in ancient China. Mentioned in English herbals by 1616 as a delicacy of rare nectar-like sweetness, they were naturalized in Spanish California missions in the late 1700s.",
  },
};

export const WorldAtlasExplorer: React.FC<WorldAtlasExplorerProps> = ({
  allFruits,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>("blueberry");
  const [selectedBiomeId, setSelectedBiomeId] = useState<string>("all");

  const activeBiome = useMemo(
    () =>
      CONTINENTAL_BIOMES.find((b) => b.id === selectedBiomeId) ||
      CONTINENTAL_BIOMES[0],
    [selectedBiomeId]
  );

  // Filter fruits based on active continental biome
  const selectableFruits = useMemo(() => {
    if (selectedBiomeId === "all") return allFruits;
    return allFruits.filter((f) => activeBiome.fruitSlugs.includes(f.slug));
  }, [allFruits, selectedBiomeId, activeBiome]);

  // Current active fruit (fall back if filtered out)
  const currentFruit = useMemo(() => {
    const found = allFruits.find((f) => f.slug === selectedSlug);
    if (found && selectableFruits.some((f) => f.slug === selectedSlug)) {
      return found;
    }
    return selectableFruits[0] || allFruits[0];
  }, [allFruits, selectedSlug, selectableFruits]);

  const diasporaDossier =
    HISTORICAL_DIASPORA_DOSSIERS[currentFruit.slug] || {
      ancestralTaxon: `${currentFruit.taxonomy.genus ?? ""} ${currentFruit.taxonomy.species ?? ""}`,
      archaeologicalEpoch: "Ancient Holocene",
      tradeCorridor: "Global Historical Trade Networks",
      diasporaNarrative: currentFruit.origin.description,
    };

  return (
    <div className="space-y-16">
      {/* ─── SECTION 1: INTERACTIVE CONTINENTAL FILTER & FRUIT SELECTOR ─── */}
      <section className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
          <div>
            <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
              Cartographic Exploration
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Geographic Provenance & Diaspora
            </h2>
            <p className="font-editorial text-zinc-400 text-sm mt-1 max-w-2xl">
              Trace the evolutionary cradle, ancestral species, and ancient trade routes that dispersed wild fruits across the globe.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-right">
              <span className="block font-display text-lg font-bold text-white leading-none">
                {selectableFruits.length}{" "}
                <span className="text-zinc-500 font-ui text-xs font-normal">
                  / {allFruits.length}
                </span>
              </span>
              <span className="font-ui text-[11px] text-zinc-400">
                Mapped Provenances
              </span>
            </div>
          </div>
        </div>

        {/* Continental Biome Tabs */}
        <div>
          <label className="block font-ui text-xs uppercase font-semibold tracking-wider text-zinc-400 mb-3">
            Select Evolutionary Biome / Continent:
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-ui text-xs">
            {CONTINENTAL_BIOMES.map((biome) => {
              const isSelected = biome.id === selectedBiomeId;
              return (
                <button
                  key={biome.id}
                  type="button"
                  onClick={() => {
                    setSelectedBiomeId(biome.id);
                    // If current fruit not in this biome, select first fruit of biome
                    if (
                      biome.id !== "all" &&
                      !biome.fruitSlugs.includes(currentFruit.slug)
                    ) {
                      const firstSlug = biome.fruitSlugs[0];
                      if (firstSlug) setSelectedSlug(firstSlug);
                    }
                  }}
                  className={`shrink-0 px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 border border-indigo-500"
                      : "bg-zinc-950/80 border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  <span>{biome.icon}</span>
                  <span>{biome.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Biome Description Callout */}
        <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/40 text-xs font-ui text-zinc-400">
          <strong className="text-zinc-200">{activeBiome.name}:</strong>{" "}
          {activeBiome.description}
        </div>

        {/* Fruit Selector Chips */}
        <div>
          <label className="block font-ui text-xs uppercase font-semibold tracking-wider text-zinc-400 mb-3">
            Select Fruit Monograph:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {selectableFruits.map((fruit) => {
              const isSelected = fruit.slug === currentFruit.slug;
              return (
                <button
                  key={fruit.id}
                  type="button"
                  onClick={() => setSelectedSlug(fruit.slug)}
                  className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center gap-2 w-full min-w-0 overflow-hidden ${
                    isSelected
                      ? "bg-zinc-900 border-indigo-500 ring-2 ring-indigo-500/30 shadow-lg"
                      : "bg-zinc-950/70 border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-zinc-800 shrink-0 bg-zinc-950">
                    <img
                      src={fruit.images.hero.src}
                      alt={fruit.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "72% center" }}
                    />
                  </div>
                  <div className="w-full min-w-0 overflow-hidden px-0.5">
                    <span
                      className={`block font-display text-xs font-bold truncate ${
                        isSelected ? "text-white" : "text-zinc-300"
                      }`}
                      title={fruit.name}
                    >
                      {fruit.name}
                    </span>
                    <span
                      className="block font-editorial italic text-[10px] text-zinc-500 truncate"
                      title={fruit.origin.region}
                    >
                      {fruit.origin.region.split("(")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: INTERACTIVE GEOGRAPHIC ORIGIN MAP ─── */}
      <section aria-labelledby="map-heading" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
              Cartographic Projection
            </span>
            <h3
              id="map-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1"
            >
              {currentFruit.name}: Native Provenance & Modern Centers
            </h3>
          </div>
          <div className="flex items-center gap-2 font-ui text-xs text-zinc-400">
            <span>Coordinates:</span>
            <span className="font-mono text-zinc-200 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              {Math.abs(currentFruit.origin.coordinates[0])}°{" "}
              {currentFruit.origin.coordinates[0] >= 0 ? "N" : "S"},{" "}
              {Math.abs(currentFruit.origin.coordinates[1])}°{" "}
              {currentFruit.origin.coordinates[1] >= 0 ? "E" : "W"}
            </span>
          </div>
        </div>

        {/* Dynamic Interactive OriginMap Component */}
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950 overflow-hidden shadow-2xl">
          <OriginMap
            originCoordinates={currentFruit.origin.coordinates}
            originRegion={currentFruit.origin.region}
            grownRegions={currentFruit.origin.grownTodayRegions}
            themeColor={currentFruit.theme.primary}
          />
        </div>
      </section>

      {/* ─── SECTION 3: DIASPORA & EVOLUTIONARY DOSSIER ─── */}
      <section
        aria-labelledby="dossier-heading"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left 8 Cols: Detailed Narrative */}
        <div className="lg:col-span-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-md space-y-6">
          <div className="flex items-center gap-2.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: currentFruit.theme.primary }}
            />
            <h4
              id="dossier-heading"
              className="font-ui text-xs font-bold uppercase tracking-wider text-zinc-300"
            >
              Botanical Diaspora & Historical Migration Corridor
            </h4>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              The Journey of {currentFruit.name}
            </h3>
            <p className="font-editorial text-zinc-300 text-lg leading-relaxed">
              {diasporaDossier.diasporaNarrative}
            </p>
          </div>

          {/* Structured Key Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80 font-ui text-xs">
            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-semibold">
                Ancestral Wild Progenitor
              </span>
              <p className="font-editorial italic text-sm text-zinc-200">
                {diasporaDossier.ancestralTaxon}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-semibold">
                Archaeological Epoch
              </span>
              <p className="font-medium text-sm text-zinc-200">
                {diasporaDossier.archaeologicalEpoch}
              </p>
            </div>

            <div className="sm:col-span-2 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-semibold">
                Primary Trade Route & Dispersal Vector
              </span>
              <p className="font-medium text-sm text-indigo-300">
                {diasporaDossier.tradeCorridor}
              </p>
            </div>
          </div>

          {/* Monograph Action */}
          <div className="pt-2">
            <a
              href={`/fruit/${currentFruit.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Explore Complete {currentFruit.name} Monograph</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right 4 Cols: Modern Agricultural Cultivation Centers */}
        <div className="lg:col-span-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-md space-y-6">
          <div className="space-y-1">
            <span className="font-ui text-xs uppercase font-semibold tracking-wider text-amber-400">
              Modern Agronomy
            </span>
            <h4 className="font-display text-xl font-bold text-white">
              Leading Commercial Producers
            </h4>
            <p className="font-editorial text-xs text-zinc-400">
              Countries cultivating {currentFruit.name} at commercial export scale today.
            </p>
          </div>

          {/* Production Countries Tag Cloud */}
          <div className="flex flex-wrap gap-2">
            {currentFruit.origin.grownTodayRegions?.map((country) => (
              <span
                key={country}
                className="px-3 py-1.5 rounded-xl border border-zinc-800 bg-zinc-950 text-xs font-ui text-zinc-300 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{country}</span>
              </span>
            ))}
          </div>

          {/* Botanical Provenance Disclaimer */}
          <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/60 text-[11px] font-ui text-zinc-500 space-y-2">
            <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
              <span>🌱</span>
              <span>Ecological Niche</span>
            </div>
            <p className="leading-relaxed">
              Native botanical ranges represent regions of speciation where genetic diversity is highest. Modern cultivation reflects agro-climatic transferability.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CROSS-CATALOG PROVENANCE MATRIX ─── */}
      <section aria-labelledby="all-provenance-heading" className="space-y-6">
        <div>
          <span className="text-xs font-ui uppercase font-bold tracking-widest text-indigo-400">
            Catalog Provenance Matrix
          </span>
          <h3
            id="all-provenance-heading"
            className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1"
          >
            Evolutionary Birthplaces Across All Monographs
          </h3>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950/80 font-ui text-[11px] uppercase tracking-wider text-zinc-400">
                  <th scope="col" className="py-4 px-6 font-semibold">
                    Fruit
                  </th>
                  <th scope="col" className="py-4 px-6 font-semibold">
                    Native Provenance
                  </th>
                  <th scope="col" className="py-4 px-6 font-semibold">
                    Coordinates
                  </th>
                  <th scope="col" className="py-4 px-6 font-semibold">
                    Key Cultivation Hubs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs font-ui">
                {allFruits.map((fruit) => {
                  const isSelected = fruit.slug === currentFruit.slug;
                  return (
                    <tr
                      key={fruit.id}
                      onClick={() => setSelectedSlug(fruit.slug)}
                      className={`hover:bg-zinc-900/60 transition-colors cursor-pointer ${
                        isSelected ? "bg-indigo-950/30" : ""
                      }`}
                    >
                      <td className="py-3 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-800 shrink-0 bg-zinc-950">
                            <img
                              src={fruit.images.hero.src}
                              alt={fruit.name}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: "72% center" }}
                            />
                          </div>
                          <div>
                            <span className="font-display font-bold text-white block">
                              {fruit.name}
                            </span>
                            <span className="font-editorial italic text-zinc-500 text-[11px] block">
                              {fruit.taxonomy.species}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-zinc-300">
                        {fruit.origin.region}
                      </td>
                      <td className="py-3 px-6 font-mono text-[11px] text-zinc-400">
                        {Math.abs(fruit.origin.coordinates[0])}°{" "}
                        {fruit.origin.coordinates[0] >= 0 ? "N" : "S"},{" "}
                        {Math.abs(fruit.origin.coordinates[1])}°{" "}
                        {fruit.origin.coordinates[1] >= 0 ? "E" : "W"}
                      </td>
                      <td className="py-3 px-6 text-zinc-400">
                        {fruit.origin.grownTodayRegions?.slice(0, 3).join(", ")}
                        {(fruit.origin.grownTodayRegions?.length ?? 0) > 3 &&
                          "..."}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldAtlasExplorer;

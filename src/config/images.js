/**
 * KJR Property Maintenance – image config
 *
 * LAYOUT: Container sizes, aspect ratios, and positions match the original design.
 * Images only replace the originals—same slots, same CSS (object-fit: cover/contain,
 * background-size: cover). Do not change container dimensions; size images to fit
 * via object-fit/background positioning.
 *
 * All paths from public/assets/img/. Replace file content or swap URLs only.
 *
 * REQUIREMENTS (replace file content only; keep filenames):
 * - Commercial buildings, maintenance crews, pressure washing, parking lot sweeping, graffiti removal, junk removal, day porter only.
 * - No residential, tree services, or landscaping. Realistic, professional; evening or clean commercial tones where appropriate.
 *
 * ASSET ROSTER:
 * - hero_main.png      Hero slider / page headings – commercial property or crew
 * - cta_bg.png         CTA section background – commercial/maintenance scene
 * - day_porter.png, day_porter_2.png  Day porter / cleaning crew (two professional photos)
 * - parking_lot_sweeping.png  Parking lot sweeping. If file shows window cleaning, use about_family_sweeper.png (see PARKING_LOT_IMAGE).
 * - pressure_washing.png, pressure_washing_2.png, pressure_washing_3.png  Pressure washing ONLY (these 3 images only).
 * - graffiti_services.png    Graffiti removal
 * - junk_removal.png   Junk removal / lot cleanup
 * - about_family_sweeper.png  Feature/about – crew or sweeper truck
 */

const img = (file) => `/assets/img/${file}`;

/** Parking lot sweeping: use hero_main only (no window cleaners, no family pic). Replace with real lot-sweeping photo when you have one. */
const PARKING_LOT_IMAGE = img("hero_main.png");

/** Hero: full viewport slider – commercial property / maintenance */
export const HERO = {
  width: 1920,
  height: 1080,
  url: img("hero_main.png"),
};

/** Hero slider backgrounds – all property-maintenance / commercial (4 slides like original) */
export const HERO_SLIDES = [
  img("hero_main.png"),
  img("cta_bg.png"),
  img("hero_main.png"),
  img("cta_bg.png"),
];

/** Page heading backgrounds – commercial property look */
export const PAGE_HEADING = {
  url: img("hero_main.png"),
};
export const ABOUT_HEADING_BG = img("hero_main.png");
export const SERVICE_HEADING_BG = img("hero_main.png");
export const PROJECT_HEADING_BG = img("hero_main.png");

/** CTA section: full width (Ready for a professional maintenance partner) */
export const CTA_BG = {
  width: 1920,
  height: 600,
  url: img("cta_bg.png"),
};

/** Service cards (home + service page) */
export const SERVICE_CARDS = {
  dayPorter: img("day_porter.png"),
  parkingLot: PARKING_LOT_IMAGE,
  pressureWashing: img("pressure_washing.png"),
  graffitiRemoval: img("graffiti_services.png"),
  junkRemoval: img("junk_removal.png"),
};

/** Service page cards (same as SERVICE_CARDS) */
export const SERVICE_PAGE_CARDS = {
  dayPorter: img("day_porter.png"),
  parkingLot: PARKING_LOT_IMAGE,
  pressureWashing: img("pressure_washing.png"),
  graffitiRemoval: img("graffiti_services.png"),
  junkRemoval: img("junk_removal.png"),
};

/** Feature / Why Choose section – maintenance crew / on-site */
export const FEATURE_IMAGE = img("about_family_sweeper.png");

/** About section / video block (e.g. project pages) */
export const ABOUT_IMAGE = img("about_family_sweeper.png");
/** About page: family / first sweeper truck */
export const ABOUT_PAGE_IMAGE = img("about_family_sweeper.png");

/** Service detail hero images */
export const SERVICE_DETAIL_HERO = {
  dayPorter: img("day_porter.png"),
  dayPorter2: img("day_porter_2.png"),
  parkingLot: PARKING_LOT_IMAGE,
  pressureWashing: img("pressure_washing.png"),
  pressureWashing2: img("pressure_washing_2.png"),
  pressureWashing3: img("pressure_washing_3.png"),
  graffitiRemoval: img("graffiti_services.png"),
  junkRemoval: img("junk_removal.png"),
};

/** Gallery grid – pressure washing slots use only the 3 pressure washing images. */
export const GALLERY = [
  { imgSrc: img("day_porter.png"), imageSrc: img("day_porter.png"), title: "Day Porter & Common Areas", year: "2024", height: "394px" },
  { imgSrc: img("pressure_washing.png"), imageSrc: img("pressure_washing.png"), title: "Pressure Washing", year: "2024", height: "383px" },
  { imgSrc: img("pressure_washing_2.png"), imageSrc: img("pressure_washing_2.png"), title: "Pressure Washing", year: "2024", height: "383px" },
  { imgSrc: img("pressure_washing_3.png"), imageSrc: img("pressure_washing_3.png"), title: "Exterior Cleaning", year: "2024", height: "383px" },
  { imgSrc: img("junk_removal.png"), imageSrc: img("junk_removal.png"), title: "Lot Maintenance", year: "2024", height: "287px" },
  { imgSrc: img("pressure_washing.png"), imageSrc: img("pressure_washing.png"), title: "Exterior Cleaning", year: "2024", height: "480px" },
  { imgSrc: img("day_porter_2.png"), imageSrc: img("day_porter_2.png"), title: "Property Maintenance", year: "2024", height: "190px" },
  { imgSrc: PARKING_LOT_IMAGE, imageSrc: PARKING_LOT_IMAGE, title: "Bay Area Service", year: "2024", height: "383px" },
];

/** Login/Register/Forgot background – professional commercial */
export const AUTH_BG = img("hero_main.png");

/** CardSection / half bg (contact, etc.) */
export const CARD_BG = img("cta_bg.png");

/** Blog post thumbnails – property maintenance */
export const BLOG_POST_IMAGE = img("day_porter.png");
export const BLOG_POST_IMAGES = [img("day_porter.png"), img("day_porter_2.png"), img("pressure_washing.png"), PARKING_LOT_IMAGE];

/** FAQ accordion images – maintenance relevant */
export const FAQ_IMAGE = img("day_porter.png");
export const FAQ_IMAGE_2 = img("pressure_washing.png");

/** Team section – maintenance / crew relevant */
export const TEAM_IMAGES = [
  img("about_family_sweeper.png"),
  img("day_porter.png"),
  img("day_porter_2.png"),
  img("pressure_washing.png"),
  img("parking_lot_sweeping.png"),
];

/** Project thumbs – pressure washing slots use only the 3 pressure washing images. */
export const PROJECT_THUMBS = [
  img("day_porter.png"),
  img("pressure_washing.png"),
  img("pressure_washing_2.png"),
  img("pressure_washing_3.png"),
  img("junk_removal.png"),
  img("about_family_sweeper.png"),
  img("day_porter_2.png"),
  PARKING_LOT_IMAGE,
  img("pressure_washing.png"),
  img("graffiti_services.png"),
  img("junk_removal.png"),
  img("cta_bg.png"),
  img("hero_main.png"),
];

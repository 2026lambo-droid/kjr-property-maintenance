import React from "react";
import HeroSection from "../../Components/Hero";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import ServicesSection from "../../Components/ServicesSection";
import AboutSection from "../../Components/AboutSection";
import CTASection from "../../Components/CTASection";
import { pageTitle } from "../../helper";
import {
  HERO_SLIDES,
  FEATURE_IMAGE,
  SERVICE_CARDS,
  HERO,
  CTA_BG,
} from "../../config/images";

const heroData = {
  eyebrow: "KJR Property Maintenance",
  title: "Professional Commercial Property Maintenance in San Jose & the Bay Area",
  subtitle:
    "Your trusted partner for keeping commercial properties clean, safe, and well-maintained. From day porter services to pressure washing and graffiti removal—we deliver reliable, professional results.",
  btnText1: "Request a Quote",
  btnUrl1: "/contact",
  btnText2: "Call Now",
  btnUrl2: "tel:4085023188",

  funfact: {
    number: "",
    text: "Serving San Jose & the Bay Area",
    trustIndicators: [
      { icon: "fa6-solid:location-dot", text: "San Jose & Bay Area" },
      { icon: "fa6-solid:phone", text: "(408) 502-3188" },
      { icon: "fa6-solid:envelope", text: "kjr.pm23@gmail.com" },
    ],
  },
  box: {
    title: "Get in touch",
    contacts: [
      { label: "Field Manager", name: "Jimmy L.", tel: "4085023188" },
      { label: "Owner", name: "Janette Garcilazo", tel: "4086052559" },
    ],
    link: "/contact",
  },

  backgrounds: HERO_SLIDES,
};

const valueData = {
  sectionTitle: "WHAT WE OFFER",
  lead:
    "Day porter, parking lot sweeping, pressure washing, graffiti removal, and junk removal—we keep your property clean and presentable.",
  values: [
    { text: "Commercial-focused services" },
    { text: "Reliable & responsive team" },
    { text: "Clean, professional results" },
    { text: "Bay Area local" },
    { text: "Tailored maintenance plans" },
  ],
};

const featureData = {
  sectionTitle: "Why Choose <span class=\"cs_brand_font\">KJR Property Maintenance</span>",
  sectionSubtitle:
    "We combine experience, reliability, and local knowledge to deliver maintenance you can count on.",
  buttonText: "Request a Quote",
  buttonUrl: "/contact",
  image: FEATURE_IMAGE,
  features: [
    {
      icon: "fa6-solid:building",
      title: "Commercial-focused services",
      description:
        "We specialize in commercial properties, retail centers, HOAs, and common areas. Our team understands the standards and schedules that keep your property running smoothly.",
    },
    {
      icon: "fa6-solid:clock",
      title: "Reliable and responsive team",
      description:
        "Consistent scheduling and clear communication. We show up when we say we will and keep you informed every step of the way.",
    },
    {
      icon: "fa6-solid:spray-can-sparkles",
      title: "Clean, professional results",
      description:
        "From day porter services to pressure washing and graffiti removal—we leave properties looking their best so you can make a strong first impression.",
    },
    {
      icon: "fa6-solid:location-dot",
      title: "Bay Area local service",
      description:
        "Based in the San Jose area, we know the region and respond quickly to your property needs. Local means we're always nearby when you need us.",
    },
    {
      icon: "fa6-solid:list-check",
      title: "Tailored maintenance plans",
      description:
        "We work with property managers to design schedules and services that fit your budget and standards. One-time cleanups or recurring contracts—we're flexible.",
    },
  ],
};

const servicesData = {
  title: "SERVICES",
  btnText: "See All Services",
  btnUrl: "/services",
  service: [
    {
      title: "Day Porter Services",
      subtitle:
        "Ongoing cleaning and upkeep of lobbies, common areas, restrooms, and grounds so your property stays presentable every day.",
      image: SERVICE_CARDS.dayPorter,
      link: "/services/day-porter",
      tags: [
        { label: "Daily", url: "/services" },
        { label: "Common areas", url: "/services" },
        { label: "Lobbies", url: "/services" },
      ],
    },
    {
      title: "Parking Lot Sweeping",
      subtitle:
        "Sweeping to remove debris, leaves and litter to maintain a clean and safe appearance. <strong>Regular or Monthly.</strong>",
      image: `${HERO.url}?v=pl`,
      link: "/services/parking-lot-sweeping",
      tags: [
        { label: "Sweeping", url: "/services" },
        { label: "Debris", url: "/services" },
        { label: "Parking", url: "/services" },
      ],
    },
    {
      title: "Pressure Washing",
      subtitle:
        "Power washing of sidewalks, building exteriors, dumpster pads, and entryways to restore a clean, professional look.",
      image: SERVICE_CARDS.pressureWashing,
      link: "/services/pressure-washing",
      tags: [
        { label: "Power wash", url: "/services" },
        { label: "Sidewalks", url: "/services" },
        { label: "Exteriors", url: "/services" },
      ],
    },
    {
      title: "Graffiti Removal",
      subtitle:
        "Quick graffiti removal and cover-up so walls, fences, and surfaces look clean and professional again.",
      image: SERVICE_CARDS.graffitiRemoval,
      link: "/services/graffiti-removal",
      tags: [
        { label: "Graffiti", url: "/services" },
        { label: "Cover-up", url: "/services" },
        { label: "Walls", url: "/services" },
      ],
    },
    {
      title: "Junk / Illegal Dumping Removal",
      subtitle:
        "Removal of junk, illegal dumping, and bulk debris from lots and common areas so your property stays clear and compliant.",
      image: SERVICE_CARDS.junkRemoval,
      link: "/services/junk-removal",
      tags: [
        { label: "Junk", url: "/services" },
        { label: "Dumping", url: "/services" },
        { label: "Debris", url: "/services" },
      ],
    },
  ],
};

const aboutData = {
  title: "About <span class=\"cs_brand_font\">KJR Property Maintenance</span>",
  subtitle:
    "We're a local team dedicated to keeping your commercial property in top shape.",
  content:
    "<p>KJR Property Maintenance provides commercial property maintenance services throughout San Jose and the greater Bay Area. We focus on keeping commercial buildings, retail centers, HOAs, and common areas clean, safe, and well-maintained—so tenants, visitors, and property managers see a professional environment every day.</p><p>Our commitment is to reliability, clear communication, and professional results. From day porter services and parking lot sweeping to pressure washing, graffiti removal, and junk removal, we work with you as your trusted maintenance partner. Contact us at (408) 502-3188 or kjr.pm23@gmail.com to discuss your property needs.</p>",
};

const ctaData = {
  backgroundImage: CTA_BG.url,
  title: "Ready for a professional maintenance partner?<br />Get in touch today.",
  subtitle:
    "Call (408) 502-3188 or request a quote online.",
  buttonText: "Request a Quote",
  buttonUrl: "/contact",
};

export default function HomePage() {
  pageTitle("KJR Property Maintenance | San Jose & Bay Area");
  return (
    <>
      <HeroSection data={heroData} />
      <ValueSection data={valueData} />
      <FeatureSection data={featureData} />
      <ServicesSection data={servicesData} />
      <AboutSection data={aboutData} />
      <CTASection data={ctaData} />
    </>
  );
}

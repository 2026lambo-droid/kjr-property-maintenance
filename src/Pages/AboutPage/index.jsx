import React from "react";
import PageHeading from "../../Components/PageHeading";
import AboutUs from "../../Components/Aboutus";
import ValueSection from "../../Components/ValueSection";
import FeatureSection from "../../Components/FeatureSection";
import CtaSection from "../../Components/CTASection/CtaSection";
import { pageTitle } from "../../helper";
import {
  ABOUT_HEADING_BG,
  ABOUT_PAGE_IMAGE,
  FEATURE_IMAGE,
  CTA_BG,
} from "../../config/images";

const BreadcrumbsData = {
  backgroundImage: ABOUT_HEADING_BG,
  title: "ABOUT US",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "About", active: true },
  ],
};

const aboutUsData = {
  title: "About <span class=\"cs_brand_font\">KJR Property Maintenance</span>",
  introduction:
    "KJR Property Maintenance provides commercial property maintenance services in San Jose and the greater Bay Area. We focus on keeping commercial buildings, retail centers, HOAs, and common areas clean, safe, and well-maintained. Our mission is simple: deliver reliable, professional maintenance so property managers and owners can focus on what matters most.",
  introduction1:
    "From day porter services and parking lot sweeping to pressure washing, graffiti removal, and junk removal, we work with you to design schedules and services that fit your property and budget. We're local, responsive, and committed to clear communication. Contact us at (408) 502-3188 or kjr.pm23@gmail.com to discuss your property needs or request a quote.",
  originQuote:
    "This line of business chose me since the 1990s—my father's first sweeper truck.",
  video: {
    videoUrl: "",
    backgroundImage: ABOUT_PAGE_IMAGE,
  },
  cta: {
    backgroundImage: CTA_BG.url,
    buttonUrl: "/contact",
    buttonText: "Request a Quote",
  },
};

const valueData = {
  sectionTitle: "WHAT WE OFFER",
  lead:
    "Day porter, parking lot sweeping, pressure washing, graffiti removal, and junk removal.",
  values: [
    { text: "Commercial-focused services" },
    { text: "Reliable & responsive" },
    { text: "Bay Area local" },
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
        "We specialize in commercial properties, retail centers, HOAs, and common areas.",
    },
    {
      icon: "fa6-solid:clock",
      title: "Reliable and responsive team",
      description:
        "Consistent scheduling and clear communication. We show up when we say we will.",
    },
    {
      icon: "fa6-solid:spray-can-sparkles",
      title: "Clean, professional results",
      description:
        "From day porter services to pressure washing and graffiti removal—we leave properties looking their best.",
    },
    {
      icon: "fa6-solid:location-dot",
      title: "Bay Area local service",
      description:
        "Based in the San Jose area. We know the region and respond quickly to your property needs.",
    },
  ],
};

const ctaData = {
  backgroundImage: CTA_BG.url,
  title: "Ready for a professional maintenance partner?<br />Get in touch today.",
  subtitle:
    "Call (408) 502-3188 or request a quote online.",
  buttonText: "Request a Quote",
  buttonUrl: "/contact",
};

export default function AboutPage() {
  pageTitle("About Us | KJR Property Maintenance");

  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <AboutUs data={aboutUsData} />
      <div className="cs_heading_bg cs_white_color">
        <ValueSection data={valueData} />
        <FeatureSection data={featureData} />
      </div>
      <CtaSection data={ctaData} />
    </>
  );
}
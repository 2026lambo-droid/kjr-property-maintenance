import React from "react";
import { useParams, Link } from "react-router-dom";
import ServiceDetailsSection from "../../Components/ServiceDetails";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import { SERVICE_DETAIL_HERO, CTA_BG } from "../../config/images";

const SERVICES = {
  "day-porter": {
    title: "Day Porter <span>Services</span>",
    description:
      "Keep your commercial property presentable every day with our day porter services. We handle ongoing cleaning and upkeep of lobbies, common areas, restrooms, and grounds so tenants, visitors, and property managers see a clean, professional environment.<br><br>We work with you to set a schedule that fits your property—whether that’s daily, several times per week, or on a custom plan. Our team is reliable, responsive, and focused on maintaining the standards your property deserves.",
    iconBoxes: [
      { iconClass: "fa6-solid:building", title: "Lobbies & common areas" },
      { iconClass: "fa6-solid:broom", title: "Restrooms & grounds" },
      { iconClass: "fa6-solid:calendar-days", title: "Flexible scheduling" },
      { iconClass: "fa6-solid:handshake", title: "Reliable, responsive" },
    ],
    image: SERVICE_DETAIL_HERO.dayPorter,
    ctaImage: SERVICE_DETAIL_HERO.dayPorter2,
  },
  "parking-lot-sweeping": {
    title: "Parking Lot <span>Sweeping</span>",
    description:
      "Regular parking lot sweeping keeps your property looking clean and professional while reducing debris, leaves, and litter. We sweep parking lots and driveways to maintain a safe, tidy appearance for tenants, customers, and visitors.<br><br>Scheduling can be weekly, bi-weekly, or on a custom basis depending on your property size and needs. We serve commercial buildings, retail centers, and HOAs throughout San Jose and the Bay Area.",
    iconBoxes: [
      { iconClass: "fa6-solid:car", title: "Parking lots & driveways" },
      { iconClass: "fa6-solid:leaf", title: "Debris & litter removal" },
      { iconClass: "fa6-solid:repeat", title: "Recurring schedules" },
      { iconClass: "fa6-solid:location-dot", title: "Bay Area service" },
    ],
    image: SERVICE_DETAIL_HERO.parkingLot,
  },
  "pressure-washing": {
    title: "Pressure <span>Washing</span>",
    description:
      "Restore a clean, professional look to sidewalks, building exteriors, dumpster pads, and entryways with our pressure washing services. We use professional equipment and techniques to remove dirt, grime, and buildup so your property makes a strong first impression.<br><br>Whether you need a one-time deep clean or regular power washing as part of your maintenance plan, we can tailor the service to your property and schedule.",
    iconBoxes: [
      { iconClass: "fa6-solid:road", title: "Sidewalks & walkways" },
      { iconClass: "fa6-solid:building", title: "Building exteriors" },
      { iconClass: "fa6-solid:droplet", title: "Dumpster pads" },
      { iconClass: "fa6-solid:door-open", title: "Entryways" },
    ],
    image: SERVICE_DETAIL_HERO.pressureWashing,
    ctaImage: SERVICE_DETAIL_HERO.pressureWashing2,
  },
  "graffiti-removal": {
    title: "Graffiti <span>Removal</span>",
    description:
      "Quick graffiti removal and cover-up so walls, fences, and surfaces look clean and professional again. We work efficiently to minimize the visual impact of graffiti and help maintain your property’s appearance and reputation.<br><br>We serve commercial properties, retail centers, and common areas throughout San Jose and the Bay Area. Contact us for one-time cleanup or to discuss adding graffiti removal to your maintenance plan.",
    iconBoxes: [
      { iconClass: "fa6-solid:spray-can-sparkles", title: "Removal & cover-up" },
      { iconClass: "fa6-solid:wall", title: "Walls & fences" },
      { iconClass: "fa6-solid:clock", title: "Quick response" },
      { iconClass: "fa6-solid:building", title: "Commercial focus" },
    ],
    image: SERVICE_DETAIL_HERO.graffitiRemoval,
    imageContain: true,
  },
  "junk-removal": {
    title: "Junk / Illegal Dumping <span>Removal</span>",
    description:
      "Removal of junk, illegal dumping, and bulk debris from lots and common areas so your property stays clear, safe, and compliant. We handle the cleanup and disposal so you can focus on running your property.<br><br>Whether it’s a one-time cleanup or recurring removal as part of your maintenance plan, we respond promptly and leave the area clean and ready for use.",
    iconBoxes: [
      { iconClass: "fa6-solid:trash", title: "Junk & debris" },
      { iconClass: "fa6-solid:triangle-exclamation", title: "Illegal dumping" },
      { iconClass: "fa6-solid:truck", title: "Haul-away & disposal" },
      { iconClass: "fa6-solid:check", title: "Clear & compliant" },
    ],
    image: SERVICE_DETAIL_HERO.junkRemoval,
    imageContain: true,
  },
};

const cardData = {
  backgroundImage: CTA_BG.url,
  tags: ["Commercial", "San Jose", "Bay Area"],
  title: "Ready for a quote?<br />Get in touch today.",
  buttonLink: "/contact",
};

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const service = SERVICES[serviceId];

  if (!service) {
    pageTitle("Services | KJR Property Maintenance");
    return (
      <>
        <div className="cs_height_125 cs_height_lg_80" />
        <div className="container">
          <div className="cs_page_heading cs_style_2">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
              <li className="breadcrumb-item">Service</li>
            </ol>
            <h1 className="cs_page_title mb-0 cs_fs_48">Service</h1>
          </div>
          <div className="cs_height_40" />
          <p className="cs_fs_20">
            We offer day porter services, parking lot sweeping, pressure washing, graffiti removal, and junk/illegal dumping removal. <Link to="/services">View all services</Link> or <Link to="/contact">request a quote</Link>.
          </p>
        </div>
        <div className="cs_height_80" />
        <CardSection data={cardData} bgColor="cs_color_1" />
      </>
    );
  }

  const serviceDetailsData = {
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: service.title.replace(/<[^>]+>/g, "").trim() },
    ],
    titleHighlight: service.title,
    video: {
      url: "",
      bgImage: service.image,
      imageContain: service.imageContain || false,
    },
    cta: {
      buttonUrl: "/contact",
      buttonText: "Request a Quote",
      bgImage: service.ctaImage || CTA_BG.url,
    },
    description: service.description,
    iconBoxes: service.iconBoxes,
    secondaryImage: service.secondaryImage || null,
  };

  pageTitle(`${service.title.replace(/<[^>]+>/g, "").trim()} | KJR Property Maintenance`);

  return (
    <>
      <ServiceDetailsSection data={serviceDetailsData} />
      <CardSection data={cardData} bgColor="cs_color_1" />
    </>
  );
}

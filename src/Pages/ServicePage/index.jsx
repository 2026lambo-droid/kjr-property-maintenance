import React from "react";
import PageHeading from "../../Components/PageHeading";
import ServiceSection1 from "../../Components/ServicesSection/ServiceSection1";
import CtaSection from "../../Components/CTASection/CtaSection";
import { pageTitle } from "../../helper";
import {
  SERVICE_HEADING_BG,
  SERVICE_PAGE_CARDS,
  CTA_BG,
} from "../../config/images";

/** Parking lot card: force sweeper image (no window cleaning). Cache-buster ensures updated image loads. */
const parkingLotCardImage = `${SERVICE_PAGE_CARDS.parkingLot}?v=pl`;

export default function ServicePage() {
  const BreadcrumbsData = {
    backgroundImage: SERVICE_HEADING_BG,
    title: "OUR SERVICES",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", active: true },
    ],
  };

  const servicesIntro =
    "We offer day porter services, parking lot sweeping, pressure washing, graffiti removal, and junk/illegal dumping removal for commercial properties in San Jose and the Bay Area. Click a service below to learn more or contact us for a quote.";

  const servicesData = [
    {
      title: "Day Porter Services",
      description:
        "Ongoing cleaning and upkeep of lobbies, common areas, restrooms, and grounds so your property stays presentable every day.",
      imgSrc: SERVICE_PAGE_CARDS.dayPorter,
      link: "/services/day-porter",
    },
    {
      title: "Parking Lot Sweeping",
      description:
        "Sweeping to remove debris, leaves and litter to maintain a clean and safe appearance. <strong>Regular or Monthly.</strong>",
      imgSrc: parkingLotCardImage,
      link: "/services/parking-lot-sweeping",
    },
    {
      title: "Pressure Washing",
      description:
        "Power washing of sidewalks, building exteriors, dumpster pads, and entryways to restore a clean, professional look.",
      imgSrc: SERVICE_PAGE_CARDS.pressureWashing,
      link: "/services/pressure-washing",
    },
    {
      title: "Graffiti Removal",
      description:
        "Quick graffiti removal and cover-up so walls, fences, and surfaces look clean and professional again.",
      imgSrc: SERVICE_PAGE_CARDS.graffitiRemoval,
      link: "/services/graffiti-removal",
    },
    {
      title: "Junk / Illegal Dumping Removal",
      description:
        "Removal of junk, illegal dumping, and bulk debris from lots and common areas so your property stays clear and compliant.",
      imgSrc: SERVICE_PAGE_CARDS.junkRemoval,
      link: "/services/junk-removal",
    },
  ];

  const ctaData = {
    backgroundImage: CTA_BG.url,
    title: "Ready for a professional maintenance partner?<br />Request a quote today.",
    subtitle:
      "Call (408) 502-3188 or request a quote online.",
    buttonText: "Request a Quote",
    buttonUrl: "/contact",
  };

  pageTitle("Services | KJR Property Maintenance");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <div className="cs_height_64 cs_height_lg_50" />
      <div className="container">
        <p className="cs_fs_20 cs_heading_color cs_opacity_8 mb-0 text-center cs_mb_0" style={{ maxWidth: "720px", margin: "0 auto" }}>
          {servicesIntro}
        </p>
      </div>
      <div className="cs_height_64 cs_height_lg_50" />
      <ServiceSection1 data={servicesData} />
      <CtaSection data={ctaData} />
    </>
  );
}

import React from "react";
import PageHeading from "../../Components/PageHeading";
import InfoList from "../../Components/InfoSection";
import CardSection1 from "../../Components/CardSection/CardSection1";
import ProjectSlider from "../../Components/ProjectsSection/ProjectSlider";
import AccordionSection from "../../Components/Accordion";
import { pageTitle } from "../../helper";
import {
  PROJECT_HEADING_BG,
  ABOUT_IMAGE,
  SERVICE_PAGE_CARDS,
  PROJECT_THUMBS,
} from "../../config/images";

export default function ProjectPage() {
  const BreadcrumbsData = {
    backgroundImage: PROJECT_HEADING_BG,
    title: "PROJECTS",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Projects", active: true },
    ],
  };

  const projectIntro =
    "A sample of our commercial property maintenance projects in San Jose and the Bay Area. We work with property managers and owners to deliver day porter services, parking lot sweeping, pressure washing, graffiti removal, and junk removal.";

  const infoData = {
    imageSrc: SERVICE_PAGE_CARDS.dayPorter,
    imageAlt: "Day porter and common area cleaning",
    projectUrl: "/contact",
    title: "DAY PORTER & COMMON AREA CLEANING",
    info: [
      { label: "YEAR", value: "2024" },
      { label: "LOCATION", value: "San Jose, CA" },
      { label: "SERVICE", value: "DAY PORTER" },
    ],
  };

  const infoData1 = {
    imageSrc: SERVICE_PAGE_CARDS.parkingLot,
    imageAlt: "Parking lot sweeping",
    projectUrl: "/contact",
    title: "PARKING LOT SWEEPING",
    info: [
      { label: "YEAR", value: "2024" },
      { label: "LOCATION", value: "Bay Area" },
      { label: "SERVICE", value: "LOT SWEEPING" },
    ],
  };

  const cardData = {
    backgroundImage: SERVICE_PAGE_CARDS.pressureWashing,
    projectUrl: "/contact",
    title: "PRESSURE WASHING & EXTERIOR CLEANUP",
    info: [
      { label: "YEAR", value: "2024" },
      { label: "LOCATION", value: "Commercial property" },
      { label: "SERVICE", value: "PRESSURE WASHING" },
    ],
    descriptionTitle: "DESCRIPTION",
    descriptionText:
      "Power washing of sidewalks, building exteriors, and entryways to restore a clean, professional look for commercial properties.",
    outcomesTitle: "OUTCOMES",
    outcomesText:
      "Clean sidewalks and exteriors <br> Professional appearance <br> Ready for tenants and visitors",
  };

  const projectData = [
    {
      title: "GRAFFITI REMOVAL",
      year: "2024",
      location: "Bay Area",
      service: "GRAFFITI REMOVAL",
      image: PROJECT_THUMBS[0],
      url: "/contact",
    },
    {
      title: "JUNK & DEBRIS REMOVAL",
      year: "2024",
      location: "San Jose, CA",
      service: "JUNK REMOVAL",
      image: PROJECT_THUMBS[1],
      url: "/contact",
    },
    {
      title: "RECURRING MAINTENANCE",
      year: "2024",
      location: "Commercial",
      service: "DAY PORTER",
      image: PROJECT_THUMBS[2],
      url: "/contact",
    },
  ];

  const faqData = {
    sectionTitle: "PROPERTY MAINTENANCE <br><span>FAQ</span>",
    highlightedText: "FAQ",
    subtitle: "F.A.Q",
    image: ABOUT_IMAGE,
    items: [
      {
        question: "How do I get a quote for property maintenance?",
        answer:
          "Call (408) 502-3188 or email kjr.pm23@gmail.com with your property address and the services you need. We’ll respond promptly and can schedule a visit to discuss your needs and provide a clear quote.",
      },
      {
        question: "Do you offer recurring maintenance plans?",
        answer:
          "Yes. We work with property managers to set up day porter services, parking lot sweeping, pressure washing, and other maintenance on a schedule that fits your property and budget.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve San Jose and the greater Bay Area, including commercial buildings, retail centers, HOAs, and common areas.",
      },
      {
        question: "Who do I contact for scheduling?",
        answer:
          "For field and scheduling questions, contact Field Manager Jimmy L. at (408) 502-3188. For general inquiries and quotes, reach Owner Janette Garcilazo at (408) 605-2559 or kjr.pm23@gmail.com.",
      },
    ],
  };

  pageTitle("Projects | KJR Property Maintenance");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <div className="cs_height_64 cs_height_lg_50" />
      <div className="container">
        <p className="cs_fs_20 cs_heading_color cs_opacity_8 mb-0 text-center" style={{ maxWidth: "720px", margin: "0 auto" }}>
          {projectIntro}
        </p>
      </div>
      <div className="cs_height_64 cs_height_lg_50" />
      <InfoList data={infoData} />
      <CardSection1 data={cardData} />
      <InfoList data={infoData1} />
      <hr />
      <ProjectSlider data={projectData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection data={faqData} />
    </>
  );
}

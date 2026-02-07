import React from "react";
import PageHeading from "../../Components/PageHeading";
import ProjectDetailsSection from "../../Components/ProjectDetails";
import RelatedProject from "../../Components/RelatedProject/RelatedProject";
import { pageTitle } from "../../helper";
import {
  PROJECT_HEADING_BG,
  ABOUT_IMAGE,
  SERVICE_PAGE_CARDS,
  PROJECT_THUMBS,
} from "../../config/images";

const BreadcrumbsData = {
  backgroundImage: PROJECT_HEADING_BG,
  title: "PROJECT DETAILS",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: "Project Details", active: true },
  ],
};

const projectData = {
  projectInfo: [
    { label: "YEAR", value: "2024" },
    { label: "LOCATION", value: "SAN JOSE, CA" },
    { label: "SERVICE", value: "PROPERTY MAINTENANCE" },
  ],
  video: {
    url: "",
    thumbnail: ABOUT_IMAGE,
  },
  sliderImages: [PROJECT_THUMBS[0], PROJECT_THUMBS[1], PROJECT_THUMBS[2]],
  description: `KJR Property Maintenance provides commercial property maintenance services throughout San Jose and the Bay Area. We keep commercial buildings, retail centers, and common areas clean, safe, and well-maintained.`,
  outcomes: `Our team focuses on reliability, clear communication, and professional results. From day porter services and parking lot sweeping to pressure washing, graffiti removal, and junk removal, we work with property managers to deliver the maintenance standards your property deserves.`,
  features: [
    { iconClass: "fa6-solid:building", title: "Commercial focus" },
    { iconClass: "fa6-solid:clock", title: "Reliable scheduling" },
    { iconClass: "fa6-solid:spray-can-sparkles", title: "Clean results" },
    { iconClass: "fa6-solid:location-dot", title: "Bay Area local" },
    { iconClass: "fa6-solid:list-check", title: "Tailored plans" },
    { iconClass: "fa6-solid:handshake", title: "Professional partnership" },
  ],
};

const accordionData = {
  sectionTitle: "OUR <span>SERVICES</span>",
  highlightedText: "SERVICES",
  serviceData: [
    {
      img: SERVICE_PAGE_CARDS.dayPorter,
      title: "Day Porter Services",
      description:
        "Ongoing cleaning and upkeep of lobbies, common areas, restrooms, and grounds so your property stays presentable every day.",
      link: "/services/day-porter",
    },
    {
      img: SERVICE_PAGE_CARDS.parkingLot,
      title: "Parking Lot Sweeping",
      description:
        "Regular sweeping of parking lots and driveways to remove debris, leaves, and litter and maintain a clean, safe appearance.",
      link: "/services/parking-lot-sweeping",
    },
    {
      img: SERVICE_PAGE_CARDS.pressureWashing,
      title: "Pressure Washing",
      description:
        "Power washing of sidewalks, building exteriors, dumpster pads, and entryways to restore a clean, professional look.",
      link: "/services/pressure-washing",
    },
    {
      img: SERVICE_PAGE_CARDS.junkRemoval,
      title: "Junk / Illegal Dumping Removal",
      description:
        "Removal of junk, illegal dumping, and bulk debris from lots and common areas so your property stays clear and compliant.",
      link: "/services/junk-removal",
    },
  ],
};

export default function ProjectDetailsPage() {
  pageTitle("Project Details | KJR Property Maintenance");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ProjectDetailsSection data={projectData} />
      <RelatedProject data={accordionData} />
    </>
  );
}

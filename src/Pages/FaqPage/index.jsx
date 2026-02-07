import React from "react";
import PageHeading from "../../Components/PageHeading";
import CardSection from "../../Components/CardSection";
import AccordionSection2 from "../../Components/Accordion/AccordionSection2";
import { pageTitle } from "../../helper";
import { PROJECT_HEADING_BG, CTA_BG, FAQ_IMAGE, FAQ_IMAGE_2 } from "../../config/images";

const BreadcrumbsData = {
  backgroundImage: PROJECT_HEADING_BG,
  title: "FAQs",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "FAQ", active: true },
  ],
};

const cardData = {
  backgroundImage: CTA_BG.url,
  tags: ["Commercial", "San Jose", "Bay Area"],
  title: "Need property maintenance?<br />Request a quote today.",
  buttonLink: "/contact",
};

const faqData = {
  sectionTitle: "Property <span>Maintenance</span>",
  image: FAQ_IMAGE,
  items: [
    {
      question: "How do I get a quote for property maintenance?",
      answer:
        "Call us at (408) 502-3188 or email kjr.pm23@gmail.com with your property address and the services you need. We’ll respond promptly and can schedule a visit to discuss your needs and provide a clear quote.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve San Jose and the greater Bay Area, including commercial properties, retail centers, HOAs, and common areas. Contact us with your location and we’ll confirm we can serve your property.",
    },
    {
      question: "Do you offer recurring maintenance plans?",
      answer:
        "Yes. We work with property managers to set up day porter services, parking lot sweeping, pressure washing, and other maintenance on a schedule that fits your property and budget.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We offer day porter services, parking lot sweeping, pressure washing, graffiti removal, and junk/illegal dumping removal. We can tailor a plan that combines several services for your property.",
    },
  ],
};

const faqData2 = {
  sectionTitle: "Scheduling & <span>Contact</span>",
  image: FAQ_IMAGE_2,
  items: [
    {
      question: "Who do I contact for field or scheduling questions?",
      answer:
        "For day-to-day scheduling and field questions, contact our Field Manager Jimmy L. at (408) 502-3188. For general inquiries and quotes, you can also reach Owner Janette Garcilazo at (408) 605-2559 or kjr.pm23@gmail.com.",
    },
    {
      question: "Do you handle one-time cleanups as well as ongoing service?",
      answer:
        "Yes. We can do one-time pressure washing, graffiti removal, junk removal, or lot sweeping, as well as ongoing day porter and recurring maintenance contracts.",
    },
  ],
};

export default function FaqPage() {
  pageTitle("FAQ | KJR Property Maintenance");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection2 data={faqData} />
      <div className="cs_height_100 cs_height_lg_70" />
      <AccordionSection2 data={faqData2} />
      <div className="cs_height_100 cs_height_lg_70" />
      <CardSection data={cardData} />
    </>
  );
}

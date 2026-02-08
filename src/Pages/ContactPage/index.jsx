import React from "react";
import PageHeading from "../../Components/PageHeading";
import ContactSection from "../../Components/Contact";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import { PROJECT_HEADING_BG, CARD_BG } from "../../config/images";

export default function ContactPage() {
  const BreadcrumbsData = {
    backgroundImage: PROJECT_HEADING_BG,
    title: "CONTACT US",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Contact", active: true },
    ],
  };

  const contactData = {
    mapTitle: "Request a <span>Quote</span>",
    mapIntro:
      "Tell us about your property and the services you need. We'll respond promptly with a quote.",
    sectionTitle: "Get in <span>Touch</span>",
    contactIntro:
      "Reach our Field Manager for scheduling or our Owner for quotes. We serve San Jose and the Bay Area.",
    contactList: [
      {
        label: "FIELD MANAGER",
        value: "(408) 502-3188",
        url: "tel:4085023188",
      },
      {
        label: "OWNER",
        value: "(408) 605-2559",
        url: "tel:4086052559",
      },
      {
        label: "EMAIL",
        value: "kjr.pm23@gmail.com",
        url: "mailto:kjr.pm23@gmail.com",
      },
    ],
    locationUrl:
      "https://www.google.com/maps?q=San+Jose,+CA&output=embed",
    formButtonText: "Send Message",
  };

  const cardData = {
    backgroundImage: CARD_BG,
    tags: ["Commercial", "San Jose", "Bay Area", "Property Maintenance"],
    title: "Professional property maintenance you can depend on.",
    buttonLink: "/services",
  };

  pageTitle("Contact | KJR Property Maintenance");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <ContactSection data={contactData} />
      <CardSection data={cardData} />
    </>
  );
}
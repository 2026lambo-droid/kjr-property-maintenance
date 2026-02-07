import React from "react";
import PageHeading from "../../Components/PageHeading";
import GallerySection from "../../Components/GallerySection";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";
import { PROJECT_HEADING_BG, GALLERY, CTA_BG } from "../../config/images";

const BreadcrumbsData = {
  backgroundImage: PROJECT_HEADING_BG,
  title: "OUR GALLERY",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Gallery", active: true },
  ],
};

const galleryIntro =
  "A look at some of our commercial property maintenance work in San Jose and the Bay Area. From day porter and common area cleaning to parking lot sweeping, pressure washing, and more.";

const cardData = {
  backgroundImage: CTA_BG.url,
  tags: ["Commercial", "San Jose", "Bay Area"],
  title: "Need property maintenance?<br />Request a quote today.",
  buttonLink: "/contact",
};

export default function GalleryPage() {
  pageTitle("Gallery | KJR Property Maintenance");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <div className="cs_height_64 cs_height_lg_50" />
      <div className="container">
        <p className="cs_fs_20 cs_heading_color cs_opacity_8 mb-0 text-center" style={{ maxWidth: "720px", margin: "0 auto" }}>
          {galleryIntro}
        </p>
      </div>
      <div className="cs_height_64 cs_height_lg_50" />
      <GallerySection data={GALLERY} />
      <div className="cs_height_100 cs_height_lg_70" />
      <CardSection data={cardData} />
    </>
  );
}

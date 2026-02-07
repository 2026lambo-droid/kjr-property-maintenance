import React from "react";
import PageHeading from "../../Components/PageHeading";
import Sidebar from "../../Components/Sidebar/Sidebar";
import BlogDetailsSection from "../../Components/BlogsDetails";
import CardSection from "../../Components/CardSection";
import { pageTitle } from "../../helper";

import { PROJECT_HEADING_BG, CTA_BG, BLOG_POST_IMAGE, BLOG_POST_IMAGES } from "../../config/images";

const BreadcrumbsData = {
  backgroundImage: PROJECT_HEADING_BG,
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Blog", link: "/blog" },
    { label: "Post", active: true },
  ],
  title: "Why Commercial Properties Need a Day Porter",
};

const SidebarData = {
  categoriesData: {
    category: "Categories",
    categories: [
      { name: "Property Maintenance", url: "/blog" },
      { name: "Day Porter", url: "/blog" },
      { name: "Pressure Washing", url: "/blog" },
      { name: "Commercial", url: "/blog" },
    ],
  },
  recentPostsData: {
    recentPost: "Recent Posts",
    recentPosts: [
      {
        title: "Why Commercial Properties Need a Day Porter",
        date: "07 Mar 2025",
        image: BLOG_POST_IMAGE,
        url: "/blog/day-porter-benefits",
      },
      {
        title: "Scheduling Pressure Washing for Your Property",
        date: "04 Mar 2025",
        image: BLOG_POST_IMAGE,
        url: "/blog/pressure-washing-scheduling",
      },
      {
        title: "Managing Graffiti and Illegal Dumping Quickly",
        date: "02 Mar 2024",
        image: BLOG_POST_IMAGE,
        url: "/blog/graffiti-and-dumping",
      },
    ],
  },
  archivesData: {
    archive: "Archives",
    archives: [
      { name: "Archives", url: "/archives" },
      { name: "Mar 2025", url: "/archives/2025-03" },
      { name: "Mar 2024", url: "/archives/2024-03" },
    ],
  },
  tagsData: {
    tag: "Tags",
    tags: [
      { name: "Commercial", url: "/blog" },
      { name: "Day Porter", url: "/blog" },
      { name: "Maintenance", url: "/blog" },
    ],
  },
};

const blogData = {
  postThumb: BLOG_POST_IMAGE,
  date: "07 Mar 2025",
  category: { title: "Property Maintenance", url: "/blog" },
  title: "Why Commercial Properties Need a Day Porter",
  content: [
    {
      type: "p",
      text: `Day porter services keep lobbies, common areas, restrooms, and grounds presentable every day. For property managers and commercial building owners, that means tenants and visitors see a clean, professional environment—supporting tenant satisfaction and property value.`,
    },
    {
      type: "blockquote",
      quote: `Professional maintenance isn’t just about cleaning; it’s about consistency. A reliable day porter team means your property looks its best every day, without you having to manage the details.`,
      author: "KJR Property Maintenance",
    },
    {
      type: "p",
      text: `We work with you to set a schedule that fits your property—whether that’s daily, several times per week, or on a custom plan. Our team is reliable, responsive, and focused on maintaining the standards your property deserves. Contact us at (408) 502-3188 or kjr.pm23@gmail.com to discuss your needs.`,
    },
  ],
  images: [BLOG_POST_IMAGES[0], BLOG_POST_IMAGES[1]],
  sections: [
    {
      heading: "What Day Porter Services Include",
      paragraph: `Day porter services typically include cleaning and upkeep of lobbies, hallways, restrooms, break rooms, and common areas. Trash removal, floor care, and restocking supplies are often part of the routine. We tailor the scope to your property and schedule.`,
    },
    {
      heading: "Benefits for Property Managers",
      paragraph: `Consistent day porter service helps maintain property standards, reduces tenant complaints, and supports lease retention. It also frees property managers to focus on leasing and operations instead of coordinating one-off cleanups.`,
    },
  ],
  videoUrl: "",
  closingParagraph: `KJR Property Maintenance provides day porter and commercial property maintenance services in San Jose and the Bay Area. Contact Field Manager Jimmy L. at (408) 502-3188 or Owner Janette Garcilazo at (408) 605-2559 for a quote.`,
  property: {
    title: "Maintain Your Property’s Value",
    description: `Well-maintained common areas and clean lobbies and restrooms support tenant satisfaction and help protect your property’s reputation and value. Regular day porter service is an investment in how your property looks and feels every day.`,
  },
  formTitle: "Leave A Reply",
  formNote:
    "Your email address will not be published. Required fields are marked *",
};

const cardData = {
  backgroundImage: CTA_BG.url,
  tags: ["Commercial", "San Jose", "Bay Area"],
  title: "Need property maintenance?<br />Request a quote today.",
  buttonLink: "/contact",
};

export default function BlogDetailsPage() {
  pageTitle("Blog | KJR Property Maintenance");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="row">
            <BlogDetailsSection data={blogData} />
            <Sidebar data={SidebarData} />
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>
      <CardSection data={cardData} />
    </>
  );
}

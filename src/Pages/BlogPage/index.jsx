import React from "react";
import PageHeading from "../../Components/PageHeading";
import BlogSection from "../../Components/BlogSection";
import CardSection from "../../Components/CardSection";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { pageTitle } from "../../helper";

import { PROJECT_HEADING_BG, CTA_BG, BLOG_POST_IMAGE, BLOG_POST_IMAGES } from "../../config/images";

const BreadcrumbsData = {
  backgroundImage: PROJECT_HEADING_BG,
  title: "BLOG",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Blog", active: true },
  ],
};

const blogIntro =
  "Tips and updates on commercial property maintenance, day porter services, pressure washing, and keeping your property clean and well-maintained in San Jose and the Bay Area.";

const blogData = {
  posts: [
    {
      id: 1,
      image: BLOG_POST_IMAGES[0],
      date: "07 Mar 2025",
      category: "Property Maintenance",
      title: "Why Commercial Properties Need a Day Porter",
      description:
        "Day porter services keep lobbies, common areas, and restrooms presentable every day—supporting tenant satisfaction and property value.",
      link: "/blog/day-porter-benefits",
    },
    {
      id: 2,
      image: BLOG_POST_IMAGES[1],
      date: "04 Mar 2025",
      category: "Maintenance",
      title: "Scheduling Pressure Washing for Your Property",
      description:
        "Regular pressure washing of sidewalks and exteriors helps maintain a professional appearance and can extend the life of surfaces.",
      link: "/blog/pressure-washing-scheduling",
    },
    {
      id: 3,
      image: BLOG_POST_IMAGES[2],
      date: "02 Mar 2024",
      category: "Commercial",
      title: "Managing Graffiti and Illegal Dumping Quickly",
      description:
        "Quick response to graffiti and illegal dumping keeps your property looking clean and sends a clear message that the property is well maintained.",
      link: "/blog/graffiti-and-dumping",
    },
  ],
  pagination: [1, 2, 3, 4],
};

const cardData = {
  backgroundImage: CTA_BG.url,
  tags: ["Commercial", "San Jose", "Bay Area"],
  title: "Need property maintenance?<br />Request a quote today.",
  buttonLink: "/contact",
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
        image: BLOG_POST_IMAGES[0],
        url: "/blog/day-porter-benefits",
      },
      {
        title: "Scheduling Pressure Washing for Your Property",
        date: "04 Mar 2025",
        image: BLOG_POST_IMAGES[1],
        url: "/blog/pressure-washing-scheduling",
      },
      {
        title: "Managing Graffiti and Illegal Dumping Quickly",
        date: "02 Mar 2024",
        image: BLOG_POST_IMAGES[2],
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
      { name: "Pressure Washing", url: "/blog" },
      { name: "Maintenance", url: "/blog" },
    ],
  },
};

export default function BlogPage() {
  pageTitle("Blog | KJR Property Maintenance");
  return (
    <>
      <PageHeading data={BreadcrumbsData} />
      <section>
        <div className="cs_height_64 cs_height_lg_50" />
        <div className="container">
          <p className="cs_fs_20 cs_heading_color cs_opacity_8 mb-0 text-center cs_mb_40" style={{ maxWidth: "720px", margin: "0 auto" }}>
            {blogIntro}
          </p>
          <div className="row">
            <BlogSection data={blogData} />
            <Sidebar data={SidebarData} />
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>
      <CardSection data={cardData} />
    </>
  );
}

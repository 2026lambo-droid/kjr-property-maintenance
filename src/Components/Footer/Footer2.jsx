import React from "react";
import { Link } from "react-router-dom";

const data = {
  businessName: "KJR Property Maintenance",
  serviceArea: "Serving San Jose & the Bay Area",
  tagline:
    "Day porter, pressure washing, graffiti removal, and more. Your trusted partner for clean, well-maintained properties.",
  newsletterTitle: "EMAIL",
  newsletterEmail: "kjr.pm23@gmail.com",
  newsletterPlaceholder: "Your email address",
  menus: [
    {
      title: "PAGES",
      links: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Projects", url: "/projects" },
        { label: "Gallery", url: "/gallery" },
        { label: "Blog", url: "/blog" },
        { label: "FAQ", url: "/faq" },
        { label: "Contact", url: "/contact" },
      ],
    },
    {
      title: "SERVICES",
      links: [
        { label: "Day Porter Services", url: "/services" },
        { label: "Junk Removal", url: "/services" },
        { label: "Graffiti Removal", url: "/services" },
        { label: "Pressure Washing", url: "/services" },
        { label: "Parking Lot Sweeping", url: "/services" },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { label: "Field Manager: (408) 502-3188", url: "tel:4085023188" },
        { label: "Owner: (408) 605-2559", url: "tel:4086052559" },
        { label: "kjr.pm23@gmail.com", url: "mailto:kjr.pm23@gmail.com" },
      ],
    },
  ],
  copyright: "© 2025 KJR Property Maintenance. All rights reserved.",
};

export default function Footer2() {
  return (
    <footer className={`cs_footer cs_style_1 cs_color_2`}>
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_text_widget">
                <Link to="/" className="cs_footer_logo_wrap cs_footer_logo_text">
                  <span className="cs_footer_logo_wordmark">KJR</span>
                  <span className="cs_footer_logo_tagline">Property Maintenance</span>
                </Link>
                <p className="cs_fs_16 cs_heading_color cs_opacity_7_5 mb-0 cs_mt_12">
                  {data.serviceArea}
                </p>
                {data.tagline && (
                  <p className="cs_fs_14 cs_heading_color cs_opacity_7 cs_mt_8 mb-0">
                    {data.tagline}
                  </p>
                )}
              </div>
            </div>
            <div className="cs_footer_widget cs_mt_32">
              <h4 className="cs_footer_widget_title">{data.newsletterTitle}</h4>
              <a href={`mailto:${data.newsletterEmail}`} className="cs_fs_16 d-block mb-3" style={{ opacity: 0.9 }}>
                {data.newsletterEmail}
              </a>
              <div className="cs_newsletter cs_style_1">
                <form className="cs_newsletter_form" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    name="email"
                    className="cs_newsletter_input cs_radius_6"
                    placeholder={data.newsletterPlaceholder}
                    required
                  />
                  <button type="submit" className="cs_newsletter_btn cs_btn cs_style_1 cs_center cs_heading_bg cs_white_color cs_radius_6">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 3.75H17.5V16.25H2.5V3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 3.75L10 10.625L2.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {data.menus.map((menu, i) => (
            <div className="cs_footer_col" key={i}>
              <div className="cs_footer_widget">
                <h4 className="cs_footer_widget_title">{menu.title}</h4>
                <ul className="cs_footer_widget_menu cs_mp_0">
                  {menu.links.map((link, index) => (
                    <li key={index}>
                      {link.url.startsWith("tel:") || link.url.startsWith("mailto:") ? (
                        <a href={link.url}>{link.label}</a>
                      ) : (
                        <Link to={link.url}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cs_bottom_footer">
          <div className="cs_bottom_footer_left" data-aos="fade-right">
            <div className="cs_copyright">{data.copyright}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

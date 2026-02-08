import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const data = {
  logo: "/",
  logoUrl: "/",
  logoIcon: "/assets/img/kjr-logo-icon.svg",
  socialLinks: [
    { name: "Instagram", url: "https://www.instagram.com/kjrpropertymaintenance/", icon: "fa6-brands:instagram" },
    { name: "Facebook", url: "https://www.facebook.com/kjrpropertymaintenance", icon: "fa6-brands:facebook-f" },
  ],
  menuItems: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
    { label: "GALLERY", href: "/gallery" },
    { label: "BLOG", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "CONTACT", href: "/contact" },
  ],
};

const Header = () => {
  const { pathname } = useLocation();
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Use light header (dark logo/text) on pages with light content at top (e.g. day porter, about, contact)
  const isLightTopPage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 100) {
        setIsSticky("cs_sticky_active");
      } else {
        setIsSticky("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 cs_sticky_header ${
          isSticky ? isSticky : ""
        } ${isLightTopPage ? "cs_color_1" : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding cs_logo_icon_and_text" to={data.logoUrl} aria-label="KJR Property Maintenance home">
                  <span className="cs_logo_icon_wrap">
                    <img
                      src="/assets/img/kjr-icon.png"
                      alt=""
                      className="cs_logo_icon_img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling?.classList.add('cs_logo_icon_fallback_show');
                      }}
                    />
                    <svg className="cs_logo_icon_fallback" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="72" height="72" aria-hidden>
                      <circle cx="32" cy="32" r="28" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="cs_logo_wordmark">KJR</span>
                  <span className="cs_logo_tagline">Property Maintenance</span>
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_heading_color">
                  <nav
                    className={`cs_nav_list_wrap text-uppercase ${
                      isShowMobileMenu ? "cs_active" : ""
                    }`}
                  >
                    <ul className={`cs_nav_list`}>
                      {data.menuItems.map((item, index) => (
                        <li
                          key={index}
                          className={
                            item.children ? "menu-item-has-children" : ""
                          }
                        >
                          <Link to={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu && "cs_toggle_active"
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_header_icon_btns">
                  {data.socialLinks?.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_header_icon_btn cs_center"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon icon={social.icon} width="20" height="20" />
                    </a>
                  ))}
                  <a href="tel:4085023188" className="cs_header_icon_btn cs_center" title="Call (408) 502-3188">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <button
                    type="button"
                    className="cs_header_icon_btn cs_search_tobble_btn cs_center"
                    onClick={() => setIsSearchActive(!isSearchActive)}
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M19.7556 18.5774L14.0682 12.89C15.1699 11.5292 15.8332 9.8 15.8332 7.91669C15.8332 3.55174 12.2815 9.15527e-05 7.91656 9.15527e-05C3.55161 9.15527e-05 0 3.5517 0 7.91666C0 12.2816 3.55165 15.8333 7.9166 15.8333C9.7999 15.8333 11.5291 15.1699 12.8899 14.0683L18.5773 19.7557C18.7398 19.9182 18.9531 19.9999 19.1665 19.9999C19.3798 19.9999 19.5932 19.9182 19.7557 19.7557C20.0815 19.4299 20.0815 18.9032 19.7556 18.5774ZM7.9166 14.1666C4.46996 14.1666 1.66666 11.3633 1.66666 7.91666C1.66666 4.47001 4.46996 1.66672 7.9166 1.66672C11.3632 1.66672 14.1665 4.47001 14.1665 7.91666C14.1665 11.3633 11.3632 14.1666 7.9166 14.1666Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={20} height={20} fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`cs_header_form_wrap cs_center ${
          isSearchActive ? "active" : ""
        }`}
      >
        <div
          className="cs_header_form_overlay"
          onClick={() => setIsSearchActive(!isSearchActive)}
        />
        <form action="#" className="cs_header_form">
          <input
            type="text"
            className="cs_header_form_input"
            placeholder="Search..."
          />
          <button type="button" className="cs_header_form_btn cs_center">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M19.7556 18.5774L14.0682 12.89C15.1699 11.5292 15.8332 9.8 15.8332 7.91669C15.8332 3.55174 12.2815 9.15527e-05 7.91656 9.15527e-05C3.55161 9.15527e-05 0 3.5517 0 7.91666C0 12.2816 3.55165 15.8333 7.9166 15.8333C9.7999 15.8333 11.5291 15.1699 12.8899 14.0683L18.5773 19.7557C18.7398 19.9182 18.9531 19.9999 19.1665 19.9999C19.3798 19.9999 19.5932 19.9182 19.7557 19.7557C20.0815 19.4299 20.0815 18.9032 19.7556 18.5774ZM7.9166 14.1666C4.46996 14.1666 1.66666 11.3633 1.66666 7.91666C1.66666 4.47001 4.46996 1.66672 7.9166 1.66672C11.3632 1.66672 14.1665 4.47001 14.1665 7.91666C14.1665 11.3633 11.3632 14.1666 7.9166 14.1666Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath>
                  <rect width={20} height={20} fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;

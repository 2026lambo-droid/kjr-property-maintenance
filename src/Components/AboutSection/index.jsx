import React from "react";

export default function AboutSection({ data }) {
  return (
    <section>
      <div className="cs_height_80 cs_height_lg_60" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_text_center">
          <h2
            className="cs_section_title cs_fs_48 cs_bold mb-0"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          {data.subtitle && (
            <p className="cs_section_subtitle cs_fs_20 cs_heading_color cs_opacity_8 mb-0 cs_mt_16">
              {data.subtitle}
            </p>
          )}
        </div>
        <div className="cs_height_40 cs_height_lg_30" />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="cs_about_content cs_fs_20 text-center cs_heading_color cs_opacity_8"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_60" />
    </section>
  );
}

import React from "react";
import { RichText } from "prismic-reactjs";

const AboutMe = ({ slice }) => (
    <section className="about_me" id="about">
        <div className="db_site_margins">
            <div className="about_picture_section">
                <div
                    className="about_profile_pic"
                    style={{
                        backgroundImage: `url(${slice.primary.aboutMeImage.url})`,
                    }}
                ></div>
            </div>
            <div className="about_content">
                <div className="section_title">
                    {slice.primary.title ? (
                        <RichText render={slice.primary.title} />
                    ) : (
                        <h2>Template slice, update me!</h2>
                    )}
                </div>
                {slice.primary.description ? (
                    <RichText render={slice.primary.description} />
                ) : (
                    <p>
                        start by editing this slice from inside Prismic builder!
                    </p>
                )}
            </div>
        </div>
        <style jsx>{`
            section {
                max-width: 600px;
                margin: 4em auto;
                text-align: center;
            }
            .title {
                color: #8592e0;
            }
        `}</style>
    </section>
);

export default AboutMe;

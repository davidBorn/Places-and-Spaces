import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";

const Contact = ({ slice }) => (
    <section id="Contact" className="conatact_section">
        <div className="db_site_margins">
            <div
                className="contact-image"
                style={{
                    backgroundImage: `url(${slice.primary.ContactImageField.url})`,
                }}
            >
                <div className="contactCard">
                    <div className="section_title">
                        <RichText render={slice.primary.title} />
                    </div>
                    <div className="contact_info">
                        <div className="phone_number_section">
                            <span className="phone_label">
                                {slice.primary.PhoneLabel}
                            </span>
                            <p className="phone_number">
                                <a href={Link.url(slice.primary.PhoneNumber)}>
                                    {slice.primary.PhoneNumberText}
                                </a>
                            </p>
                        </div>
                        <div className="email_section">
                            <span className="email_label">
                                {slice.primary.EmailLabel}
                            </span>
                            <p className="email">
                                <a href={Link.url(slice.primary.Email)}>
                                    {slice.primary.EmailText}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
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

export default Contact;

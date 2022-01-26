import React from "react";
import { RichText } from "prismic-reactjs";

const Testimonials = ({ slice }) => (
    <section id="Testimonials">
        <div className="db_site_margins">
            <div className="section_title">
                {slice.primary.title ? (
                    <RichText render={slice.primary.title} />
                ) : (
                    <h2>Template slice, update me!</h2>
                )}
            </div>
            <div className="testimonial-items">
                {slice.items.map((item, i) => (
                    <div key={i} className="testimonial-item">
                        <div className="testimonial-content">
                            <RichText render={item.Quote} />
                            <p className="testimonial-name">
                                <span>-</span>
                                <span>
                                    <RichText render={item.Name} />
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
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

export default Testimonials;

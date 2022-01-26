import React from "react";
import { RichText } from "prismic-reactjs";

const ServicesAndBenfits = ({ slice }) => (
    <section id="services-and-benefits" className="blue_section">
        <div className="db_site_margins">
            <div className="section_title">
                {slice.primary.title ? (
                    <RichText render={slice.primary.title} />
                ) : (
                    <h2>Template slice, update me!</h2>
                )}
                {slice.primary.description ? (
                    <RichText render={slice.primary.description} />
                ) : null}
            </div>
            <div className="item-container">
                {slice.items.map((item, i) => (
                    <div key={i} className="item">
                        <div className="item_title">
                            <RichText render={item.ItemTitle} />
                        </div>

                        <div className="item_description">
                            <RichText render={item.ItemDescription} />
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

export default ServicesAndBenfits;

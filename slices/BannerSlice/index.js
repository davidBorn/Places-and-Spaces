import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";

const BannerSlice = ({ slice }) => (
    <div>
        <section className="banner-section">
            <div
                className="banner-right-image"
                style={{
                    backgroundImage: `url(${slice.primary.bannerImage.url})`,
                }}
            ></div>
            <div className="db_site_margins">
                <div className="banner-content-container">
                    <div className="banner_title">
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
                            start by editing this slice from inside Prismic
                            builder!
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
    </div>
);

export default BannerSlice;

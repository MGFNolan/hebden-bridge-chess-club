import { WhatWeOfferContent } from "../utils/content";
import Card from "./Card";

export default function WhatWeOffer() {
    return (
        <section
            id="what-we-offer"
            className="what-we-offer"
            aria-labelledby="what-we-offer-heading"
        >
            <div className="container">
                <h2 className="what-we-offer__title" id="what-we-offer-heading">
                    What We Offer
                </h2>
                <ul className="what-we-offer__card-container">
                    {WhatWeOfferContent.map((info) => (
                        <Card information={info} key={info.id} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

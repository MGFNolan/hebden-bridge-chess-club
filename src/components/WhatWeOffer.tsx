import { WhatWeOfferContent } from "../utils/content";
import Card from "./Card";

export default function WhatWeOffer() {
    return (
        <section id="what-we-offer" className="what-we-offer">
            <div>
                <h2 className="what-we-offer__title">What We Offer</h2>
                <div className="what-we-offer__card-container">
                    {WhatWeOfferContent.map((info) => (
                        <Card information={info} key={info.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

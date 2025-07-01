import type { WhatWeOffer } from "../utils/contentTypes";
interface Information {
    information: WhatWeOffer;
}
export default function Card({ information }: Information) {
    return (
        <div key={information.id} className="card">
            <div className="matt">
                <img
                    src={information.image}
                    alt={information.alt}
                    className="card__img"
                />
            </div>

            <div className="card__text">
                <h3 className="card__text__title">{information.title}</h3>
                <p className="card__text__description">
                    {information.description}
                </p>
            </div>
        </div>
    );
}

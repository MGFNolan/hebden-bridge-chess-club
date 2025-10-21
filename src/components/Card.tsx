import type { WhatWeOffer } from "../utils/contentTypes";
interface Information {
    information: WhatWeOffer;
}
export default function Card({ information }: Information) {
    return (
        <li className="card" aria-labelledby={`card-title-${information.id}`}>
            <div>
                <img
                    src={information.image}
                    alt={information.alt}
                    className="card__img"
                />
            </div>

            <div className="card__text">
                <h3
                    className="card__text__title"
                    id={`card-title-${information.id}`}
                >
                    {information.title}
                </h3>
                <p className="card__text__description">
                    {information.description}
                </p>
            </div>
        </li>
    );
}

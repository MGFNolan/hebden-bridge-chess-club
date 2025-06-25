import { type ClubInformation } from "../../utils/contentTypes";

interface Information {
    information: ClubInformation;
}

export default function ClubInformationIndividual({
    information,
}: Information) {
    return (
        <li
            className="info-individual"
            role="listitem"
            aria-label={`Club information: ${information.title}`}
        >
            <div className="info-individual__wrapper">
                <h3
                    className="info-individual__title"
                    id={`info-title-${information.id}`}
                >
                    {information.title}
                </h3>
                <p
                    className="info-individual__desciption"
                    aria-describedby={`info-title-${information.id}`}
                >
                    {information.description}
                </p>
            </div>
        </li>
    );
}

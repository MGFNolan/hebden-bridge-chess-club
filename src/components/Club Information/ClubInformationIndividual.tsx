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
            aria-labelledby={`info-title-${information.id}`}
        >
            <div className="info-individual__wrapper">
                <h3
                    className="info-individual__title"
                    id={`info-title-${information.id}`}
                >
                    {information.title}
                </h3>
                <div className="info-individual__desciption">
                    {information.description}
                </div>
            </div>
        </li>
    );
}

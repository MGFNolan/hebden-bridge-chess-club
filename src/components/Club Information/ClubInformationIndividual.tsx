import { type ClubInformation } from "../../utils/contentTypes";

interface Information {
    information: ClubInformation;
}

export default function ClubInformationIndividual({
    information,
}: Information) {
    return (
        <li key={information.id} className="info-individual">
            <div className="info-individual__wrapper">
                <h3 className="info-individual__title">{information.title}</h3>
                <p className="info-individual__desciption">
                    {information.description}
                </p>
            </div>
        </li>
    );
}

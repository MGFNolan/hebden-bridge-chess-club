import { type ClubInformation } from "../../utils/contentTypes";

interface Information {
    information: ClubInformation;
}

export default function ClubInformationIndividual({
    information,
}: Information) {
    return (
        <li key={information.id} className="Info-Individual">
            <div className="Info-Individual__wrapper">
                <h3 className="Info-Individual__title">{information.title}</h3>
                <p className="Info-Individual__desciption">
                    {information.description}
                </p>
            </div>
        </li>
    );
}

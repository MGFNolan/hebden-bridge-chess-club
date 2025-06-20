import ClubInformationIndividual from "./ClubInformationIndividual";
import { ClubInformationContent } from "../../utils/content";

export default function ClubInformation() {
    return (
        <section id="club-information" className="club-information">
            <div className="club-information__wrapper">
                <h2 className="club-information__title">Club Information</h2>
                <ul className="club-information__list">
                    {ClubInformationContent.map((info) => (
                        <ClubInformationIndividual
                            information={info}
                            key={info.id}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

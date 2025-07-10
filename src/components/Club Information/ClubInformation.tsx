import ClubInformationIndividual from "./ClubInformationIndividual";

export default function ClubInformation() {
    return (
        <section
            id="club-information"
            className="club-information"
            aria-labelledby="club-information-heading"
        >
            <div className="container">
                <div className="club-information__wrapper">
                    <h2
                        className="club-information__title"
                        id="club-information-heading"
                    >
                        Club Information
                    </h2>
                    <p className="club-information__lede">
                        Everyone is welcome to join us at The Trades club in
                        Hebden Bridge, every Monday from 19:30!
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.753193620293!2d-2.016736422931863!3d53.74047034516063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bea674613ed0f%3A0xa6c106b6b47c9124!2sTrades%20Club!5e0!3m2!1sen!2suk!4v1752154348422!5m2!1sen!2suk"
                        allowFullScreen={undefined}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="location-map"
                    ></iframe>
                    <ul className="club-information__list" role="list">
                        <ClubInformationIndividual
                            information={{
                                id: 1,
                                title: "Membership",
                                description: (
                                    <>
                                        Anyone is welcome to come along and play
                                        some social chess and see how they like
                                        the club! <br /> If you'd like to then
                                        become a member, we charge an annual
                                        membership fee which runs from September
                                        1st to August 31st:
                                        <br />
                                        <br />
                                        £30 for adults (reduced to £20 for
                                        members of the Trades Club)
                                    </>
                                ),
                            }}
                        />
                        <ClubInformationIndividual
                            information={{
                                id: 2,
                                title: "Junior Chess",
                                description: (
                                    <>
                                        Unfortunately, we do not currently have
                                        a junior chess club. Since the pandemic
                                        we have made several attempts to
                                        re-establish a separate junior club with
                                        its own coach, so far without success.{" "}
                                        <br />
                                        However, we are still trying to get
                                        something organised. If you would like
                                        to register your interest in a junior
                                        club with us, please email us at{" "}
                                        <span className="email">
                                            hebdenbridgechessclub@gmail.com
                                        </span>{" "}
                                        or the Contact Form below, and we'll let
                                        you know of any change in circumstances.
                                    </>
                                ),
                            }}
                        />
                        <ClubInformationIndividual
                            information={{
                                id: 3,
                                title: "League Chess",
                                description: (
                                    <>
                                        If it's competitive chess you're after,
                                        then you've come to the right place!
                                        <br /> Last season we had four teams
                                        participating in the Calderdale Chess
                                        League and our B team became league
                                        champions for 2024-25. The club also won
                                        League 1 in 2022-23, 2021-22 and in
                                        2018-19 and we are current holders of
                                        the Calderdale Chess Team Lightning
                                        title.
                                        <br /> We also take part in online
                                        events and have three teams in the 4
                                        Nations Chess League (4NCL) Online
                                        competition. Our first team won the
                                        Division 2 title in season 7, Division 3
                                        in seasons 6 and 5, and the Division 5
                                        title in season 4.
                                    </>
                                ),
                            }}
                        />
                        <ClubInformationIndividual
                            information={{
                                id: 4,
                                title: "Social Chess",
                                description: (
                                    <>
                                        If you aren’t yet ready to take the
                                        plunge into competitive chess, then
                                        that’s no problem.
                                        <br /> We run a range of run and
                                        educational activities over the summer
                                        months and social chess is always
                                        available to anyone that wants a game
                                        right through the year. You’ll have the
                                        opportunity to play against a range of
                                        opponents and get tips from some of our
                                        more experienced players if you so wish.
                                    </>
                                ),
                            }}
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
}

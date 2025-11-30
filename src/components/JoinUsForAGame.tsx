import { useEffect } from "react";

function JoinUsForAGame() {
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === "#contact-us") {
                document.getElementById("name")?.focus({ preventScroll: true });
            }
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <section
            className="join-game"
            id="join-us-for-a-game"
            aria-labelledby="join-game-heading"
        >
            <div className="container">
                <h2 id="join-game-heading">Join us For a Game?</h2>

                <p className="join-game__text">
                    It doesn’t matter whether you’re new to chess, an online
                    player who wants to experience ‘over the board’ chess, a
                    lapsed player who’s returning to the game, or an experienced
                    wood pusher. Please come and join us at{" "}
                    <em>Hebden Bridge’s Trades Club</em> on{" "}
                    <em>Monday nights from 19:30</em>. We’re there most weeks.
                </p>
                <p className="join-game__text">
                    Anyone <strong>over the age of 16</strong> and of{" "}
                    <em>any level of playing ability</em> is welcome!
                </p>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.753193620293!2d-2.016736422931863!3d53.74047034516063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bea674613ed0f%3A0xa6c106b6b47c9124!2sTrades%20Club!5e0!3m2!1sen!2suk!4v1752154348422!5m2!1sen!2suk"
                    allowFullScreen={undefined}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="location-map"
                    title="Google Maps showing the location of The Trades Club in Hebden Bridge"
                ></iframe>
            </div>
        </section>
    );
}

export default JoinUsForAGame;

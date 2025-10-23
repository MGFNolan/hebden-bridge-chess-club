import { useEffect } from "react";

function JoinUsForAGame() {
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === "#contact-us") {
                document.getElementById("name")?.focus();
            }
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <section className="join-game" aria-labelledby="join-game-heading">
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

                <a href="#contact-us" className="btn--primary join-game__btn">
                    Contact Us
                </a>
            </div>
        </section>
    );
}

export default JoinUsForAGame;

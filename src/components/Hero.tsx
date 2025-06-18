export default function Hero() {
    return (
        <section
            id="hero"
            className="hero"
            aria-label="Hero section: Welcome message and contact information"
        >
            <div className="hero__bg">
                <div className="hero__text">
                    <h1 className="hero__text__title">
                        Hebden Bridge Chess Club
                    </h1>
                    <p className="hero__text__lede">
                        No matter whether you’re new to chess, an online player
                        who wants to try playing over the board, a lapsed player
                        who is returning to the game, or an experienced wood
                        pusher, you are most welcome to join us at Hebden Bridge
                        Trades Club on a Monday night from 19:30. <br />
                        We’re there most weeks. Any one{' '}
                        <strong>over the age of 16</strong> and of{' '}
                        <strong>any level of playing ability</strong> is welcome
                        to join us for a game!
                    </p>
                    <button
                        onClick={() => {
                            const target = document.getElementById('contact');
                            target?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn--primary"
                        aria-label="Scroll to contact section"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}

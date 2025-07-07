import { ContactOptionsContent } from "../utils/content";

export default function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const formObject = Object.fromEntries(data.entries());
        console.log("Form Data:", formObject);
        // Send with EmailJS or other handler here
    };

    return (
        <section id="contact-us">
            <div className="container">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className="contact-us">
                    <label className="contact-us__label" htmlFor="name">
                        Your Name
                    </label>
                    <input
                        autoComplete="name"
                        className="contact-us__name"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Write your name here"
                    />

                    <label className="contact-us__label" htmlFor="email">
                        Email
                    </label>
                    <input
                        autoComplete="email"
                        className="contact-us__email"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Write your email here so we can reply to you"
                    />

                    <label className="contact-us__label" htmlFor="subject">
                        Subject
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        className="contact-us__subject"
                    >
                        <option value="" disabled selected>
                            Message subject
                        </option>
                        {ContactOptionsContent.map((option) => (
                            <option value={option.option} key={option.id}>
                                {option.option}
                            </option>
                        ))}
                    </select>

                    <label className="contact-us__label" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here"
                        style={{ height: "200px" }}
                        className="contact-us__message"
                    />

                    <button
                        type="submit"
                        className="btn--primary contact-us__btn"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

import { useState } from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import { ContactOptionsContent } from "../utils/content";
import emailjs from "@emailjs/browser";
import { FORM_STATE_DURATION } from "../utils/constants";

interface FormState {
    currentState: "idle" | "pending" | "success" | "error";
    errorMessage: string | null;
}

const buttonStateClasses = {
    idle: "btn--idle",
    pending: "btn--pending",
    success: "btn--success",
    error: "btn--error",
};

export default function ContactForm() {
    const [formState, setFormState] = useState<FormState>({
        currentState: "idle",
        errorMessage: null,
    });

    const { values, handleChange, errors, isValid, resetForm } =
        useFormAndValidation({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValid) {
            setFormState({ currentState: "pending", errorMessage: null });

            emailjs.init({
                publicKey: "k62o7U8zlSTZ0XtRO",
            });

            emailjs
                .sendForm(
                    "service_vf2whh5",
                    "template_sdgdvkq",
                    "#contact-us-form"
                )
                .then(
                    (response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        handleSuccess();
                    },
                    (error) => {
                        console.log("FAILED...", error);
                        handleError(error);
                    }
                );
            resetForm();
        }
    };

    function handleSuccess() {
        resetForm();
        setFormState({ currentState: "success", errorMessage: null });

        // Tell the browser to run this function after 1250 ms, reset form state
        setTimeout(
            () => setFormState({ currentState: "idle", errorMessage: null }),
            FORM_STATE_DURATION
        );
    }

    function handleError(error: Error) {
        setFormState({ currentState: "error", errorMessage: error.message });

        setTimeout(
            () => setFormState({ currentState: "idle", errorMessage: null }),
            FORM_STATE_DURATION
        );
    }

    return (
        <section id="contact-us" aria-labelledby="contact-us-heading">
            <div className="container contact-us">
                <h2 id="contact-us-heading">Contact Us</h2>
                <form
                    onSubmit={handleSubmit}
                    className="contact-us-form"
                    id="contact-us-form"
                >
                    <label className="contact-us__label" htmlFor="name">
                        <p>
                            Name <span className="mandatory">*</span>
                        </p>

                        <input
                            autoComplete="name"
                            className="contact-us__name"
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Write your name here"
                            minLength={3}
                            maxLength={50}
                            pattern="[^.]*?"
                            aria-required="true"
                            required
                        />
                        {errors.name && (
                            <p className="error-message" role="alertdialog">
                                {errors.name}
                            </p>
                        )}
                    </label>

                    <label className="contact-us__label" htmlFor="email">
                        <p>
                            Email <span className="mandatory">*</span>
                        </p>

                        <input
                            autoComplete="email"
                            className="contact-us__email"
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Write your email here so we can reply to you"
                            minLength={3}
                            maxLength={50}
                            aria-required="true"
                            required
                        />
                        {errors.email && (
                            <p className="error-message" role="alertdialog">
                                {errors.email}
                            </p>
                        )}
                    </label>

                    <label className="contact-us__label" htmlFor="subject">
                        <p>
                            Subject <span className="mandatory">*</span>
                        </p>

                        <select
                            id="subject"
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                            className="contact-us__subject"
                            required
                            aria-required="true"
                        >
                            <option value="" disabled>
                                Choose a subject{" "}
                            </option>

                            {ContactOptionsContent.map((option) => (
                                <option value={option.option} key={option.id}>
                                    {option.option}
                                </option>
                            ))}
                        </select>
                        {errors.subject && (
                            <p className="error-message" role="alertdialog">
                                {errors.subject}
                            </p>
                        )}
                    </label>

                    <label className="contact-us__label" htmlFor="message">
                        <p>
                            Message <span className="mandatory">*</span>
                        </p>

                        <textarea
                            id="message"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            style={{ height: "200px" }}
                            className="contact-us__message"
                            minLength={3}
                            aria-required="true"
                            required
                        />
                        {errors.message && (
                            <p className="error-message" role="alertdialog">
                                {errors.message}
                            </p>
                        )}
                    </label>

                    <button
                        type="submit"
                        className={`btn--primary contact-us__btn ${
                            buttonStateClasses[formState.currentState]
                        }`}
                        disabled={formState.currentState !== "idle"}
                    >
                        {formState.currentState === "idle" && "Submit"}
                        {formState.currentState === "pending" &&
                            "Submitting..."}
                        {formState.currentState === "success" && "Success!"}
                        {formState.currentState === "error" &&
                            "Submission Failed"}
                    </button>
                </form>
            </div>
        </section>
    );
}

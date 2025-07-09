import "./index.css";

import MenuContextProvider from "./context/MobileMenuContext";
import Page from "./components/Page";

//Header
import Header from "./components/Header";
import NavBar from "./components/Navigation/NavBar";
import Hero from "./components/Hero";
import MobileNav from "./components/Navigation/MobileNav";

//Main
import Main from "./components/Main";
import ClubInformation from "./components/Club Information/ClubInformation";
import WhatWeOffer from "./components/WhatWeOffer";
import ImageGallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";

//Footer
import Footer from "./components/Footer";

function App() {
    return (
        <MenuContextProvider>
            <Page>
                <Header>
                    <NavBar />
                    <Hero />
                    <MobileNav />
                </Header>

                <Main>
                    <ClubInformation />
                    <WhatWeOffer />
                    <ImageGallery />
                    <ContactForm />
                </Main>

                <Footer />
            </Page>
        </MenuContextProvider>
    );
}

export default App;

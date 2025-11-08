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
import WhatWeOffer from "./components/WhatWeOffer";
// import ImageGallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import JoinUsForAGame from "./components/JoinUsForAGame";
import ImageGallery from "./components/gallery/ImageGallery";

//Footer
import Footer from "./components/Footer";

import { GalleryContent } from "./utils/content";

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
                    <JoinUsForAGame />

                    <WhatWeOffer />
                    {/* <ImageGallery /> */}
                    <ImageGallery images={GalleryContent} />

                    <ContactForm />
                </Main>

                <Footer />
            </Page>
        </MenuContextProvider>
    );
}

export default App;

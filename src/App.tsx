import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//Styling
import "./index.css";

//React Query
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
import ContactForm from "./components/ContactForm";
import JoinUsForAGame from "./components/JoinUsForAGame";
import ImageGallery from "./components/gallery/ImageGallery";

//Footer
import Footer from "./components/Footer";

//Data
import { GalleryContent } from "./utils/content";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
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
                        <ImageGallery images={GalleryContent} />

                        <ContactForm />
                    </Main>

                    <Footer />
                </Page>
            </MenuContextProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;

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
import ImageGallery from "./components/gallery/Gallery";

//Footer
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <div>
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
                        <ImageGallery />

                        <ContactForm />
                    </Main>

                    <Footer />
                </Page>
            </MenuContextProvider>
            <ReactQueryDevtools />
        </div>
        </QueryClientProvider>
    );
}

export default App;

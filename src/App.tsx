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
                </Main>
            </Page>
        </MenuContextProvider>
    );
}

export default App;

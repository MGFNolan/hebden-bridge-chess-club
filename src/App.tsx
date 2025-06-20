import './index.css';

import NavBar from './components/Navigation/NavBar';
import Page from './components/Page';
import Header from './components/Header';

//Mobile Nav
import MenuContextProvider from './context/MobileMenuContext';
import MobileNav from './components/Navigation/MobileNav';
import Hero from './components/Hero';

//Main
import Main from './components/Main';

function App() {
    return (
        <MenuContextProvider>
            <Page>
                <Header>
                    <NavBar />
                    <Hero />
                    <MobileNav />
                </Header>

                <Main></Main>
            </Page>
        </MenuContextProvider>
    );
}

export default App;

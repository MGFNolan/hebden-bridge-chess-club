import './index.css';

import NavBar from './components/Navigation/NavBar';
import Page from './components/Page';
import Header from './components/Header';

//Mobile Nav
import MenuContextProvider from './context/MobileMenuContext';
import MobileNav from './components/Navigation/MobileNav';
import Hero from './components/Hero';

function App() {
    return (
        <MenuContextProvider>
            <Page>
                <Header>
                    <NavBar />
                    <Hero />
                    <MobileNav />
                </Header>
            </Page>
        </MenuContextProvider>
    );
}

export default App;

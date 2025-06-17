import './index.css';

import NavBar from './components/Navigation/NavBar';
import Page from './components/Page';
import Header from './components/Header';

//Mobile Nav
import MenuContextProvider from './context/MobileMenuContext';
import MobileNav from './components/Navigation/MobileNav';

function App() {
    return (
        <MenuContextProvider>
            <Page>
                <Header>
                    <NavBar />
                    <MobileNav />
                </Header>
            </Page>
        </MenuContextProvider>
    );
}

export default App;

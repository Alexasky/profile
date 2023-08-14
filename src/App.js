import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { NotFound } from './pages/NotFound';
import { Up } from './components/Up/Up';
import { ScrollToTop } from './hooks/ScrollToTop';

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        {/* Not found routes work as you'd expect */}
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
                <Up />
            </BrowserRouter>
        </>
    );
}

export default App;

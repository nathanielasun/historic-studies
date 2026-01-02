import Header from './Header/Header';
import Footer from './Footer/Footer';

/**
 * Layout component - Provides consistent page structure
 * Wraps all pages with Header and Footer
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

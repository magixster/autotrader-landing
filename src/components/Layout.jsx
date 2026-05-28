import Navbar from './Navbar';
import Ticker from './Ticker';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Ticker />
      <div className="pt-[calc(var(--navbar-height)+36px)]">
        {children}
        <Footer />
      </div>
    </>
  );
}

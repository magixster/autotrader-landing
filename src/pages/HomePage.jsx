import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Products />
      <HowItWorks />
      <ContactForm />
    </Layout>
  );
}

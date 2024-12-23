import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";
import AnimatedTitle from "../_components/shared/AnimatedTitle";

export const metadata = {
  title: 'Contact Us | Pure Organix Store',
  description: 'Get in touch with Pure Organix Store. We\'re here to help with your questions about organic produce and sustainable living.',
  keywords: 'contact, organic store, customer service, support, help, Pure Organix',
  openGraph: {
    title: 'Contact Us | Pure Organix Store',
    description: 'Get in touch with Pure Organix Store. We\'re here to help with your questions about organic produce and sustainable living.',
    images: [
      {
        url: '/images/og/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Pure Organix Store',
      },
    ],
    type: 'website',
    siteName: 'Pure Organix Store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Pure Organix Store',
    description: 'Get in touch with Pure Organix Store. We\'re here to help with your questions about organic produce and sustainable living.',
    images: ['/images/og/contact.jpg'],
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <AnimatedTitle 
          title="Contact Us" 
          subtitle="GET IN TOUCH" 
          accent="emerald"
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 
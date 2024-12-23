import HeroSection from "./_components/HeroSection";
import MissionSection from "./_components/MissionSection";
import TeamSection from "./_components/TeamSection";
import ValuesSection from "./_components/ValuesSection";

export const metadata = {
  title: "About Us | Pure Organix Store",
  description:
    "Learn about Pure Organix Store's mission to provide fresh, organic produce and create a sustainable future for all.",
  keywords:
    "organic store, about us, sustainable farming, fresh produce, local farmers, Pure Organix",
  openGraph: {
    title: "About Us | Pure Organix Store",
    description:
      "Learn about Pure Organix Store's mission to provide fresh, organic produce and create a sustainable future for all.",
    images: [
      {
        url: "/images/og/about.jpg",
        width: 1200,
        height: 630,
        alt: "Pure Organix Store Team",
      },
    ],
    type: "website",
    siteName: "Pure Organix Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Pure Organix Store",
    description:
      "Learn about Pure Organix Store's mission to provide fresh, organic produce and create a sustainable future for all.",
    images: ["/images/og/about.jpg"],
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;

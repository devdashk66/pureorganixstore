"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "/images/team/john.jpg",
    social: {
      facebook: "https://facebook.com/johnsmith",
      instagram: "https://instagram.com/johnsmith",
      tiktok: "https://tiktok.com/@johnsmith"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Head of Operations",
    image: "/images/team/sarah.jpg",
    social: {
      facebook: "https://facebook.com/sarahjohnson",
      instagram: "https://instagram.com/sarahjohnson",
      tiktok: "https://tiktok.com/@sarahjohnson"
    }
  },
  {
    name: "Michael Chen",
    role: "Lead Agriculturist",
    image: "/images/team/michael.jpg",
    social: {
      facebook: "https://facebook.com/michaelchen",
      instagram: "https://instagram.com/michaelchen",
      tiktok: "https://tiktok.com/@michaelchen"
    }
  }
];

const SocialButton = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/5 
             text-primary/60 hover:bg-primary hover:text-white
             transition-colors duration-300"
    aria-label={label}
  >
    <Icon className="w-4 h-4" />
  </motion.a>
);

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-2xl
                       overflow-hidden hover:border-primary/30 transition-all duration-300
                       group"
            >
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  {/* Social Media Links */}
                  <div className="flex items-center gap-2">
                    <SocialButton 
                      href={member.social.facebook}
                      icon={FaFacebookF}
                      label={`${member.name}'s Facebook`}
                    />
                    <SocialButton 
                      href={member.social.instagram}
                      icon={FaInstagram}
                      label={`${member.name}'s Instagram`}
                    />
                    <SocialButton 
                      href={member.social.tiktok}
                      icon={FaTiktok}
                      label={`${member.name}'s TikTok`}
                    />
                  </div>
                </div>
                <p className="text-primary/60 mb-2">{member.role}</p>
                <p className="text-primary/70 mb-4">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

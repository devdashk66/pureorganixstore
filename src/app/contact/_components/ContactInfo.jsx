"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    details: ["123 Organic Lane", "Green City, GC 12345"]
  },
  {
    icon: FaPhone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["info@freshfinds.com", "support@freshfinds.com"]
  },
  {
    icon: FaClock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 9:00 PM", "Sat - Sun: 9:00 AM - 7:00 PM"]
  }
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <div className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-primary/5 text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-medium text-primary mb-1">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-primary/70">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map or additional content can be added here */}
    </motion.div>
  );
};

export default ContactInfo; 
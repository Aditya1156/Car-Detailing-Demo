import { Facebook, Twitter, Youtube, Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = {
  company: [
    { label: "Home", href: "#home" },
    { label: "Gallery", href: "#gallery" },
    { label: "About Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  services: siteConfig.services.map((s) => ({
    label: s.title,
    href: "#services",
  })),
};

const socialIcons = [
  { icon: Facebook, href: siteConfig.social.facebook },
  { icon: Twitter, href: siteConfig.social.twitter },
  { icon: Youtube, href: siteConfig.social.youtube },
  { icon: Instagram, href: siteConfig.social.instagram },
  { icon: MessageCircle, href: `https://wa.me/${siteConfig.whatsapp}` },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A1</span>
              </div>
              <span className="text-white font-bold text-lg">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-card rounded-lg flex items-center justify-center text-muted hover:text-white hover:bg-accent transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted text-sm">
              <p className="font-medium text-accent">Head Office</p>
              <p>{siteConfig.address}</p>
              <p className="font-medium text-accent mt-4">Call Us</p>
              <p>{siteConfig.phone}</p>
              <p className="font-medium text-accent mt-4">Email Us</p>
              <p>{siteConfig.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted text-sm hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-muted text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

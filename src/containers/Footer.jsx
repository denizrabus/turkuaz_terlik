import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // Google Maps URL
  const googleMapsUrl = "https://maps.app.goo.gl/MuwM7c56Ckj4WLok9";

  // Telefon numarası
  const phoneNumber = "+902126712119";
  const phoneDisplay = "+90 212 671 21 19";
  const phoneUrl = `tel:${phoneNumber}`;

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto max-w-6xl px-6 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Sol taraf - Adres ve İletişim */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm leading-relaxed"
            >
              <p>Çobançeşme Mahallesi Altay Sokak</p>
              <p>Kat: 2 No: 10-5 Erna İş Merkezi</p>
              <p>Bahçelievler / ISTANBUL / TURKIYE</p>
            </a>
            <a
              href={phoneUrl}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              {phoneDisplay}
            </a>
          </div>

          {/* Sağ taraf - Email ve Copyright */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="mailto:info@turkuazterlik.com"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              info@turkuazterlik.com
            </a>
            <p className="text-gray-400 text-sm">
              © 2025 Turkuaz Terlik. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

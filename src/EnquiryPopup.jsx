
import { useEffect, useState } from "react";
import {
  X,
  MessageCircle,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import "./EnquiryPopup.css";

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (
      sessionStorage.getItem("enquiryPopupDismissed") === "true"
    ) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("enquiryPopupDismissed", "true");
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappLink =
    "https://wa.me/918497920031?text=" +
    encodeURIComponent(
      "Hi Charan! I visited your website and would like to discuss a website for my business. Please share your packages and pricing."
    );

  return (
    <div
      className="enquiry-popup-backdrop"
      onClick={closePopup}
    >
      <section
        className="enquiry-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-popup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="enquiry-popup-close"
          onClick={closePopup}
          aria-label="Close enquiry popup"
        >
          <X size={20} />
        </button>

        <div className="enquiry-popup-topline">
          <span className="enquiry-popup-brand-dot"></span>
          CHARAN'S WEB STUDIO
        </div>

        <div className="enquiry-popup-icon">
          <Sparkles size={29} strokeWidth={1.7} />
        </div>

        <div className="enquiry-popup-label">
          LET'S BUILD SOMETHING GREAT
        </div>

        <h2 id="enquiry-popup-title">
          Ready to take your business
          <span> online?</span>
        </h2>

        <p className="enquiry-popup-description">
          Get a professional website that makes your business
          stand out. Tell us your idea and let's find the right
          solution for you.
        </p>

        <div className="enquiry-popup-benefits">
          <span>
            <CheckCircle2 size={15} />
            Modern design
          </span>
          <span>
            <CheckCircle2 size={15} />
            Personal support
          </span>
        </div>

        <div className="enquiry-popup-actions">
          <a
            href={whatsappLink}
            className="enquiry-popup-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closePopup}
          >
            <MessageCircle size={20} />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight size={18} />
          </a>

          <a
            href="tel:+918497920031"
            className="enquiry-popup-call"
            onClick={closePopup}
          >
            <Phone size={19} />
            <span>Call Us</span>
            <span className="enquiry-popup-phone-number">
              +91 84979 20031
            </span>
          </a>
        </div>

        <button
          type="button"
          className="enquiry-popup-later"
          onClick={closePopup}
        >
          Maybe later
        </button>

        <div className="enquiry-popup-footer">
          <span className="enquiry-popup-status"></span>
          <span>Direct support from your website developer</span>
        </div>
      </section>
    </div>
  );
}

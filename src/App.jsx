import { useState } from "react";
import "./App.css";
import EnquiryPopup from "./EnquiryPopup";

const WHATSAPP_NUMBER = "918497920031";

const WHATSAPP_MESSAGE =
  "Hi Charan! I am interested in getting a website developed for my business. Could you please share your packages and pricing?";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function App() {
  const [legalModal, setLegalModal] = useState(null);

  const [activeFaq, setActiveFaq] = useState(null);

const faqs = [
  {
    q: "How long will it take to build my website?",
    a: "Single-page and multi-page business websites are completed within 24 hours once you provide your text and images. E-commerce stores take just 2 to 3 days.",
  },
  {
    q: "Is the BillEase billing software really free?",
    a: "Yes! Every standard business or e-commerce website includes lifetime free access to our BillEase POS, GST, and inventory billing software at zero additional license cost.",
  },
  {
    q: "Who handles the domain and hosting?",
    a: "We assist you in selecting and buying your own domain and hosting in your name, so you retain 100% complete ownership of your site and brand.",
  },
  {
    q: "What does Lifetime Support & Free Updates cover?",
    a: "Once your project is live, you can message us directly on WhatsApp anytime for minor content changes (text updates, price edits, photo swaps) at ₹0 extra fee.",
  },
];

  return (
    <div className="website">
      {/* Navigation */}
      <header className="navbar">
        
        <a href="#home" className="logo">
          <img
            src="/logo.webp"
            alt="Charan's Web Studio logo"
            className="navbar-logo-icon"
          />
          <span className="navbar-logo-text">
            CHARAN'S <span>WEB STUDIO</span>
            <span className="logo-dot">.</span>
          </span>
        </a>


        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#support">Lifetime Support</a>
          <a href="#contact">Contact Us</a>
        </nav>

        
          <a
            href={WHATSAPP_LINK}
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Talk <span>↗</span>
          </a>

          <a href="tel:+918497920031" className="call-now-button">
            <span>📞</span> Call Now
          </a>



      </header>

      {/* Hero Section */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              AVAILABLE FOR NEW PROJECTS
            </div>

            <h1>
              We build websites
              <br />
              that help businesses
              <br />
              <span>grow faster.</span>
            </h1>

            <p className="hero-description">
              Modern, high-quality websites for small businesses in
              Hyderabad. Great design, affordable pricing, and personal
              support from start to finish.
            </p>

            <div className="hero-buttons">
              <a
                href={WHATSAPP_LINK}
                className="primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us on WhatsApp <span>↗</span>
              </a>

              <a href="tel:+918497920031" className="call-now-button">
                <span>📞</span> Call Now
              </a>
            </div>

            <div className="hero-trust">
              <span>✓ Mobile-friendly design</span>
              <span>✓ Affordable packages</span>
              <span>✓ Direct developer support</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="browser-card">
              <div className="browser-top">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-address">
                  yourbusiness.com
                </div>
              </div>

              <div className="preview-site">
                <div className="preview-nav">
                  <div className="preview-logo">YOUR BRAND.</div>
                  <div className="preview-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="preview-content">
                  <div className="preview-tag">WELCOME TO YOUR FUTURE</div>
                  <h2>
                    Make your
                    <br />
                    business stand out.
                  </h2>
                  <p>
                    Beautiful websites built to turn visitors into
                    customers.
                  </p>
                  <div className="preview-button">DISCOVER MORE ↗</div>
                </div>

                <div className="preview-bottom">
                  <div>
                    <strong>01</strong>
                    <span>Modern Design</span>
                  </div>
                  <div>
                    <strong>02</strong>
                    <span>Built for Growth</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card">
              <div className="floating-icon">✦</div>
              <div>
                <strong>Made for your business</strong>
                <p>Designed around your goals.</p>
              </div>
            </div>
          </div>
        </section>


        
        
      
      {/* FREQUENTLY ASKED QUESTIONS */}
    <section className="faq-section" id="faq">
      <div className="section-heading">
        <span className="section-label">GOT QUESTIONS?</span>
        <h2>
          Frequently Asked
          <br />
          <span>Questions.</span>
        </h2>
      </div>

      <div className="faq-accordion">
        {faqs.map((faq, index) => {
          const isOpen = activeFaq === index;
          return (
            <div
              key={index}
              className={`faq-item ${isOpen ? "open" : ""}`}
              onClick={() => setActiveFaq(isOpen ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </div>
              {isOpen && <div className="faq-answer">{faq.a}</div>}
            </div>
          );
        })}
      </div>
    </section>




        {/* Services Preview */}
        <section className="services-section" id="services">
          <div className="section-heading">
            <span className="section-label">WHAT WE DO</span>
            <h2>
              Everything your business needs
              <br />
              <span>to get online.</span>
            </h2>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">↗</div>
              <h3>Business Websites</h3>
              <p>
                Professional websites that build trust and help
                customers discover your business.
              </p>
              <a href="#contact">Explore service ↗</a>
            </article>

            <article className="service-card">
              <div className="service-icon">▣</div>
              <h3>E-commerce Websites</h3>
              <p>
                Sell products online with a modern storefront and
                a smooth shopping experience.
              </p>
              <a href="#contact">Explore service ↗</a>
            </article>

            <article className="service-card">
              <div className="service-icon">◎</div>
              <h3>Landing Pages</h3>
              <p>
                Focused landing pages designed to generate enquiries
                and support your advertising campaigns.
              </p>
              <a href="#contact">Explore service ↗</a>
            </article>
          </div>
        </section>



        
        {/* Lifetime Support Section */}
        <section className="support-section" id="support">
          <div className="support-content">
            <span className="section-label">OUR PROMISE TO YOU</span>

            <h2>
              Your website today.
              <br />
              <span>Our support for life.</span>
            </h2>

            <p>
              Your relationship with us doesn't end when your website goes live.
              Once your website project is paid for, you can contact us anytime
              for website updates and minor changes at no additional charge.
            </p>

            <div className="support-features">
              <div className="support-feature">
                <span>✓</span>
                <div>
                  <h3>Lifetime Support</h3>
                  <p>Contact us whenever you need help with your website.</p>
                </div>
              </div>

              <div className="support-feature">
                <span>✓</span>
                <div>
                  <h3>Free Minor Updates</h3>
                  <p>Text changes, image replacements, and small content updates.</p>
                </div>
              </div>

              <div className="support-feature">
                <span>✓</span>
                <div>
                  <h3>Direct Developer Access</h3>
                  <p>Speak directly with the developer who built your website.</p>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              className="primary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss Your Website <span>↗</span>
            </a>

            <p className="support-note">
              Free updates cover minor changes to the original website.
              New features, additional pages, major redesigns, third-party
              charges, domain renewals, and hosting fees are separate.
            </p>
          </div>
        </section>



        <section className="pricing-section" id="pricing">
          <div className="section-heading">
            <span className="section-label">SIMPLE, TRANSPARENT PRICING</span>
            <h2>
              The right website.
              <br />
              <span>The right price.</span>
            </h2>
            <p className="pricing-intro">
              Affordable website packages for small businesses ready to grow online.
            </p>
          </div>

          <div className="pricing-grid">
            <article className="pricing-card">
              <span className="pricing-tier">STARTER</span>
              <h3>One Page Website</h3>
              <p className="pricing-description">
                Perfect for individuals and small businesses getting started online.
              </p>

              <div className="pricing-price">
                <span>₹</span>2,999
                <small> / starting price</small>
              </div>

              <a
                className="pricing-btn"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi Charan! I'm interested in your Starter Website package starting at ₹2,999. Please share more details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started <span>↗</span>
              </a>

              <div className="pricing-divider"></div>

              <ul>
                <li>✓ Single-page website</li>
                <li>✓ Mobile-friendly design</li>
                <li>✓ WhatsApp contact button</li>
                <li>✓ Contact information</li>
                <li>✓ Basic on-page SEO</li>
              </ul>
            </article>

            <article className="pricing-card pricing-featured">
              <span className="popular-badge">POPULAR CHOICE</span>
              <span className="pricing-tier">BUSINESS</span>
              <h3>Business Website</h3>
              <p className="pricing-description">
                For businesses that need a professional online presence.
              </p>

              <div className="pricing-price">
                <span>₹</span>6,999
                <small> / starting price</small>
              </div>

              <a
                className="pricing-btn featured-btn"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi Charan! I'm interested in your Business Website package starting at ₹6,999. Please share more details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started <span>↗</span>
              </a>

              <div className="pricing-divider"></div>

              <ul>
                <li>✓ Up to 5 pages</li>
                <li>✓ Customised website design</li>
                <li>✓ WhatsApp integration</li>
                <li>✓ Enquiry form</li>
                <li>✓ Google Maps integration</li>
                <li>✓ Basic on-page SEO</li>
              </ul>
            </article>

            <article className="pricing-card">
              <span className="pricing-tier">E-COMMERCE</span>
              <h3>Online Store</h3>
              <p className="pricing-description">
                Start selling your products online with a dedicated store.
              </p>

              <div className="pricing-price">
                <span>₹</span>14,999
                <small> / starting price</small>
              </div>

              <a
                className="pricing-btn"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi Charan! I'm interested in your E-commerce Website package starting at ₹14,999. Please share more details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started <span>↗</span>
              </a>

              <div className="pricing-divider"></div>

              <ul>
                <li>✓ Product catalogue</li>
                <li>✓ Shopping cart</li>
                <li>✓ Checkout integration</li>
                <li>✓ Mobile-friendly design</li>
                <li>✓ Basic store setup</li>
              </ul>
            </article>
          </div>

          <p className="pricing-note">
            Final pricing depends on your requirements. Domain, hosting, paid services,
            and ongoing maintenance will be quoted separately where applicable.
          </p>
        </section>

        
        

{/* Portfolio Section */}
<section className="portfolio-section" id="portfolio">
  <div className="portfolio-heading">
    <div>
      <span className="section-label">OUR PORTFOLIO</span>
      <h2>
        Websites built with
        <br />
        <span>purpose and precision.</span>
      </h2>
    </div>

    <p>
      A selection of web projects showcasing modern design,
      practical functionality, and business-focused solutions.
    </p>
  </div>

  <div className="portfolio-grid">
    {/* 1. My Home Foods */}
    <a
      href="https://myhomemadefoods.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label="Visit My Home Foods website"
    >
      <div className="project-preview project-food">
        <span className="project-number">01 / BUSINESS WEBSITE</span>

        <div className="project-mockup">
          <span className="mockup-label">HOMEMADE WITH LOVE</span>
          <h3>
            Good food.
            <br />
            Made at home.
          </h3>
          <span className="mockup-button">VISIT WEBSITE ↗</span>
        </div>
      </div>

      <div className="project-info">
        <div>
          <h3>My Home Foods</h3>
          <p>Food business website</p>
        </div>
        <span className="project-arrow">↗</span>
      </div>
    </a>

    {/* 2. Medical Equipment */}
    <a
      href="https://instamedcare.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label="Visit InstaMedCare website"
    >
      <div className="project-preview project-medical">
        <span className="project-number">02 / HEALTHCARE</span>

        <div className="project-mockup">
          <span className="mockup-label">CARE THAT MATTERS</span>
          <h3>
            Better care.
            <br />
            Closer to home.
          </h3>
          <span className="mockup-button">VISIT WEBSITE ↗</span>
        </div>
      </div>

      <div className="project-info">
        <div>
          <h3>Medical Equipment</h3>
          <p>Healthcare business website</p>
        </div>
        <span className="project-arrow">↗</span>
      </div>
    </a>

    {/* 3. Lumora E-commerce */}
    <a
      href="https://sakhavarapucharanteja.github.io/LUMORA-Ecommerce/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label="Visit Lumora e-commerce store"
    >
      <div className="project-preview project-store">
        <span className="project-number">03 / E-COMMERCE</span>

        <div className="project-mockup">
          <span className="mockup-label">STYLE YOUR MOMENT</span>
          <h3>
            Every detail
            <br />
            makes a difference.
          </h3>
          <span className="mockup-button">EXPLORE STORE ↗</span>
        </div>
      </div>

      <div className="project-info">
        <div>
          <h3>Lumora</h3>
          <p>Fashion accessories e-commerce store</p>
        </div>
        <span className="project-arrow">↗</span>
      </div>
    </a>

    
      {/* 4. BillEase Billing Application */}
      <a
        href="https://billeasein.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
        aria-label="Open BillEase billing application"
      >
        <div className="project-preview project-billing">
          <span className="project-number">04 / BILLING SOFTWARE</span>

          <div className="project-mockup">
            <span className="mockup-label">SMARTER BILLING</span>
            <h3>
              Billing made
              <br />
              simple.
            </h3>
            <span className="mockup-button">EXPLORE BILLEASE ↗</span>
          </div>
        </div>

        <div className="project-info">
          <div>
            <h3>BillEase</h3>
            <p>Billing, GST &amp; POS application</p>
          </div>
          <span className="project-arrow">↗</span>
        </div>
      </a>


    {/* 5. Resorts and Farms */}
    <a
      href="https://ramisettysireesha48-ship-it.github.io/Resorts-and-Farms/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label="Visit Resorts and Farms website"
    >
      <div className="project-preview project-resorts">
        <span className="project-number">05 / RESORTS &amp; FARMS</span>

        <div className="project-mockup">
          <span className="mockup-label">YOUR PERFECT GETAWAY</span>
          <h3>
            Escape the ordinary.
            <br />
            Experience nature.
          </h3>
          <span className="mockup-button">VISIT WEBSITE ↗</span>
        </div>
      </div>

      <div className="project-info">
        <div>
          <h3>Resorts &amp; Farms</h3>
          <p>Resort and farm website</p>
        </div>
        <span className="project-arrow">↗</span>
      </div>
    </a>
  </div>
</section>




        {/* Contact Call to Action */}
        <section className="contact-section" id="contact">
          <span className="section-label">LET'S BUILD SOMETHING</span>

          <h2>
            Have a business idea?
            <br />
            <span>Let's bring it online.</span>
          </h2>

          <p>
            Tell us a little about your business. We'll discuss your
            requirements and recommend the right website package.
          </p>

          <form
            className="lead-form"
            onSubmit={(event) => {
              event.preventDefault();

              const formData = new FormData(event.currentTarget);
              const name = formData.get("name");
              const phone = formData.get("phone");
              const business = formData.get("business");
              const budget = formData.get("budget");
              const requirements = formData.get("requirements");

              const message = [
                "Hi Charan! I would like to enquire about website development.",
                "",
                `Name: ${name}`,
                `Phone: ${phone}`,
                `Business type: ${business}`,
                `Budget: ${budget}`,
                `Requirements: ${requirements || "Not specified"}`,
              ].join("\n");

              const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

              window.open(link, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="form-row">
              <label>
                Your name *
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Phone number *
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  pattern="[0-9+\s()-]{10,16}"
                  title="Enter a valid phone number"
                  required
                />
              </label>
            </div>

            <label>
              What type of business do you have? *
              <select name="business" defaultValue="" required>
                <option value="" disabled>
                  Select your business type
                </option>
                <option>Restaurant or Cafe</option>
                <option>Salon or Beauty Business</option>
                <option>Retail Shop</option>
                <option>Healthcare or Clinic</option>
                <option>Professional Services</option>
                <option>E-commerce Business</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Your estimated budget *
              <select name="budget" defaultValue="" required>
                <option value="" disabled>
                  Select your budget
                </option>
                <option>₹3,000–₹5,000</option>
                <option>₹5,000–₹10,000</option>
                <option>₹10,000–₹20,000</option>
                <option>₹20,000+</option>
                <option>Not sure yet</option>
              </select>
            </label>

            <label>
              Tell us what you need
              <textarea
                name="requirements"
                placeholder="Example: I need a website for my restaurant with menu, photos and WhatsApp enquiries."
                rows="4"
              />
            </label>

            <button type="submit" className="primary-btn lead-submit">
              Send Enquiry on WhatsApp <span>↗</span>
            </button>

            <small>
              Your details will be included in a WhatsApp message to our
              business number. Please review the message before sending.
            </small>
          </form>
        </section>
      </main>

       {/* Footer */}
      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="logo">
              CHARAN'S <span>WEB STUDIO</span>
              <span className="logo-dot">.</span>
            </a>

            <p>
              Building modern, professional websites that help businesses
              grow online. Affordable solutions, personalized service, and
              fast delivery.
            </p>

            <a
              href="https://wa.me/918497920031?text=Hi%20Charan!%20I%20am%20interested%20in%20getting%20a%20website%20developed."
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta"
            >
              Let's Build Your Website ↗
            </a>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-links">
            <h3>Our Services</h3>
            <a href="#services">Business Websites</a>
            <a href="#services">E-commerce Websites</a>
            <a href="#services">Website Redesign</a>
            <a href="#services">Responsive Web Design</a>
          </div>

          <div className="footer-contact">
            <h3>Let's Connect</h3>
            <a href="tel:+918497920031">📞 +91 84979 20031</a>
            <a
              href="https://wa.me/918497920031"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Enquiry ↗
            </a>
            <p>Available for freelance projects worldwide.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Charan's Web Studio.
            All rights reserved.
          </p>

          <div className="footer-legal-links">
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => setLegalModal("privacy")}
            >
              Privacy Policy
            </button>
            <span className="footer-dot">•</span>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => setLegalModal("terms")}
            >
              Terms of Service
            </button>
          </div>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>


      
      {/* Privacy Policy and Terms of Service Modal */}
      {legalModal && (
        <div
          className="legal-modal-overlay"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="legal-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="legal-modal-close"
              onClick={() => setLegalModal(null)}
              aria-label="Close dialog"
            >
              &times;
            </button>

            <h2 id="legal-modal-title">
              {legalModal === "privacy"
                ? "Privacy Policy"
                : "Terms of Service"}
            </h2>

            {legalModal === "privacy" ? (
              <div className="legal-modal-content">
                <p>
                  <strong>Last updated:</strong> October 19, 2026
                </p>

                <h3>1. Information We Collect</h3>
                <p>
                  When you contact Charan's Web Studio, you may provide your
                  name, phone number, business information, budget, and
                  website requirements.
                </p>

                <h3>2. How We Use Your Information</h3>
                <p>
                  We use the information you provide to respond to enquiries,
                  discuss website development services, prepare proposals,
                  and communicate with you about your project.
                </p>

                <h3>3. Sharing of Information</h3>
                <p>
                  We do not intend to sell your personal information.
                  Information may be processed by service providers used
                  to operate our website and communication services.
                </p>

                <h3>4. Data Security</h3>
                <p>
                  Reasonable measures are taken to protect information.
                  However, no method of electronic transmission or storage
                  is completely secure.
                </p>

                <h3>5. Your Choices</h3>
                <p>
                  You may contact us to request access to or correction
                  of information you have provided, subject to applicable
                  legal requirements.
                </p>

                <h3>6. Contact</h3>
                <p>
                  For privacy questions, contact us at{" "}
                  <a href="https://wa.me/918497920031" target="_blank"
                    rel="noopener noreferrer">
                    WhatsApp
                  </a>.
                </p>
              </div>
            ) : (
              <div className="legal-modal-content">
                <p>
                  <strong>Last updated:</strong> October 19, 2026
                </p>

                <h3>1. Services</h3>
                <p>
                  Charan's Web Studio provides website design and development
                  services according to the requirements agreed upon with
                  each customer.
                </p>

                <h3>2. Pricing and Payment</h3>
                <p>
                  Prices displayed on the website are starting prices.
                  Final costs depend on the project scope, features, and
                  any additional services agreed upon before development.
                </p>

                <h3>3. Project Delivery</h3>
                <p>
                  Delivery timelines depend on the agreed scope, availability
                  of content, customer feedback, and other project requirements.
                </p>

                <h3>4. Lifetime Support</h3>
                <p>
                  Lifetime support covers minor updates to the original
                  website, as described on our website. New features,
                  major redesigns, third-party charges, domain renewals,
                  and hosting fees are separate unless otherwise agreed.
                </p>

                <h3>5. Customer Responsibilities</h3>
                <p>
                  Customers are responsible for providing accurate content
                  and ensuring they have the necessary rights to use the
                  text, images, logos, and other materials supplied.
                </p>

                <h3>6. Third-Party Services</h3>
                <p>
                  Domain registrars, hosting providers, payment services,
                  and other third-party tools may have separate fees and
                  terms.
                </p>

                <h3>7. Changes to These Terms</h3>
                <p>
                  These terms may be updated when our services or business
                  practices change. Applicable law continues to apply.
                </p>

                <h3>8. Contact</h3>
                <p>
                  For questions about these terms, contact us through{" "}
                  <a href="https://wa.me/918497920031" target="_blank"
                    rel="noopener noreferrer">
                    WhatsApp
                  </a>.
                </p>
              </div>
            )}

            <button
              type="button"
              className="legal-modal-done"
              onClick={() => setLegalModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}



      <a
        href={WHATSAPP_LINK}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Charan's Web Studio on WhatsApp"
      >
        <span className="whatsapp-symbol">◉</span>
        <span>Chat with us</span>
      </a>
      <EnquiryPopup />
    </div>
  );
}

export default App;
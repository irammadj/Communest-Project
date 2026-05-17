const { useState } = React;

// ─── Pull all static data from index.html ────────────────────────────────────
const {
  cities,
  vacantHouses,
  events,
  announcements,
  locationOptions,
  contact,
  social,
  heroContent,
  whyChooseUs,
  aboutFeatures,
} = window.APP_DATA;

// ─── SVG Icon Components ──────────────────────────────────────────────────────

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const Building2Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
    <path d="M10 6h4"></path>
    <path d="M10 10h4"></path>
    <path d="M10 14h4"></path>
    <path d="M10 18h4"></path>
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const BedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 4v16"></path>
    <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
    <path d="M2 17h20"></path>
    <path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path>
  </svg>
);

const BathIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1 2.5L9 10"></path>
    <path d="M21 12V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4"></path>
    <path d="M7 21a2 2 0 0 0 2-2v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2"></path>
    <path d="M3 12h18"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
  </svg>
);

// Helper: resolve icon name string from data to a component
function CardIcon({ name }) {
  if (name === "building") return <Building2Icon />;
  return <HomeIcon />;
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const links = [
    { label: "Home", page: "home" },
    { label: "Estates", page: "estates" },
    { label: "About", page: "about" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a
          href="#"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            navTo("home");
          }}
        >
          <Building2Icon />
          <span>Communest</span>
        </a>

        <div className="navbar-links">
          {links.map(({ label, page }) => (
            <a
              key={page}
              href="#"
              className={`nav-link ${currentPage === page ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                navTo(page);
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              navTo("auth");
            }}
          >
            Sign In
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu active">
          {links.map(({ label, page }) => (
            <a
              key={page}
              href="#"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                navTo(page);
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#"
            className="btn-primary btn-full mt-2"
            onClick={(e) => {
              e.preventDefault();
              navTo("auth");
            }}
          >
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>
            Welcome to{" "}
            <span className="highlight">{heroContent.highlight}</span>
          </h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            {heroContent.tagline}
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#94a3b8",
              maxWidth: "900px",
              margin: "0 auto 2rem",
            }}
          >
            {heroContent.description}
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => setCurrentPage("estates")}
              style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}
            >
              🔍 Find Your Home
            </button>
            <button
              className="btn-secondary"
              onClick={() => setCurrentPage("estates")}
            >
              🏢 List Your Estate
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <h2>Why Choose Communest?</h2>
          <div className="grid grid-3">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="card card-dark">
                <div className="icon-wrapper">
                  <CardIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="section">
        <div className="container">
          <h2>Popular Locations</h2>
          <div className="grid grid-4">
            {cities.map((city) => (
              <div key={city} className="card" style={{ cursor: "pointer" }}>
                <h3>{city}</h3>
                <p>Explore properties</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #1e293b 100%)",
        }}
      >
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
            Join thousands of Kenyans who trust Communest for their housing
            needs
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: "white",
              color: "#1e40af",
              padding: "1rem 2rem",
              fontSize: "1.125rem",
            }}
            onClick={() => setCurrentPage("auth")}
          >
            Create Your Account
          </button>
        </div>
      </section>
    </div>
  );
}

// ─── Estates Page ─────────────────────────────────────────────────────────────

function EstatesPage() {
  const [userType, setUserType] = useState("outsider");
  const [showListingForm, setShowListingForm] = useState(false);

  return (
    <div className="section">
      <div className="container">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Estates</h1>

        {/* Tab Controls */}
        <div className="tab-buttons mb-4">
          <button
            className={`btn ${userType === "outsider" ? "btn-blue" : "btn-gray"}`}
            onClick={() => setUserType("outsider")}
          >
            View Properties
          </button>
          <button
            className={`btn ${userType === "tenant" ? "btn-blue" : "btn-gray"}`}
            onClick={() => setUserType("tenant")}
          >
            Tenant Portal
          </button>
          <button
            className="btn btn-green"
            onClick={() => setShowListingForm(!showListingForm)}
          >
            ➕ List Your Estate
          </button>
        </div>

        {/* Listing Form */}
        {showListingForm && (
          <div className="card mb-4">
            <h2>List Your Estate</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Estate Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter estate name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <select className="form-select">
                    <option>Select location</option>
                    {locationOptions.map((loc) => (
                      <option key={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Price (KES/month)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 45000"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Bedrooms</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 2"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Bathrooms</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 2"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Size (sqm)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 85"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  rows="4"
                  placeholder="Describe your property..."
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Contact Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-blue btn-full">
                Submit Listing
              </button>
            </form>
          </div>
        )}

        {/* Property Listings */}
        {userType === "outsider" && (
          <div>
            <h2 className="mb-4">Available Properties</h2>
            <div className="grid grid-3">
              {vacantHouses.map((house) => (
                <div key={house.id} className="property-card">
                  <img
                    src={house.image}
                    alt={house.name}
                    className="property-image"
                  />
                  <div className="property-content">
                    <h3 className="property-title">{house.name}</h3>
                    <p className="property-location">
                      <MapPinIcon /> {house.location}
                    </p>
                    <div className="property-features">
                      <span>
                        <BedIcon /> {house.bedrooms} beds
                      </span>
                      <span>
                        <BathIcon /> {house.bathrooms} baths
                      </span>
                      <span>📏 {house.size}m²</span>
                    </div>
                    <div className="property-footer">
                      <div className="property-price">
                        KES {house.price.toLocaleString()}
                        <small>/mo</small>
                      </div>
                      <button className="btn btn-blue">View</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tenant Portal */}
        {userType === "tenant" && (
          <div>
            {/* Events */}
            <div className="card mb-4">
              <h2 className="mb-3">📅 Upcoming Events</h2>
              {events.map((event) => (
                <div
                  key={event.id}
                  className="card-dark mb-2"
                  style={{ padding: "1rem" }}
                >
                  <h3 style={{ fontSize: "1.125rem" }}>{event.title}</h3>
                  <p className="mb-1">
                    Date: {new Date(event.date).toLocaleDateString("en-KE")}
                  </p>
                  <p>Location: {event.location}</p>
                </div>
              ))}
            </div>

            {/* Announcements */}
            <div className="card mb-4">
              <h2 className="mb-3">🔔 Announcements</h2>
              {announcements.map((a) => (
                <div
                  key={a.id}
                  className="card-dark mb-2"
                  style={{ padding: "1rem" }}
                >
                  <h3 style={{ fontSize: "1.125rem" }}>{a.title}</h3>
                  <p
                    className="mb-1"
                    style={{ fontSize: "0.875rem", color: "#94a3b8" }}
                  >
                    {new Date(a.date).toLocaleDateString("en-KE")}
                  </p>
                  <p>{a.content}</p>
                </div>
              ))}
            </div>

            {/* Inquiry / Complaint Form */}
            <div className="card">
              <h2 className="mb-3">📝 Submit Inquiry or Complaint</h2>
              <form>
                <div className="form-group">
                  <label className="form-label">Type</label>
                  <select className="form-select">
                    <option>Inquiry</option>
                    <option>Complaint</option>
                    <option>Maintenance Request</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Brief subject"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    rows="5"
                    placeholder="Describe your inquiry or complaint..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-blue btn-full">
                  📤 Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────

function AboutPage() {
  const { trust, forHunters, forManagers, forTenants, security } =
    aboutFeatures;

  return (
    <div className="section">
      <div className="container">
        <h1
          style={{
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          About Communest
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 3rem",
            color: "#cbd5e1",
          }}
        >
          Communest is Kenya's leading platform for house management and house
          hunting. We connect property seekers with their dream homes and
          provide estate managers with powerful tools to manage their properties
          efficiently.
        </p>

        {/* Mission */}
        <div className="card mb-4">
          <h2 className="text-center mb-3">Our Mission</h2>
          <p
            style={{
              fontSize: "1.125rem",
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto",
              color: "#cbd5e1",
            }}
          >
            To revolutionize the housing sector in Kenya by making property
            management seamless and house hunting stress-free. We believe every
            Kenyan deserves access to quality housing and efficient property
            management services.
          </p>
        </div>

        {/* Trust pillars */}
        <h2 className="text-center mb-4">Why Communest is Perfect for You</h2>
        <div className="grid grid-4 mb-4">
          {trust.map((item, i) => (
            <div key={i} className="card text-center">
              <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Feature lists */}
        <h2 className="text-center mb-4">Key Features</h2>
        <div className="grid grid-2 mb-4">
          {[
            { title: "For House Hunters", items: forHunters },
            { title: "For Estate Managers", items: forManagers },
            { title: "For Tenants", items: forTenants },
            { title: "Security & Trust", items: security },
          ].map(({ title, items }) => (
            <div key={title} className="card">
              <h3 className="mb-3">{title}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item, i) => (
                  <li key={i} className="mb-2">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <h2 className="text-center mb-4">Get in Touch</h2>
        <div className="grid grid-3 mb-4">
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              ✉️
            </div>
            <h3>Email</h3>
            {contact.emails.map((e) => (
              <p key={e}>{e}</p>
            ))}
          </div>
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              📞
            </div>
            <h3>Phone</h3>
            {contact.phones.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              📍
            </div>
            <h3>Office</h3>
            <p>{contact.address}</p>
          </div>
        </div>

        {/* Social */}
        <div className="card text-center">
          <h2 className="mb-3">Connect With Us</h2>
          <div
            className="social-icons"
            style={{ justifyContent: "center", marginBottom: "1rem" }}
          >
            {[
              { href: social.facebook, Icon: FacebookIcon },
              { href: social.twitter, Icon: TwitterIcon },
              { href: social.instagram, Icon: InstagramIcon },
              { href: social.linkedin, Icon: LinkedinIcon },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                className="social-icon"
                style={{ width: "48px", height: "48px" }}
              >
                <Icon />
              </a>
            ))}
          </div>
          <p style={{ color: "#94a3b8" }}>
            Follow us on social media for the latest updates, property listings,
            and housing tips!
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Auth Page ────────────────────────────────────────────────────────────────

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <div className="auth-icon">
            <Building2Icon />
          </div>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p style={{ color: "#94a3b8" }}>
            {isLogin
              ? "Sign in to access your Communest account"
              : "Join Communest and find your dream home in Kenya"}
          </p>
        </div>

        <div className="auth-form">
          <form>
            {!isLogin && (
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>
            )}
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Enter your password"
              />
            </div>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Account Type</label>
                  <select className="form-select">
                    <option>Tenant/House Hunter</option>
                    <option>Estate Manager</option>
                    <option>Property Owner</option>
                  </select>
                </div>
              </>
            )}
            <button type="submit" className="btn btn-blue btn-full">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <a
                href="#"
                className="auth-link"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLogin(!isLogin);
                }}
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </a>
            </p>
          </div>
        </div>

        <p
          className="text-center mt-4"
          style={{ fontSize: "0.875rem", color: "#94a3b8" }}
        >
          By signing up, you agree to our{" "}
          <a href="#" className="auth-link">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="auth-link">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ setCurrentPage }) {
  const quickLinks = [
    { label: "Home", page: "home" },
    { label: "Estates", page: "estates" },
    { label: "About Us", page: "about" },
    { label: "Sign In", page: "auth" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="navbar-brand"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("home");
              }}
              style={{ marginBottom: "1rem", display: "flex" }}
            >
              <Building2Icon />
              <span>Communest</span>
            </a>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
              Kenya's trusted platform for house hunting and property
              management. Connecting communities, one home at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map(({ label, page }) => (
                <li key={page}>
                  <a
                    href="#"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(page);
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact Us</h3>
            <ul className="footer-links">
              {contact.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="footer-link">
                    {e}
                  </a>
                </li>
              ))}
              {contact.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="footer-link"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                {contact.address}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3>Follow Us</h3>
            <div className="social-icons mb-2">
              {[
                { href: social.facebook, Icon: FacebookIcon },
                { href: social.twitter, Icon: TwitterIcon },
                { href: social.instagram, Icon: InstagramIcon },
                { href: social.linkedin, Icon: LinkedinIcon },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} className="social-icon">
                  <Icon />
                </a>
              ))}
            </div>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
              Stay updated with the latest properties and housing news in Kenya
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Communest Kenya. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "estates" && <EstatesPage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "auth" && <AuthPage />}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const { useState } = React;

// ─── Pull static data from index.html ────────────────────────────────────────
const {
  cities,
  vacantHouses,
  approvedEstates,
  locationOptions,
  contact,
  social,
  heroContent,
  whyChooseUs,
  aboutFeatures,
} = window.APP_DATA;

// ─── SVG Icons ────────────────────────────────────────────────────────────────

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

const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7"></path>
    <path d="M19 12H5"></path>
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
// Popular Locations removed from here per request

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
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.75rem",
              color: "#cbd5e1",
            }}
          >
            {heroContent.tagline}
          </p>
          <p style={{ fontSize: "1rem" }}>{heroContent.description}</p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => setCurrentPage("estates")}
              style={{ padding: "0.85rem 2rem", fontSize: "1rem" }}
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
              <div
                key={i}
                className="card"
                style={{ backgroundColor: "var(--bg-elevated)" }}
              >
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

      {/* CTA */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, var(--bg-surface) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container text-center" style={{ position: "relative" }}>
          <h2>Ready to Get Started?</h2>
          <p
            style={{
              fontSize: "1.05rem",
              marginBottom: "2rem",
              color: "var(--text-secondary)",
            }}
          >
            Join thousands of Kenyans who trust Communest for their housing
            needs
          </p>
          <button
            className="btn btn-primary"
            style={{ padding: "0.9rem 2.2rem", fontSize: "1rem" }}
            onClick={() => setCurrentPage("auth")}
          >
            Create Your Account
          </button>
        </div>
      </section>
    </div>
  );
}

// ─── Rental Application Page ──────────────────────────────────────────────────

function RentalApplicationPage({ house, onBack }) {
  const [activeImg, setActiveImg] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="section">
        <div
          className="container"
          style={{ maxWidth: 600, textAlign: "center" }}
        >
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              marginBottom: "0.75rem",
            }}
          >
            Application Submitted!
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "2rem",
              fontSize: "1rem",
            }}
          >
            Your rental application for{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              {house.name}
            </strong>{" "}
            has been sent to the management of{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              {house.estate}
            </strong>
            . They will reach out to you shortly.
          </p>
          <button className="btn btn-blue" onClick={onBack}>
            ← Back to Properties
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        {/* Back button */}
        <button
          className="btn btn-gray"
          onClick={onBack}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "2rem",
          }}
        >
          <ArrowLeftIcon /> Back to Properties
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Left — Photos + Details */}
          <div>
            {/* Image gallery */}
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                marginBottom: "1rem",
              }}
            >
              <img
                src={house.images[activeImg]}
                alt={house.name}
                style={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}
            >
              {house.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    flex: 1,
                    height: 72,
                    padding: 0,
                    border: "2px solid",
                    borderColor:
                      activeImg === i ? "var(--accent)" : "var(--border)",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                    background: "none",
                  }}
                >
                  <img
                    src={img}
                    alt={`view ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      opacity: activeImg === i ? 1 : 0.55,
                      transition: "opacity 0.2s",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Property details */}
            <div className="card" style={{ marginBottom: "1rem" }}>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  color: "var(--text-primary)",
                  marginBottom: "0.4rem",
                }}
              >
                {house.name}
              </h1>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                }}
              >
                <MapPinIcon /> {house.location} — {house.estate}
              </p>

              {/* Price */}
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.5rem 1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "var(--accent-light)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  KES {house.price.toLocaleString()}
                </span>
                <span
                  style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
                >
                  {" "}
                  / month
                </span>
              </div>

              {/* Features row */}
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                  marginBottom: "1.25rem",
                }}
              >
                {[
                  { icon: <BedIcon />, label: `${house.bedrooms} Bedrooms` },
                  { icon: <BathIcon />, label: `${house.bathrooms} Bathrooms` },
                  {
                    icon: <span style={{ fontSize: "1rem" }}>📐</span>,
                    label: `${house.size} m²`,
                  },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.4rem 0.8rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {icon}
                    </span>
                    {label}
                  </div>
                ))}
              </div>

              {/* Description */}
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                About this property
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                }}
              >
                {house.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="card">
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.85rem",
                }}
              >
                Amenities
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {house.amenities.map((a) => (
                  <span
                    key={a}
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.25)",
                      color: "#6ee7b7",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.3rem 0.7rem",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                    }}
                  >
                    ✓ {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Application Form */}
          <div>
            <div className="card" style={{ position: "sticky", top: "80px" }}>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.4rem",
                }}
              >
                Apply for Rent
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.85rem",
                  marginBottom: "1.5rem",
                }}
              >
                Fill in your details and the estate management will contact you.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">
                    Full Name <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Email Address <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Phone Number <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+254 7XX XXX XXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Message{" "}
                    <span
                      style={{ color: "var(--text-muted)", fontWeight: 400 }}
                    >
                      (optional)
                    </span>
                  </label>
                  <textarea
                    className="form-textarea"
                    rows="4"
                    placeholder="Tell the management a little about yourself or ask any questions..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-blue btn-full"
                  style={{ marginTop: "0.5rem", padding: "0.85rem" }}
                >
                  📨 Submit Application
                </button>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.78rem",
                    textAlign: "center",
                    marginTop: "0.75rem",
                  }}
                >
                  Your details are sent directly to {house.estate} management
                  only.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Estate Section (tenant-only portal for an approved estate) ───────────────

function EstateSectionPage({ estate, onBack }) {
  const [activeTab, setActiveTab] = useState("announcements");
  const [submitted, setSubmitted] = useState(false);
  const [inquiry, setInquiry] = useState({
    type: "Inquiry",
    subject: "",
    message: "",
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiry.subject || !inquiry.message) return;
    setSubmitted(true);
  };

  return (
    <div className="section">
      <div className="container">
        {/* Back */}
        <button
          className="btn btn-gray"
          onClick={onBack}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "1.5rem",
          }}
        >
          <ArrowLeftIcon /> Back to Estates
        </button>

        {/* Estate header */}
        <div
          className="card"
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              background: "var(--bg-elevated)",
              borderRadius: "var(--radius-lg)",
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--border)",
              flexShrink: 0,
            }}
          >
            {estate.logo}
          </div>
          <div>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                marginBottom: "0.2rem",
              }}
            >
              {estate.name}
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <MapPinIcon /> {estate.location}
            </p>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <span
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#6ee7b7",
                borderRadius: "var(--radius-sm)",
                padding: "0.3rem 0.8rem",
                fontSize: "0.78rem",
                fontWeight: 600,
              }}
            >
              🔒 Tenant Portal
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="tab-buttons mb-4">
          {[
            { key: "announcements", label: "🔔 Announcements" },
            { key: "events", label: "📅 Events" },
            { key: "inquiry", label: "📝 Send Inquiry" },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`btn ${activeTab === key ? "btn-blue" : "btn-gray"}`}
              onClick={() => {
                setActiveTab(key);
                setSubmitted(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Announcements */}
        {activeTab === "announcements" && (
          <div>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              Management Announcements
            </h2>
            {estate.announcements.length === 0 ? (
              <p style={{ color: "var(--text-muted)" }}>
                No announcements at this time.
              </p>
            ) : (
              estate.announcements.map((a) => (
                <div key={a.id} className="card-dark mb-2">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "1rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {a.title}
                    </h3>
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.78rem",
                        flexShrink: 0,
                      }}
                    >
                      {new Date(a.date).toLocaleDateString("en-KE")}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {a.content}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Events */}
        {activeTab === "events" && (
          <div>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              Upcoming Estate Events
            </h2>
            {estate.events.length === 0 ? (
              <p style={{ color: "var(--text-muted)" }}>No upcoming events.</p>
            ) : (
              estate.events.map((ev) => (
                <div
                  key={ev.id}
                  className="card-dark mb-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.6rem 0.9rem",
                      textAlign: "center",
                      minWidth: 56,
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--accent-light)",
                        lineHeight: 1,
                      }}
                    >
                      {new Date(ev.date).getDate()}
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      {new Date(ev.date).toLocaleString("en-KE", {
                        month: "short",
                      })}
                    </div>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {ev.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.82rem",
                      }}
                    >
                      📍 {ev.location}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Inquiry */}
        {activeTab === "inquiry" && (
          <div style={{ maxWidth: 560 }}>
            {submitted ? (
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>
                  📨
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  Inquiry Sent!
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  Your {inquiry.type.toLowerCase()} has been sent to{" "}
                  {estate.name} management.
                </p>
                <button
                  className="btn btn-gray"
                  onClick={() => {
                    setSubmitted(false);
                    setInquiry({ type: "Inquiry", subject: "", message: "" });
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="card">
                <h2
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    marginBottom: "1.25rem",
                  }}
                >
                  Submit Inquiry or Complaint
                </h2>
                <form onSubmit={handleInquirySubmit}>
                  <div className="form-group">
                    <label className="form-label">Type</label>
                    <select
                      className="form-select"
                      value={inquiry.type}
                      onChange={(e) =>
                        setInquiry({ ...inquiry, type: e.target.value })
                      }
                    >
                      <option>Inquiry</option>
                      <option>Complaint</option>
                      <option>Maintenance Request</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Subject <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Brief subject"
                      value={inquiry.subject}
                      onChange={(e) =>
                        setInquiry({ ...inquiry, subject: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Message <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <textarea
                      className="form-textarea"
                      rows="5"
                      placeholder="Describe your inquiry or complaint in detail..."
                      value={inquiry.message}
                      onChange={(e) =>
                        setInquiry({ ...inquiry, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-blue btn-full">
                    📤 Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Estates Page ─────────────────────────────────────────────────────────────

function EstatesPage() {
  const [mainTab, setMainTab] = useState("properties"); // "properties" | "myEstate" | "list"
  const [selectedCity, setSelectedCity] = useState("");
  const [showListingForm, setShowListingForm] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null); // → rental application page
  const [selectedEstate, setSelectedEstate] = useState(null); // → estate section page

  // If a house is selected, show the rental application page
  if (selectedHouse) {
    return (
      <RentalApplicationPage
        house={selectedHouse}
        onBack={() => setSelectedHouse(null)}
      />
    );
  }

  // If an estate section is selected, show the estate portal
  if (selectedEstate) {
    return (
      <EstateSectionPage
        estate={selectedEstate}
        onBack={() => setSelectedEstate(null)}
      />
    );
  }

  // Filter houses by city
  const filteredHouses = selectedCity
    ? vacantHouses.filter((h) => h.city === selectedCity)
    : vacantHouses;

  return (
    <div className="section">
      <div className="container">
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            marginBottom: "2rem",
          }}
        >
          Estates
        </h1>

        {/* Main Tabs */}
        <div className="tab-buttons mb-4">
          <button
            className={`btn ${mainTab === "properties" ? "btn-blue" : "btn-gray"}`}
            onClick={() => setMainTab("properties")}
          >
            🏠 View Properties
          </button>
          <button
            className={`btn ${mainTab === "myEstate" ? "btn-blue" : "btn-gray"}`}
            onClick={() => setMainTab("myEstate")}
          >
            🔒 My Estate
          </button>
          <button
            className={`btn ${showListingForm ? "btn-green" : "btn-green"}`}
            onClick={() => {
              setShowListingForm(!showListingForm);
              setMainTab("list");
            }}
          >
            ➕ List Your Estate
          </button>
        </div>

        {/* ── List Estate Form ── */}
        {showListingForm && (
          <div className="card mb-4">
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              List Your Estate
            </h2>
            {/* Price field intentionally removed per request */}
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
                    <option value="">Select location</option>
                    {locationOptions.map((loc) => (
                      <option key={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Bedrooms</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 2"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Bathrooms</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 2"
                  />
                </div>
              </div>
              <div className="form-row">
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
                Submit Listing for Approval
              </button>
            </form>
          </div>
        )}

        {/* ── View Properties Tab ── */}
        {mainTab === "properties" && (
          <div>
            {/* Location filter — radio buttons, optional */}
            <div className="card mb-4" style={{ padding: "1.25rem 1.5rem" }}>
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.85rem",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Filter by Location (optional)
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {/* "All" option */}
                <label
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <input
                    type="radio"
                    name="city"
                    value=""
                    checked={selectedCity === ""}
                    onChange={() => setSelectedCity("")}
                    style={{
                      accentColor: "var(--accent)",
                      width: 16,
                      height: 16,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color:
                        selectedCity === ""
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                      fontWeight: selectedCity === "" ? 600 : 400,
                      transition: "color 0.2s",
                    }}
                  >
                    All Cities
                  </span>
                </label>
                {cities.map((city) => (
                  <label
                    key={city}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      cursor: "pointer",
                      userSelect: "none",
                      background:
                        selectedCity === city
                          ? "rgba(59,130,246,0.1)"
                          : "var(--bg-elevated)",
                      border: `1px solid ${selectedCity === city ? "rgba(59,130,246,0.4)" : "var(--border)"}`,
                      borderRadius: "var(--radius-md)",
                      padding: "0.4rem 0.85rem",
                      transition: "all 0.2s",
                    }}
                  >
                    <input
                      type="radio"
                      name="city"
                      value={city}
                      checked={selectedCity === city}
                      onChange={() => setSelectedCity(city)}
                      style={{
                        accentColor: "var(--accent)",
                        width: 15,
                        height: 15,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color:
                          selectedCity === city
                            ? "var(--accent-light)"
                            : "var(--text-secondary)",
                        fontWeight: selectedCity === city ? 600 : 400,
                        transition: "color 0.2s",
                      }}
                    >
                      {city}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Property grid */}
            <h2
              style={{
                textAlign: "left",
                fontSize: "1.3rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              Available Properties{" "}
              {selectedCity ? `in ${selectedCity}` : "Across Kenya"}
              <span
                style={{
                  color: "var(--text-muted)",
                  fontWeight: 400,
                  fontSize: "0.9rem",
                  marginLeft: "0.5rem",
                }}
              >
                ({filteredHouses.length})
              </span>
            </h2>

            {filteredHouses.length === 0 ? (
              <div
                className="card"
                style={{ textAlign: "center", padding: "3rem" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>
                  🔍
                </div>
                <p style={{ color: "var(--text-secondary)" }}>
                  No properties found in {selectedCity}.
                </p>
                <button
                  className="btn btn-gray"
                  style={{ marginTop: "1rem" }}
                  onClick={() => setSelectedCity("")}
                >
                  Clear Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-3">
                {filteredHouses.map((house) => (
                  <div key={house.id} className="property-card">
                    <img
                      src={house.images[0]}
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
                        {/* "View" → "Apply for Rent" */}
                        <button
                          className="btn btn-green"
                          style={{
                            padding: "0.45rem 0.9rem",
                            fontSize: "0.82rem",
                          }}
                          onClick={() => setSelectedHouse(house)}
                        >
                          Apply for Rent
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── My Estate Tab — tenant portal for approved estates ── */}
        {mainTab === "myEstate" && (
          <div>
            {/* Explainer banner */}
            <div
              style={{
                background: "rgba(59,130,246,0.07)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "1rem 1.25rem",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>🔒</span>
              <div>
                <p
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Tenant-Only Area
                </p>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                  }}
                >
                  This section lists all approved estates on Communest. Each
                  estate's portal (announcements, events, and inquiries) is
                  visible only to registered tenants of that estate. Outsiders
                  can view the estate name and location only.
                </p>
              </div>
            </div>

            <h2
              style={{
                textAlign: "left",
                fontSize: "1.3rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}
            >
              Approved Estates on Communest
            </h2>

            <div className="grid grid-3">
              {approvedEstates.map((estate) => (
                <div
                  key={estate.id}
                  className="card"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedEstate(estate)}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.8rem",
                        background: "var(--bg-elevated)",
                        borderRadius: "var(--radius-md)",
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid var(--border)",
                        flexShrink: 0,
                      }}
                    >
                      {estate.logo}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1rem", marginBottom: "0.2rem" }}>
                        {estate.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <MapPinIcon /> {estate.location}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(59,130,246,0.08)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        color: "var(--accent-light)",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.75rem",
                      }}
                    >
                      {estate.events.length} Events
                    </span>
                    <span
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        color: "#6ee7b7",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.75rem",
                      }}
                    >
                      {estate.announcements.length} Announcements
                    </span>
                  </div>
                  <button
                    className="btn btn-blue btn-full"
                    style={{ fontSize: "0.85rem", padding: "0.5rem" }}
                  >
                    Enter Estate Portal →
                  </button>
                </div>
              ))}
            </div>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                textAlign: "center",
                marginTop: "1.5rem",
              }}
            >
              🔑 Full portal access (announcements, events, inquiries) requires
              signing in with your estate account.
            </p>
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
            fontSize: "2.8rem",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            textAlign: "center",
            marginBottom: "1.25rem",
          }}
        >
          About Communest
        </h1>
        <p
          style={{
            fontSize: "1.05rem",
            textAlign: "center",
            maxWidth: "820px",
            margin: "0 auto 3rem",
            color: "var(--text-secondary)",
            lineHeight: "1.75",
          }}
        >
          Communest is Kenya's leading platform for house management and house
          hunting. We connect property seekers with their dream homes and
          provide estate managers with powerful tools to manage their properties
          efficiently.
        </p>

        <div className="card mb-4" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "1rem",
              maxWidth: "720px",
              margin: "0 auto",
              color: "var(--text-secondary)",
              lineHeight: "1.75",
            }}
          >
            To revolutionize the housing sector in Kenya by making property
            management seamless and house hunting stress-free. We believe every
            Kenyan deserves access to quality housing and efficient property
            management services.
          </p>
        </div>

        <h2 style={{ marginBottom: "1.5rem" }}>
          Why Communest is Perfect for You
        </h2>
        <div className="grid grid-4 mb-4">
          {trust.map((item, i) => (
            <div key={i} className="card text-center">
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <h2 style={{ marginBottom: "1.5rem" }}>Key Features</h2>
        <div className="grid grid-2 mb-4">
          {[
            { title: "For House Hunters", items: forHunters },
            { title: "For Estate Managers", items: forManagers },
            { title: "For Tenants", items: forTenants },
            { title: "Security & Trust", items: security },
          ].map(({ title, items }) => (
            <div key={title} className="card">
              <h3 style={{ marginBottom: "1rem" }}>{title}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "0.55rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontSize: "0.8rem",
                        marginTop: "0.2rem",
                        flexShrink: 0,
                      }}
                    >
                      ✦
                    </span>
                    <span
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={{ marginBottom: "1.5rem" }}>Get in Touch</h2>
        <div className="grid grid-3 mb-4">
          {[
            { icon: "✉️", title: "Email", lines: contact.emails },
            { icon: "📞", title: "Phone", lines: contact.phones },
            { icon: "📍", title: "Office", lines: [contact.address] },
          ].map(({ icon, title, lines }) => (
            <div key={title} className="card text-center">
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                {icon}
              </div>
              <h3>{title}</h3>
              {lines.map((l) => (
                <p
                  key={l}
                  style={{ marginTop: "0.25rem", fontSize: "0.875rem" }}
                >
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="card text-center">
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}
          >
            Connect With Us
          </h2>
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
                style={{ width: "44px", height: "44px" }}
              >
                <Icon />
              </a>
            ))}
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
            Follow us for the latest updates, property listings, and housing
            tips!
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
          <h1>{isLogin ? "Welcome Back" : "Create Account"}</h1>
          <p>
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
                    <option>Tenant / House Hunter</option>
                    <option>Estate Manager</option>
                    <option>Property Owner</option>
                  </select>
                </div>
              </>
            )}
            <button
              type="submit"
              className="btn btn-blue btn-full"
              style={{ marginTop: "0.5rem" }}
            >
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
          style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
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
          <div>
            <a
              href="#"
              className="navbar-brand"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage("home");
              }}
              style={{ marginBottom: "1rem", display: "inline-flex" }}
            >
              <Building2Icon />
              <span style={{ marginLeft: "0.5rem" }}>Communest</span>
            </a>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.85rem",
                lineHeight: "1.65",
                marginTop: "0.75rem",
              }}
            >
              Kenya's trusted platform for house hunting and property
              management. Connecting communities, one home at a time.
            </p>
          </div>
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
              <li
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.82rem",
                  marginTop: "0.25rem",
                }}
              >
                {contact.address}
              </li>
            </ul>
          </div>
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
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.82rem",
                marginTop: "0.75rem",
              }}
            >
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

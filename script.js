const { useState } = React;

// Icons as SVG components
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

const InfoIcon = () => (
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
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4"></path>
    <path d="M12 8h.01"></path>
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

const SearchIcon = () => (
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
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
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

// Navbar Component
function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a
          href="#"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("home");
            setMobileMenuOpen(false);
          }}
        >
          <Building2Icon />
          <span>Communest</span>
        </a>

        <div className="navbar-links">
          <a
            href="#"
            className={`nav-link ${currentPage === "home" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("home");
            }}
          >
            Home
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === "estates" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("estates");
            }}
          >
            Estates
          </a>
          <a
            href="#"
            className={`nav-link ${currentPage === "about" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("about");
            }}
          >
            About
          </a>
          <a
            href="#"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("auth");
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
          <a
            href="#"
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("home");
              setMobileMenuOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("estates");
              setMobileMenuOpen(false);
            }}
          >
            Estates
          </a>
          <a
            href="#"
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("about");
              setMobileMenuOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#"
            className="btn-primary btn-full mt-2"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("auth");
              setMobileMenuOpen(false);
            }}
          >
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}

// Home Page Component
function HomePage({ setCurrentPage }) {
  const cities = [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Nakuru",
    "Eldoret",
    "Thika",
    "Kitale",
    "Malindi",
  ];

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>
            Welcome to <span className="highlight">Communest</span>
          </h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Your Ultimate Solution for House Management & House Hunting in Kenya
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#94a3b8",
              maxWidth: "900px",
              margin: "0 auto 2rem",
            }}
          >
            Whether you're looking for your dream home in Nairobi, Mombasa,
            Kisumu, or Nakuru, or managing your estate, Communest makes it
            simple and efficient.
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

      <section className="section section-alt">
        <div className="container">
          <h2>Why Choose Communest?</h2>
          <div className="grid grid-3">
            <div className="card card-dark">
              <div className="icon-wrapper">
                <HomeIcon />
              </div>
              <h3>House Hunting Made Easy</h3>
              <p>
                Browse thousands of available properties across Kenya. Filter by
                location, price, and amenities to find your perfect match.
              </p>
            </div>
            <div className="card card-dark">
              <div className="icon-wrapper">
                <Building2Icon />
              </div>
              <h3>Estate Management</h3>
              <p>
                Manage your properties efficiently. Track tenants, handle
                maintenance requests, and communicate seamlessly.
              </p>
            </div>
            <div className="card card-dark">
              <div className="icon-wrapper">
                <HomeIcon />
              </div>
              <h3>Tenant Portal</h3>
              <p>
                Access events, announcements, submit inquiries and complaints
                all in one convenient platform.
              </p>
            </div>
          </div>
        </div>
      </section>

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

// Estates Page Component
function EstatesPage() {
  const [userType, setUserType] = useState("outsider");
  const [showListingForm, setShowListingForm] = useState(false);

  const vacantHouses = [
    {
      id: 1,
      name: "Modern Apartment in Kilimani",
      location: "Kilimani, Nairobi",
      price: 45000,
      bedrooms: 2,
      bathrooms: 2,
      size: 85,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      name: "Beachfront Villa",
      location: "Nyali, Mombasa",
      price: 120000,
      bedrooms: 4,
      bathrooms: 3,
      size: 220,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      name: "Cozy Studio Apartment",
      location: "Westlands, Nairobi",
      price: 28000,
      bedrooms: 1,
      bathrooms: 1,
      size: 45,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      name: "Family House with Garden",
      location: "Karen, Nairobi",
      price: 95000,
      bedrooms: 3,
      bathrooms: 2,
      size: 180,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      name: "Luxury Penthouse",
      location: "Upperhill, Nairobi",
      price: 150000,
      bedrooms: 3,
      bathrooms: 3,
      size: 200,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      name: "Affordable 2-Bedroom",
      location: "Thika, Kiambu",
      price: 22000,
      bedrooms: 2,
      bathrooms: 1,
      size: 65,
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&h=600&fit=crop",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Community Clean-Up Day",
      date: "2026-05-20",
      location: "Estate Grounds",
    },
    {
      id: 2,
      title: "Annual General Meeting",
      date: "2026-05-25",
      location: "Community Hall",
    },
    {
      id: 3,
      title: "Residents BBQ Night",
      date: "2026-06-01",
      location: "Swimming Pool Area",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Water Maintenance Schedule",
      date: "2026-05-15",
      content: "Water will be off on Saturday from 8AM-2PM",
    },
    {
      id: 2,
      title: "New Security Measures",
      date: "2026-05-12",
      content: "Enhanced access control system installed at all gates",
    },
    {
      id: 3,
      title: "Garbage Collection Update",
      date: "2026-05-10",
      content: "Collection now happens on Tuesday and Friday mornings",
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Estates</h1>

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
                    <option>Nairobi</option>
                    <option>Mombasa</option>
                    <option>Kisumu</option>
                    <option>Nakuru</option>
                    <option>Eldoret</option>
                    <option>Thika</option>
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

        {userType === "tenant" && (
          <div>
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

            <div className="card mb-4">
              <h2 className="mb-3">🔔 Announcements</h2>
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="card-dark mb-2"
                  style={{ padding: "1rem" }}
                >
                  <h3 style={{ fontSize: "1.125rem" }}>{announcement.title}</h3>
                  <p
                    className="mb-1"
                    style={{ fontSize: "0.875rem", color: "#94a3b8" }}
                  >
                    {new Date(announcement.date).toLocaleDateString("en-KE")}
                  </p>
                  <p>{announcement.content}</p>
                </div>
              ))}
            </div>

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

// About Page Component
function AboutPage() {
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

        <h2 className="text-center mb-4">Why Communest is Perfect for You</h2>
        <div className="grid grid-4 mb-4">
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              🛡️
            </div>
            <h3>Verified Listings</h3>
            <p>
              All properties are verified to ensure authenticity and quality,
              protecting you from scams.
            </p>
          </div>
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              ⏰
            </div>
            <h3>24/7 Support</h3>
            <p>
              Our customer support team is always available to assist you with
              any queries or issues.
            </p>
          </div>
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              👥
            </div>
            <h3>Community Focus</h3>
            <p>
              Build connections with fellow residents through events,
              announcements, and community features.
            </p>
          </div>
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              🏆
            </div>
            <h3>Trusted Platform</h3>
            <p>
              Thousands of satisfied customers across Kenya trust Communest for
              their housing needs.
            </p>
          </div>
        </div>

        <h2 className="text-center mb-4">Key Features</h2>
        <div className="grid grid-2 mb-4">
          <div className="card">
            <h3 className="mb-3">For House Hunters</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="mb-2">
                • Browse thousands of verified properties across Kenya
              </li>
              <li className="mb-2">
                • Advanced search filters by location, price, and amenities
              </li>
              <li className="mb-2">• Direct contact with property managers</li>
              <li className="mb-2">
                • Virtual tours and detailed property information
              </li>
              <li className="mb-2">• Save favorites and compare properties</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="mb-3">For Estate Managers</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="mb-2">
                • Easy property listing and management tools
              </li>
              <li className="mb-2">
                • Tenant communication and announcement systems
              </li>
              <li className="mb-2">
                • Track maintenance requests and complaints
              </li>
              <li className="mb-2">
                • Event management for community building
              </li>
              <li className="mb-2">• Analytics and reporting dashboard</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="mb-3">For Tenants</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="mb-2">
                • Access to estate events and community activities
              </li>
              <li className="mb-2">• Real-time announcements and updates</li>
              <li className="mb-2">• Submit inquiries and complaints easily</li>
              <li className="mb-2">• Online rent payment tracking</li>
              <li className="mb-2">
                • Community forum and neighbor connections
              </li>
            </ul>
          </div>
          <div className="card">
            <h3 className="mb-3">Security & Trust</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="mb-2">• Secure payment processing</li>
              <li className="mb-2">• Identity verification for all users</li>
              <li className="mb-2">• Property ownership verification</li>
              <li className="mb-2">• Encrypted data protection</li>
              <li className="mb-2">• Dispute resolution support</li>
            </ul>
          </div>
        </div>

        <h2 className="text-center mb-4">Get in Touch</h2>
        <div className="grid grid-3 mb-4">
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              ✉️
            </div>
            <h3>Email</h3>
            <p>support@communest.co.ke</p>
            <p>info@communest.co.ke</p>
          </div>
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              📞
            </div>
            <h3>Phone</h3>
            <p>+254 700 123 456</p>
            <p>+254 733 987 654</p>
          </div>
          <div className="card text-center">
            <div className="icon-wrapper" style={{ margin: "0 auto 1rem" }}>
              📍
            </div>
            <h3>Office</h3>
            <p>Westlands, Nairobi</p>
            <p>Kenya</p>
          </div>
        </div>

        <div className="card text-center">
          <h2 className="mb-3">Connect With Us</h2>
          <div
            className="social-icons"
            style={{ justifyContent: "center", marginBottom: "1rem" }}
          >
            <a
              href="https://facebook.com/communest"
              className="social-icon"
              style={{ width: "48px", height: "48px" }}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://twitter.com/communest"
              className="social-icon"
              style={{ width: "48px", height: "48px" }}
            >
              <TwitterIcon />
            </a>
            <a
              href="https://instagram.com/communest"
              className="social-icon"
              style={{ width: "48px", height: "48px" }}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com/company/communest"
              className="social-icon"
              style={{ width: "48px", height: "48px" }}
            >
              <LinkedinIcon />
            </a>
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

// Auth Page Component
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

// Footer Component
function Footer({ setCurrentPage }) {
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

          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="#"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage("estates");
                  }}
                >
                  Estates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage("about");
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage("auth");
                  }}
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="mailto:support@communest.co.ke"
                  className="footer-link"
                >
                  support@communest.co.ke
                </a>
              </li>
              <li>
                <a href="tel:+254700123456" className="footer-link">
                  +254 700 123 456
                </a>
              </li>
              <li style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                Westlands, Nairobi
                <br />
                Kenya
              </li>
            </ul>
          </div>

          <div>
            <h3>Follow Us</h3>
            <div className="social-icons mb-2">
              <a href="https://facebook.com/communest" className="social-icon">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com/communest" className="social-icon">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com/communest" className="social-icon">
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com/company/communest"
                className="social-icon"
              >
                <LinkedinIcon />
              </a>
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

// Main App Component
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

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

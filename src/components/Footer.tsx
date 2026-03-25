const Footer = () => {
  return (
    <footer className="px-6 py-9 md:px-12" style={{ background: "#0D1117" }}>
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="font-mono uppercase tracking-[0.22em] text-gold" style={{ fontSize: 11 }}>
            MABBLY
          </span>
          <span className="font-mono block mt-1" style={{ fontSize: 8, color: "rgba(255,255,255,0.3)" }}>
            Signal Activated Growth for Professional Services
          </span>
        </div>

        <div className="flex gap-5">
          {[
            { label: "mabbly.com", href: "https://mabbly.com" },
            { label: "mabbly.ai", href: "https://mabbly.ai" },
            { label: "Signal Activated Growth Podcast →", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono transition-colors duration-150"
              style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-right">
          <span className="font-mono block" style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}>
            GTM for Professional Services © 2026 Mabbly LLC. All rights reserved.
          </span>
          <span className="font-mono block mt-1" style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}>
            discover.mabbly.com
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

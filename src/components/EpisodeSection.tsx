const EpisodeSection = () => {
  return (
    <section id="episode" className="bg-warm px-6 py-12 md:px-20 md:py-20">
      <div className="max-w-[1080px] mx-auto stagger-children">
        <span className="font-mono uppercase tracking-[0.2em] text-gold scroll-reveal" style={{ fontSize: 9 }}>
          The Conversation That Started It All
        </span>

        <h2
          className="font-serif font-light text-ink mt-4 scroll-reveal"
          style={{ fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.12 }}
        >
          The Episode That Named the Dead Zone
        </h2>

        <p
          className="font-sans text-slate mt-4 scroll-reveal"
          style={{ fontSize: 15, lineHeight: 1.78, maxWidth: 560 }}
        >
          This Signal Activated Growth episode is where the Dead Zone concept first took shape in public. The conversation between Adam and Richard where the vocabulary of PS GTM was born. Managing partners who listened said: that is exactly what we have been living with and nobody has named it until now.
        </p>

        {/* YouTube embed */}
        <div
          className="relative overflow-hidden mx-auto mt-8 scroll-reveal"
          style={{ paddingBottom: "56.25%", height: 0, maxWidth: 720, background: "#0D1117" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full border-none"
            src="https://www.youtube.com/embed/BqpmPsK8B4c"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Signal Activated Growth Episode"
          />
        </div>

        {/* Link pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 scroll-reveal">
          {[
            { label: "Signal Activated Growth Podcast →", href: "#" },
            { label: "Listen on Spotify →", href: "#" },
            { label: "Listen on Apple Podcasts →", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono uppercase text-slate border border-border-color bg-parchment transition-colors duration-150 hover:border-gold hover:text-gold"
              style={{ fontSize: 9, padding: "8px 16px" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodeSection;

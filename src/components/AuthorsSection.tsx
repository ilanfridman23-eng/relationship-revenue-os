const AuthorsSection = () => {
  return (
    <section id="authors" className="bg-parchment px-6 py-16 md:px-20 md:py-24">
      <div className="max-w-[1080px] mx-auto stagger-children">
        <span className="font-mono uppercase tracking-[0.2em] text-gold scroll-reveal" style={{ fontSize: 9 }}>
          The Authors
        </span>

        <h2 className="font-serif font-light text-ink mt-4 scroll-reveal" style={{ fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.12 }}>
          Written by practitioners. Not researchers.
        </h2>

        <p className="font-sans text-slate mt-3 scroll-reveal" style={{ fontSize: 15, maxWidth: 560 }}>
          Two insiders who have lived the Dead Zone problem from inside the firms that Mabbly now serves. Their combined experience is the reason this book is different from every other marketing book written for business services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Adam */}
          <div className="bg-white border border-border-color p-10 scroll-reveal">
            <div className="w-24 h-24 rounded-full bg-warm flex items-center justify-center mx-auto md:mx-0">
              <span className="font-serif text-gold" style={{ fontSize: 30 }}>AF</span>
            </div>
            {/* Replace this circle with Adam Fridman professional headshot */}
            <h3 className="font-serif font-semibold text-ink mt-4" style={{ fontSize: 28 }}>Adam Fridman</h3>
            <p className="font-mono uppercase text-gold mt-1" style={{ fontSize: 9, letterSpacing: "0.14em" }}>
              Founder, Mabbly · Author · Host, Signal Activated Growth Podcast
            </p>
            <p className="font-sans text-slate mt-3.5" style={{ fontSize: 14, lineHeight: 1.78 }}>
              Adam Fridman founded Mabbly in 2013 and has spent 12 years building GTM systems for professional services firms across North America. He is the author of The Science of Story, the result of 500 interviews with the world's leading storytellers, brand builders, and culture architects. His Signal Activated Growth podcast has produced 100 episodes exploring how relationships drive revenue in professional services. He is building Mabbly AI, the first signal activated growth platform built for PS firm business development at mabbly.ai.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {["Author · The Science of Story", "500 Interviews", "100+ Podcast Episodes", "12 Years, Mabbly"].map((c) => (
                <span key={c} className="font-mono uppercase border border-border-color text-slate" style={{ fontSize: 7.5, padding: "4px 11px" }}>
                  {c}
                </span>
              ))}
            </div>
            <a
              href="https://www.amazon.com/Science-Story-Brand-Reflection-Culture/dp/0999876503"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase text-gold block mt-3.5"
              style={{ fontSize: 9 }}
            >
              The Science of Story on Amazon →
            </a>
          </div>

          {/* Richard */}
          <div className="bg-white border border-border-color p-10 scroll-reveal">
            <div className="w-24 h-24 rounded-full bg-warm flex items-center justify-center mx-auto md:mx-0">
              <span className="font-serif text-gold" style={{ fontSize: 30 }}>RA</span>
            </div>
            {/* Replace this circle with Richard Ashbaugh professional headshot */}
            <h3 className="font-serif font-semibold text-ink mt-4" style={{ fontSize: 28 }}>Richard Ashbaugh</h3>
            <p className="font-mono uppercase text-gold mt-1" style={{ fontSize: 9, letterSpacing: "0.14em" }}>
              CEO, Mabbly · Former CMO, AArete · Former CMO, Lotis Blue Consulting
            </p>
            <p className="font-sans text-slate mt-3.5" style={{ fontSize: 14, lineHeight: 1.78 }}>
              Richard Ashbaugh has spent 26 years across nine professional services firms. As CMO of AArete, a global management consulting firm with over 500 professionals and $400M in annual revenue, he built the GTM infrastructure that professional services firms spend decades trying to replicate. Before that, as Partner and CMO of Lotis Blue Consulting, he helped position the firm for a successful acquisition. He has been the exact buyer that Mabbly now serves. He is not explaining PS GTM from the outside. He built it, ran it, and is now co authoring the system that replaces what is broken.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {["Former CMO, AArete ($400M+)", "Former CMO, Lotis Blue", "26 Years PS Experience", "CEO, Mabbly"].map((c) => (
                <span key={c} className="font-mono uppercase border border-border-color text-slate" style={{ fontSize: 7.5, padding: "4px 11px" }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;

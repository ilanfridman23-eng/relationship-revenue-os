const ResultsSection = () => {
  const results = [
    { num: "$400K", label: "Deal closed from a 10 month dormant proposal. Reply in 7 minutes. Zero cold contact." },
    { num: "8.1%", label: "Reply rate vs 1.3% industry average. 37 signal activated messages to dormant contacts." },
    { num: "100%", label: "Reply rate from dormant reactivation when sender had personal context and precise signal. Two for two." },
    { num: "167%", label: "More qualified opportunities for Workiva after shifting from job title to challenge based outreach." },
    { num: "51%", label: "Lower cost per consultation. Lactation Network. Consultant network tripled in one year." },
    { num: "288%", label: "Lift in conversions for NoDoz through proof based content matched to audience intent." },
  ];

  return (
    <section style={{ background: "#0D1117" }} className="px-6 py-10 md:px-20 md:py-12">
      <div className="max-w-[1080px] mx-auto">
        <p
          className="font-mono uppercase text-center mb-8 scroll-reveal"
          style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em" }}
        >
          RESULTS FROM THE SYSTEM THE BOOK DOCUMENTS
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2px] stagger-children">
          {results.map((r) => (
            <div
              key={r.num}
              className="text-center scroll-reveal"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "24px 20px",
              }}
            >
              <span className="font-serif font-semibold text-gold block" style={{ fontSize: 44 }}>
                {r.num}
              </span>
              <span
                className="font-mono block mt-1.5"
                style={{ fontSize: 8, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}
              >
                {r.label}
              </span>
            </div>
          ))}
        </div>

        <p
          className="font-sans text-center mt-8 scroll-reveal"
          style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}
        >
          These are not projections. These are results from the system the book documents. They are reproducible. The framework explains why.
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;

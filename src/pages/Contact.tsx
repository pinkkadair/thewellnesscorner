export function Contact() {
  return (
    <div className="bg-[#fbf8f2]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-brand-accent font-semibold mb-4">Contact</p>
          <h1 className="text-5xl text-brand-dark mb-6">Come see the office.</h1>
          <p className="text-lg text-brand-ink/80 leading-relaxed mb-8">
            Tours, vendor questions, and foundation inquiries all come through the same desk.
          </p>
          <div className="bg-brand-dark text-white p-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-accent">Address</p>
              <p className="mt-2 text-lg">
                8877 West Union Hills Dr.<br />
                Suite 160<br />
                Peoria, AZ 85382
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-accent">Phone</p>
              <p className="mt-2 text-lg">
                <a href="tel:6232573350" className="hover:text-brand-accent">623-257-3350</a>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-accent">Email</p>
              <p className="mt-2 text-lg">
                <a href="mailto:support@azwellnesscorner.com" className="hover:text-brand-accent">support@azwellnesscorner.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#e4d7c2] p-4 md:p-6">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/Kiy9m46CWKMBzjNPISMtq"
            title="Contact The Wellness Corner"
            width="100%"
            style={{ height: '700px' }}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}

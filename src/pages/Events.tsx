import { Link } from 'react-router-dom';

const vendors = [
  'Adair Clinic',
  'Chiro-Practical',
  'Comfort Pro Phlebotomy & Screening Resources',
  "Honey & Bee's Bakeshop",
  'Inspire Health',
  'Momentum Medical Massage Therapy',
  'Noble Health & Wellness',
  'Phoenix Pain & Acoustic Recovery Center',
  'PinkLife Medspa',
  'United Vein & Vascular Centers',
  'Zentai Healthcare',
];

const vendorSponsorFlyer = '#vendor-flyer';

const mailto = (subject: string) =>
  `mailto:support@azwellnesscorner.com?subject=${encodeURIComponent(subject)}`;

export function Events() {
  return (
    <article className="bg-[#fbf8f2] text-brand-ink">
      <header className="border-b border-[#e4d7c2]">
        <div className="max-w-6xl mx-auto px-6 py-14 lg:py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-accent font-semibold mb-4">You're invited</p>
            <h1 className="text-5xl md:text-6xl leading-[0.95] text-brand-dark mb-5">
              Community Health &amp; Safety Fair 2026
            </h1>
            <p className="text-2xl font-display text-brand-primary mb-6">
              Building a healthier, safer, and stronger community.
            </p>
            <p className="text-lg leading-relaxed text-brand-ink/85 mb-8">
              Your health. Your family. Your community. Join The Wellness Corner and our community partners for a morning of health, safety, family fun, and meaningful connections. Independent healthcare providers, local businesses, safety professionals, and community organizations will be here so families can find resources that support healthier lives.
            </p>
            <dl className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="border border-[#e4d7c2] bg-white p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-brand-accent font-semibold">Date</dt>
                <dd className="mt-2 font-display text-xl text-brand-dark">Saturday, November 14, 2026</dd>
              </div>
              <div className="border border-[#e4d7c2] bg-white p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-brand-accent font-semibold">Time</dt>
                <dd className="mt-2 font-display text-xl text-brand-dark">8:00 AM – 12:00 PM</dd>
              </div>
              <div className="border border-[#e4d7c2] bg-white p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-brand-accent font-semibold">Place</dt>
                <dd className="mt-2 font-display text-xl text-brand-dark">8877 W. Union Hills Dr., Suite 160, Peoria</dd>
              </div>
            </dl>
            <p className="text-brand-ink/75 mb-8">
              Hosted by The Wellness Corner in partnership with Weidner Apartment Homes. Benefiting The Wellness Corner Foundation. Free and open to the public. This fair is the start of a quarterly series meant to keep serving Peoria throughout the year.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#visit" className="bg-brand-dark text-white px-5 py-3 font-semibold tracking-wide hover:bg-brand-primary">Plan your visit</a>
              <a href={vendorSponsorFlyer} className="border border-brand-dark px-5 py-3 font-semibold tracking-wide hover:bg-brand-dark hover:text-white">Become a sponsor</a>
              <a href={vendorSponsorFlyer} className="border border-brand-dark px-5 py-3 font-semibold tracking-wide hover:bg-brand-dark hover:text-white">Join as a vendor</a>
            </div>
          </div>
          <figure className="bg-white p-3 border border-[#e4d7c2] shadow-[0_24px_60px_rgba(18,33,30,0.12)]">
            <img
              src="/health-safety-fair-2026.jpg"
              alt="Flyer for the Community Health and Safety Fair on Saturday, November 14, 2026, from 8:00 AM to 12:00 PM at The Wellness Corner in Peoria."
              className="w-full"
            />
            <figcaption className="px-2 pt-3 pb-1 text-sm text-brand-ink/70">
              Official flyer for the November 14 fair.
            </figcaption>
          </figure>
        </div>
      </header>

      <section id="visit" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-28">
        <h2 className="text-4xl md:text-5xl text-brand-dark max-w-3xl mb-4">More than a health fair. A community coming together.</h2>
        <p className="text-lg leading-relaxed text-brand-ink/80 max-w-3xl mb-10">
          Whether you want to learn more about your health, discover local services, meet community organizations, or spend a family-friendly morning outside, there is a reason to come.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <section className="bg-white border border-[#e4d7c2] p-7">
            <h3 className="text-2xl text-brand-dark mb-4">Free and reduced-cost health resources</h3>
            <ul className="space-y-2 text-brand-ink/80">
              <li>Select preventive health screenings</li>
              <li>Blood pressure and glucose checks</li>
              <li>Wellness and hormone-health education</li>
              <li>Time with independent healthcare professionals</li>
            </ul>
          </section>
          <section className="bg-white border border-[#e4d7c2] p-7">
            <h3 className="text-2xl text-brand-dark mb-4">Safety and community education</h3>
            <ul className="space-y-2 text-brand-ink/80">
              <li>Fire safety demonstrations and education</li>
              <li>Family safety information</li>
              <li>Local organizations sharing community resources</li>
            </ul>
          </section>
          <section className="bg-white border border-[#e4d7c2] p-7">
            <h3 className="text-2xl text-brand-dark mb-4">Family fun and local businesses</h3>
            <ul className="space-y-2 text-brand-ink/80">
              <li>Children's activities</li>
              <li>Free snow cones while supplies last</li>
              <li>Food trucks and local vendors</li>
              <li>Raffles, giveaways, and community connections</li>
            </ul>
          </section>
        </div>
        <p className="text-sm text-brand-ink/60 mt-6">
          Screenings and activities are subject to provider participation, eligibility, and availability.
        </p>
      </section>

      <section className="bg-white border-y border-[#e4d7c2]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl text-brand-dark mb-4">Small businesses making a big difference</h2>
          <p className="text-lg leading-relaxed text-brand-ink/80 max-w-3xl mb-10">
            Independent medical and wellness providers are donating their time, knowledge, and selected services so preventive resources are easier to reach. Together they can offer outreach that is hard to organize alone. This is what community-powered healthcare looks like.
          </p>
          <h3 className="text-2xl text-brand-dark mb-5">Fair vendors</h3>
          <ol className="grid sm:grid-cols-2 gap-x-10">
            {vendors.map((vendor, index) => (
              <li key={vendor} className="flex gap-4 py-4 border-b border-[#e4d7c2]">
                <span className="font-display text-brand-accent w-8">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-lg text-brand-dark">{vendor}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="vendor-flyer" className="bg-[#fbf8f2] border-b border-[#e4d7c2] scroll-mt-28">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-accent font-semibold mb-3">Vendors and sponsors</p>
          <h2 className="text-4xl text-brand-dark mb-4">Fair flyer</h2>
          <p className="text-lg text-brand-ink/80 mb-8">
            Use this flyer for vendor and sponsor details, and to share the November 14 fair.
          </p>
          <figure className="bg-white p-3 border border-[#e4d7c2]">
            <img
              src="/vendor-sponsor-flyer.png"
              alt="Community Health and Safety Fair 2026 flyer with the date, time, location, and ways to take part."
              className="w-full"
            />
          </figure>
          <a
            href="/health-safety-fair-vendor-sponsor.pdf"
            download
            className="inline-block mt-6 font-semibold text-brand-primary hover:text-brand-dark"
          >
            Download the flyer
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl text-brand-dark mb-8">Three ways your business can participate</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <section className="border border-[#e4d7c2] bg-white p-7 flex flex-col">
            <p className="font-display text-4xl text-brand-accent mb-3">01</p>
            <h3 className="text-2xl text-brand-dark mb-3">Become a vendor</h3>
            <p className="text-brand-ink/80 leading-relaxed flex-grow">
              Introduce your business to local families, meet potential customers, and build community relationships. Setup is 6:30–7:30 AM. Bring your own tent, table, chairs, and materials. Electric access is limited.
            </p>
            <a href={vendorSponsorFlyer} className="mt-6 font-semibold text-brand-primary hover:text-brand-dark">Request vendor information</a>
          </section>
          <section className="bg-brand-dark text-white p-7 flex flex-col">
            <p className="font-display text-4xl text-brand-accent mb-3">02</p>
            <h3 className="text-2xl text-white mb-3">Become a sponsor</h3>
            <p className="text-white/80 leading-relaxed flex-grow">
              Help bring screenings, safety education, family activities, and community resources to life. Sponsorships include recognition and event participation. Presenting sponsorships are limited.
            </p>
            <a href={vendorSponsorFlyer} className="mt-6 font-semibold text-brand-accent hover:text-white">Explore sponsorship opportunities</a>
          </section>
          <section className="border border-[#e4d7c2] bg-white p-7 flex flex-col">
            <p className="font-display text-4xl text-brand-accent mb-3">03</p>
            <h3 className="text-2xl text-brand-dark mb-3">Become a community partner</h3>
            <p className="text-brand-ink/80 leading-relaxed flex-grow">
              Support the event with donated goods, professional services, giveaways, educational resources, volunteer time, or another contribution.
            </p>
            <a href={mailto("Community Partnership")} className="mt-6 font-semibold text-brand-primary hover:text-brand-dark">Let's collaborate</a>
          </section>
        </div>
      </section>

      <section className="bg-brand-light border-y border-[#e4d7c2]">
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <h2 className="text-4xl text-brand-dark mb-4">Giving back beyond healthcare</h2>
          <p className="text-lg leading-relaxed text-brand-ink/80">
            Bring a canned food donation or hygiene supplies for troops. Every contribution is another way to strengthen the community and support others.
          </p>
        </div>
      </section>

      <section className="bg-brand-primary text-white">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Help us build something that lasts</h2>
          <p className="text-lg text-white/85 leading-relaxed mb-6">
            This fair is part of a larger plan: quarterly Health &amp; Safety events where independent providers and community partners keep showing up with preventive services, education, and resources. Your participation is how that continues.
          </p>
          <p className="font-display text-2xl text-white mb-8">Stronger connections. Healthier neighbors. A better community.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href="#visit" className="bg-white text-brand-dark px-5 py-3 font-semibold">Attend the fair</a>
            <a href={mailto('Health & Safety Fair Sponsorship')} className="border border-white px-5 py-3 font-semibold hover:bg-white hover:text-brand-dark">Sponsor the event</a>
            <a href="https://www.eventbrite.com/e/community-health-and-safety-fair-vendor-sign-up-tickets-2001666677917?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer" className="border border-white px-5 py-3 font-semibold hover:bg-white hover:text-brand-dark">Become a vendor</a>
          </div>
          <p className="text-white/80">
            Questions? <a className="underline" href="mailto:support@azwellnesscorner.com">support@azwellnesscorner.com</a>
            {' · '}
            <Link className="underline" to="/foundation">The Wellness Corner Foundation</Link>
          </p>
        </div>
      </section>
    </article>
  );
}

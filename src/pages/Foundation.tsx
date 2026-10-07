import { Link } from 'react-router-dom';

const differences = [
  {
    title: 'Preventive health and early intervention',
    text: 'Connecting residents with health screenings, preventive education, and a chance to notice health concerns before they become more serious.',
  },
  {
    title: 'Community health and safety events',
    text: 'Organizing accessible events where families can meet healthcare professionals, safety organizations, and local resources.',
  },
  {
    title: 'Independent provider collaboration',
    text: 'Giving independent medical and wellness professionals a way to contribute their expertise through coordinated community outreach.',
  },
  {
    title: 'Health education and community resources',
    text: 'Helping residents take part in their own health through education, practical resources, and connections to ongoing care.',
  },
];

const audiences = [
  {
    title: 'Healthcare providers',
    text: 'Share your expertise, take part in community screenings, and help improve local access to preventive care.',
  },
  {
    title: 'Local businesses',
    text: 'Sponsor an event, contribute resources, or collaborate on a community initiative.',
  },
  {
    title: 'Community members',
    text: 'Attend events, share resources, volunteer, and tell us what your neighborhood needs.',
  },
  {
    title: 'Supporters',
    text: 'Make community health programming possible through financial or in-kind contributions.',
  },
];

export function Foundation() {
  return (
    <article className="bg-[#fbf8f2] text-brand-ink">
      <header className="border-b border-[#e4d7c2]">
        <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
          <p className="text-xs uppercase tracking-[0.28em] text-brand-accent font-semibold mb-4">The Wellness Corner Foundation</p>
          <h1 className="text-5xl md:text-6xl leading-[0.95] text-brand-dark mb-8">
            Stronger communities. Healthier futures.
          </h1>
          <p className="font-display text-2xl md:text-3xl leading-snug text-brand-primary mb-8">
            Good health shouldn’t depend on the size of your healthcare provider — or your ability to pay.
          </p>
          <p className="text-lg leading-relaxed text-brand-ink/85 mb-6">
            Meaningful community health begins when people, providers, and businesses come together. Our mission is to expand access to preventive health services, wellness education, and community resources by empowering independent healthcare professionals to give back collectively.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="mailto:support@azwellnesscorner.com?subject=Get%20Involved" className="bg-brand-dark text-white px-5 py-3 font-semibold tracking-wide hover:bg-brand-primary">
              Get involved
            </a>
            <a href="https://gofund.me/150e48b9c" target="_blank" rel="noopener noreferrer" className="border border-brand-dark px-5 py-3 font-semibold tracking-wide hover:bg-brand-dark hover:text-white">
              Support our mission
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-4xl text-brand-dark mb-6">Small providers. Big community impact.</h2>
        <div className="space-y-5 text-lg leading-relaxed text-brand-ink/85">
          <p>
            Independent healthcare and wellness providers are essential to their communities. Many small practices still don’t have the budget, staff, or infrastructure of a large health system to organize free screenings, classes, and outreach on their own.
          </p>
          <p className="font-display text-2xl text-brand-primary">We’re helping change that.</p>
          <p>
            The Wellness Corner Foundation brings independent providers, local businesses, and community organizations together to share time, expertise, and resources. Working as a group, smaller providers can do more than any one of them could alone.
          </p>
        </div>
      </section>

      <section className="bg-white border-y border-[#e4d7c2]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl text-brand-dark mb-8">How we make a difference</h2>
          <div className="grid md:grid-cols-2 gap-px bg-[#e4d7c2] border border-[#e4d7c2]">
            {differences.map((item, index) => (
              <section key={item.title} className="bg-white p-8">
                <p className="font-display text-brand-accent text-2xl mb-3">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="text-2xl text-brand-dark mb-3">{item.title}</h3>
                <p className="text-brand-ink/80 leading-relaxed">{item.text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-4xl text-brand-dark mb-5">Community care that continues</h2>
        <p className="text-lg leading-relaxed text-brand-ink/85 mb-4">
          We’re working toward quarterly community Health &amp; Safety events that bring preventive services, wellness resources, safety education, and local partnerships directly to residents.
        </p>
        <p className="text-lg leading-relaxed text-brand-ink/85 mb-8">
          The vision is larger than one Saturday. It is a lasting network of independent providers and organizations making preventive care easier to reach.
        </p>
        <Link to="/events" className="inline-flex bg-brand-primary text-white px-5 py-3 font-semibold tracking-wide hover:bg-brand-dark">
          Explore the Health &amp; Safety Fair
        </Link>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl text-white mb-3">There is a place for you</h2>
          <p className="text-white/75 text-lg mb-10">Giving back to the community makes us stronger together.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((item) => (
              <section key={item.title}>
                <h3 className="text-xl text-brand-accent mb-2">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl text-brand-dark mb-4">Ready to make a difference?</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a href="mailto:support@azwellnesscorner.com?subject=Community%20Partner" className="bg-brand-dark text-white px-5 py-3 font-semibold tracking-wide hover:bg-brand-primary">
            Become a community partner
          </a>
          <Link to="/events" className="border border-brand-dark px-5 py-3 font-semibold tracking-wide hover:bg-brand-dark hover:text-white">
            Explore the fair
          </Link>
        </div>
        <p className="text-brand-ink/80">
          Contact <a className="underline" href="mailto:support@azwellnesscorner.com">support@azwellnesscorner.com</a>
        </p>
        <p className="text-sm text-brand-ink/60 mt-8 leading-relaxed">
          The Wellness Corner Foundation’s community initiatives are distinct from the commercial operations of The Wellness Corner. Participating independent providers retain responsibility for their own professional services.
        </p>
      </section>
    </article>
  );
}

import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const providers = [
  {
    name: 'Adair Clinic',
    person: 'Kris Adair, FNP-BC',
    role: 'Private Medical Practice',
    description: 'Private medical practice that offers comprehensive hormone evaluations, preventative healthcare and wellness.',
    email: '',
  },
  {
    name: 'PinkLife Medspa',
    person: 'Kris Adair, FNP-BC',
    role: 'Holistic Medspa',
    description: 'Holistic medspa that focuses on natural, regenerative methods for skin rejuvenation and wellness.',
    email: '',
  },
  {
    name: 'Momentum Medical Massage',
    person: 'Aaron and Angelina Hull, Owners',
    role: 'Medical Massage',
    description: 'Medical massage for military veterans, owned by Aaron and Angelina Hull.',
    email: '',
  },
  {
    name: 'Zentai Healthcare',
    person: 'Rosa DelAguila Pineda',
    role: 'Healthcare Services',
    description: 'Comprehensive healthcare services with a focus on patient wellness and recovery.',
    email: 'r2lewars@gmail.com',
  },
  {
    name: 'Comfort Pro Phlebotomy',
    person: 'Christa Senft',
    role: 'Phlebotomy Services',
    description: 'Professional phlebotomy with an emphasis on patient comfort and accurate specimen collection.',
    email: 'christa@comfortprophleb.com',
  },
  {
    name: 'Phoenix Medical Imaging',
    person: 'Laki Syph',
    role: 'Medical Imaging',
    description: 'Diagnostic imaging support for practices in the building.',
    email: 'laki@phoenixmedicalimaging.com',
  },
  {
    name: 'Inspire Health Solutions',
    person: 'Stacey Ferguson',
    role: 'Health Solutions',
    description: 'Health solutions focused on wellness and comprehensive care.',
    email: 'fergusonstacey70@gmail.com',
  },
];

const offerings = [
  {
    number: '01',
    title: 'Walk in and start practicing',
    text: 'A professional address, reception, and furnished treatment rooms are already in place.',
  },
  {
    number: '02',
    title: 'The operations are handled',
    text: 'Utilities, maintenance, and day-to-day business support stay off your plate.',
  },
  {
    number: '03',
    title: 'Your schedule, your terms',
    text: 'Hourly, daily, and monthly options, with a medical director available when you need one.',
  },
];

const practices = [
  {
    title: 'Medical clinic',
    text: 'Primary care, specialized consultations, and diagnostic services.',
  },
  {
    title: 'Aesthetic practice',
    text: 'Injectables, laser procedures, and skin rejuvenation.',
  },
  {
    title: 'Medspa',
    text: 'Wellness treatments, body contouring, and relaxation therapies.',
  },
];

export function Home() {
  return (
    <div>
      <section className="bg-[#fbf8f2] border-b border-[#e4d7c2]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
          <div className="px-6 sm:px-10 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-accent font-semibold mb-5">Peoria, Arizona</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-brand-dark mb-6">
              Your practice starts here.
            </h1>
            <p className="text-lg md:text-xl text-brand-ink/80 max-w-xl leading-relaxed mb-8">
              A shared medical home for independent providers. Flexible space, a professional front desk, and a community built around wellness.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button className="inline-flex items-center gap-2 px-6 py-3">
                  Schedule a tour <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/events" className="inline-flex items-center px-6 py-3 border border-brand-dark text-brand-dark font-semibold tracking-wide hover:bg-brand-dark hover:text-white transition-colors">
                Health &amp; Safety Fair
              </Link>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-full">
            <img
              src="https://i.imgur.com/JVvwV5d.jpg"
              alt="Treatment room at The Wellness Corner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <p className="text-brand-accent text-xs uppercase tracking-[0.22em] font-semibold mb-2">8877 West Union Hills Dr.</p>
              <p className="text-2xl font-display">Suite 160, Peoria</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <div className="border border-brand-accent/50 px-5 py-4 text-center min-w-[9rem]">
            <p className="text-brand-accent text-xs uppercase tracking-[0.2em]">Saturday</p>
            <p className="font-display text-5xl leading-none my-1 text-white">14</p>
            <p className="text-sm text-white/80">November 2026</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl text-white mb-2">Community Health &amp; Safety Fair</h2>
            <p className="text-white/75 text-lg">
              8:00 AM – 12:00 PM at the office. Free and open to the public. The first of a quarterly series for Peoria families.
            </p>
          </div>
          <Link to="/events" className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark font-semibold px-5 py-3 hover:bg-white transition-colors w-fit">
            Event details <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold mb-3">For providers</p>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">Everything you need to practice.</h2>
          </div>
          <div className="lg:col-span-8 divide-y divide-[#e4d7c2] border-y border-[#e4d7c2]">
            {offerings.map((item) => (
              <div key={item.number} className="grid sm:grid-cols-[4rem_1fr] gap-4 py-7">
                <p className="font-display text-2xl text-brand-accent">{item.number}</p>
                <div>
                  <h3 className="text-2xl text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-brand-ink/75 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fbf8f2] border-y border-[#e4d7c2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl text-brand-dark mb-10">A home for every practice</h2>
          <div className="grid md:grid-cols-3 gap-px bg-[#e4d7c2] border border-[#e4d7c2]">
            {practices.map((practice) => (
              <article key={practice.title} className="bg-[#fbf8f2] p-8">
                <h3 className="text-2xl text-brand-dark mb-3">{practice.title}</h3>
                <p className="text-brand-ink/75 leading-relaxed">{practice.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="directory" className="py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold mb-3">Directory</p>
              <h2 className="text-4xl md:text-5xl text-brand-dark">Providers &amp; businesses</h2>
            </div>
            <p className="max-w-md text-brand-ink/75">
              The practices sharing The Wellness Corner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <article key={provider.name} className="bg-white border border-[#e4d7c2] p-8 flex flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-accent font-semibold">{provider.role}</p>
                <h3 className="text-3xl text-brand-dark mt-3">{provider.name}</h3>
                <p className="text-brand-primary font-semibold mt-2">{provider.person}</p>
                <p className="text-brand-ink/80 leading-relaxed mt-4 flex-grow">{provider.description}</p>
                {provider.email ? (
                  <a href={`mailto:${provider.email}`} className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-brand-dark hover:text-brand-primary">
                    Contact
                  </a>
                ) : (
                  <Link to="/contact" className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-brand-dark hover:text-brand-primary">
                    Contact
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fbf8f2] border-y border-[#e4d7c2]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-primary font-semibold mb-3 text-center">From the founder</p>
          <h2 className="text-4xl text-brand-dark text-center mb-8">Why this place exists</h2>
          <div className="bg-brand-dark p-2">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/HkUE7G4xQdg"
                title="A Message from The Wellness Corner Founder"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-lg text-brand-ink/75 mt-8 max-w-3xl mx-auto leading-relaxed">
            The Wellness Corner was built so independent providers could practice without carrying a whole clinic alone.
          </p>
        </div>
      </section>

      <section id="support" className="py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-accent font-semibold mb-3">The Foundation</p>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight mb-5">Smaller practices. Larger reach.</h2>
            <p className="text-lg text-brand-ink/80 leading-relaxed mb-6">
              The Wellness Corner Foundation brings independent providers and local partners together for preventive care, education, and quarterly community health events.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/foundation">
                <Button className="px-6 py-3">Read the mission</Button>
              </Link>
              <a href="https://gofund.me/150e48b9c" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-brand-dark font-semibold tracking-wide hover:bg-brand-dark hover:text-white transition-colors">
                Donate
              </a>
            </div>
          </div>
          <div className="bg-brand-dark text-white p-10">
            <p className="font-display text-3xl leading-snug text-white">
              “Good health shouldn’t depend on the size of your healthcare provider — or your ability to pay.”
            </p>
            <p className="mt-6 text-brand-accent text-sm uppercase tracking-[0.16em]">The Wellness Corner Foundation</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-4xl text-white mb-2">Ready to see the space?</h2>
            <p className="text-white/80 text-lg">Tours are scheduled by appointment.</p>
          </div>
          <Link to="/contact">
            <Button variant="secondary" className="inline-flex items-center gap-2 bg-white text-brand-dark hover:bg-brand-light px-6 py-3">
              Schedule a tour <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

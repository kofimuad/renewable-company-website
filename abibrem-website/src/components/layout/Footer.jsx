import { CONTACT_INFO } from '../../constants';

export default function Footer() {
  const footerSections = [
    {
      title: 'COMPANY',
      links: [
        { label: 'About', href: '#' },
        { label: 'Mission', href: '#' },
        { label: 'Team', href: '#' },
      ]
    },
    {
      title: 'SOLUTIONS',
      links: [
        { label: 'Solar Panels', href: '#' },
        { label: 'Hydrogen', href: '#' },
        { label: 'EV & Charging', href: '#' },
      ]
    },
    {
      title: 'RESOURCES',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Documents', href: '#' },
      ]
    },
    {
      title: 'CONNECT',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Twitter', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-black border-t-4 border-cyan-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-black tracking-wider mb-4 text-cyan-400">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-cyan-400">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p className="font-mono">© 2025 ABIBREM RENEWABLE ENERGY SOLUTIONS. ALL RIGHTS RESERVED.</p>
          <p className="text-xs mt-2">BUILDING THE FUTURE OF AFRICAN RENEWABLE ENERGY</p>
        </div>
      </div>
    </footer>
  );
}
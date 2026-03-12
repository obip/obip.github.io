export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">OMI Coordination</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              University Hospital Essen
              <br />
              Institute for AI in Medicine
              <br />
              Data Integration Center
              <br />
              Girardetstrasse 2, 45131 Essen
            </p>
            <a
              href="mailto:Obioma.Pelka@uk-essen.de"
              className="text-[#c0392b] text-sm font-medium mt-3 inline-block hover:underline"
            >
              Obioma.Pelka@uk-essen.de
            </a>
          </div>

          {/* Funding */}
          <div>
            <h3 className="font-bold text-lg mb-4">Funded by</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              German Federal Ministry of
              <br />
              Education and Research (BMBF)
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Part of the Medical Informatics Initiative (MII)
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Open Medical Inference. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

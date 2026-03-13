import Image from "next/image";

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
            <div className="flex items-center gap-6 mt-4">
              <Image
                src="/images/logos/bmbf.png"
                alt="BMBF - German Federal Ministry of Education and Research"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
              <Image
                src="/images/logos/mii.svg"
                alt="Medical Informatics Initiative (MII)"
                width={200}
                height={80}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Part of the Medical Informatics Initiative (MII)
            </p>
          </div>
        </div>

        {/* Bottom logos */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col items-center gap-6">
          <Image
            src="/images/logos/logo-unten.png"
            alt="OMI Partner Institutions"
            width={800}
            height={100}
            className="w-full max-w-3xl h-auto opacity-70"
          />
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Open Medical Inference. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

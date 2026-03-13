import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">OMI Coordination</h3>
            <div className="flex items-start gap-4 mt-4">
              <div className="w-16 h-16 rounded-full hover:rounded-xl overflow-hidden shrink-0 border-2 border-[#c0392b]/30 transition-all duration-300">
                <Image
                  src="/images/board/obioma-pelka.jpeg"
                  alt="Dr. Obioma Pelka"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Dr. Obioma Pelka</p>
                <p className="text-gray-400 text-xs">Scientific Coordinator</p>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  University Hospital Essen
                  <br />
                  Institute for AI in Medicine
                  <br />
                  Girardetstrasse 2, 45131 Essen
                </p>
                <a
                  href="mailto:Obioma.Pelka@uk-essen.de"
                  className="text-[#c0392b] text-sm font-medium mt-2 inline-block hover:underline"
                >
                  Obioma.Pelka@uk-essen.de
                </a>
              </div>
            </div>
          </div>

          {/* Funding */}
          <div>
            <h3 className="font-bold text-lg mb-4">Funded by</h3>
            <div className="flex items-center gap-8 mt-4">
              <Image
                src="/images/logos/mii-omi.jpg"
                alt="Medical Informatics Initiative Germany – OMI"
                width={160}
                height={160}
                className="h-20 w-auto rounded"
              />
              <Image
                src="/images/logos/bmbf.png"
                alt="Sponsored by the Federal Ministry of Education and Research"
                width={200}
                height={80}
                className="h-20 w-auto"
              />
            </div>
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

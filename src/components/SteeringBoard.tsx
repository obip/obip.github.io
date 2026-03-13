import Link from "next/link";
import Image from "next/image";
import { boardMembers } from "@/data/steering-board";

export default function SteeringBoard() {
  return (
    <section id="steering-board" className="py-24 bg-[#1a2332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-3">
            Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Steering Board</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {boardMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/steering-board/${member.slug}`}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors block"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#c0392b]/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-sm mb-1">{member.name}</h3>
              <p className="text-gray-400 text-xs">{member.role}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

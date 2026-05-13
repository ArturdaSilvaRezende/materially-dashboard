import { cn } from "@/lib/utils";

import Brand from "@/assets/brand.svg";
import AuthIlustration from "@/assets/auth-illustration.svg";

interface AuthHeroProps {
  className?: string;
}

export function AuthHero({ className }: AuthHeroProps) {
  return (
    <aside
      className={cn(
        "relative flex flex-col justify-center overflow-hidden px-8 py-12 lg:px-16 max-sm:hidden md:hidden lg:block",
        className,
      )}
      aria-labelledby="auth-hero-title"
    >
      <div className="mb-4">
        <img
          src={Brand}
          alt="Logotipo Materially"
          className="object-cover w-55"
        />
      </div>

      <h2 id="auth-hero-title" className="mb-4 text-4xl font-bold leading-tight text-white text-balance">
        Sua central de controle e análise de dados
      </h2>

      <div className="relative" aria-hidden="true">
        <img src={AuthIlustration} alt="" className="object-cover" />
      </div>
    </aside>
  );
}

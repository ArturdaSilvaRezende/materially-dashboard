import { cn } from "@/lib/utils";

import Brand from "@/assets/brand.svg";
import AuthIlustration from "@/assets/auth-illustration.svg";

interface AuthHeroProps {
  className?: string;
}

export function AuthHero({ className }: AuthHeroProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-center overflow-hidden px-8 py-12 lg:px-16 max-sm:hidden md:hidden lg:block",
        className,
      )}
    >
      <div className="mb-4">
        <img src={Brand} alt="Brand Materially" className="object-cover w-55" />
      </div>

      <h1 className="mb-4 text-4xl font-bold leading-tight text-white text-balance">
        Sua central de controle e análise de dados
      </h1>

      <div className="relative">
        <img
          src={AuthIlustration}
          alt="Financial Illustration"
          className="object-cover"
        />
      </div>
    </div>
  );
}

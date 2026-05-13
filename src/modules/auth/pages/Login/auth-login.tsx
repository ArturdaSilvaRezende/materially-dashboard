import { LoginForm } from "../../components/Form/auth-form";
import { AuthHero } from "../../components/Hero/auth-hero";
import AuthBackground from "@/assets/auth-background.png"


export default function AuthLoginPage() {
  return (
    <main className="flex min-h-screen max-sm:justify-center md:justify-center flex-col bg-cover bg-center lg:flex-row" style={{ backgroundImage: `url(${AuthBackground})` }}>
    
      <AuthHero className="w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen" />
      <div className="flex w-full items-center justify-center px-4 py-8 lg:w-1/2 lg:py-0">
        <LoginForm />
      </div>
    </main>
  )
}

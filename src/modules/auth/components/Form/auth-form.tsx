import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import Brand from "@/assets/brand-dark.svg";

const loginSchema = z.object({
  email: z.string().email("Por favor, insira um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos de serviço",
  }),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div
      className={cn(
        "w-full max-w-md rounded-3xl bg-white p-8 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500",
        className,
      )}
    >
      <div className="mb-8 lg:hidden">
        <img src={Brand} alt="Brand Materially" className="object-cover w-55 mx-auto" />
      </div>

      <div className="mb-8 text-center">
        <p className="text-2xl font-semibold text-gray-900">Seja bem-vindo!</p>
        <p className="text-gray-500 text-[14px] mt-1 max-sm:w-60 max-sm:mx-auto">
          Preencha seus dados para realizar o Login
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-gray-500">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@email.com"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            className="h-11 rounded-lg border-gray-200 bg-gray-50/50 px-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-blue-500/20"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm text-gray-500">
            Senha
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              {...register("password")}
              aria-invalid={errors.password ? "true" : "false"}
              className="h-11 rounded-lg border-gray-200 bg-gray-50/50 px-4 pr-10 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-blue-500/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </div>
          <div className="flex justify-end">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-blue-600 transition-colors"
            >
              Esqueceu a senha?
            </a>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-11 w-full rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>

        <p className="text-center text-sm text-gray-500">
          Novo na Materially?{" "}
          <a
            href="#"
            className="font-medium text-blue-600 hover:underline transition-colors"
          >
            Criar uma conta <ArrowRight className="size-4 inline" />
          </a>
        </p>
      </form>
    </div>
  );
}

import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <ClerkLoading>
        <div className="flex-center h-screen text-2xl">LOADING...</div>
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </main>
  );
}

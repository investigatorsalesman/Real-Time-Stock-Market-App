import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link className="auth-logo" href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist Logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
            porro praesentium velit, eius autem provident culpa in quos quisquam
            vitae delectus numquam labore pariatur laudantium minus! Magnam
            voluptate amet soluta!
          </blockquote>

          <div className="flex items-center justify-between">
            <cite className="auth-testimonial-author"> --Shayan R.</cite>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                  key={star}
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
          <p className="max-md:text-xs text-gray-500">Retail Investor</p>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/assets/images/dashboard.png"
            alt="Dashboard Preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}

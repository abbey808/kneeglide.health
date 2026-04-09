import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="w-full min-h-screen bg-background">
      <header className="w-full z-20 bg-background/80 backdrop-blur-sm border-b border-border/20 px-6 md:px-8 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="text-left cursor-pointer">
              <div className="font-caveat text-4xl md:text-5xl text-primary leading-none">Freedom</div>
              <div className="text-sm md:text-base text-muted-foreground font-light tracking-wide">from knee pain</div>
            </div>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="rounded-full gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 mx-auto max-w-3xl py-16 md:py-24">
        <h1 className="font-caveat text-5xl md:text-6xl text-primary mb-8">Privacy & Data Use</h1>

        <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">What This Site Does</h2>
            <p>
              This website serves as a referral layer connecting individuals experiencing knee pain with local healthcare providers who offer minimally invasive treatments such as Genicular Artery Embolization (GAE). We are not a medical provider — we help you find one near you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Your Information Will Not Be Sold</h2>
            <p>
              We do not sell your personal information to third parties. Your data is treated with care and used solely for the purpose of connecting you with appropriate local providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">How Your Information May Be Shared</h2>
            <p>
              Information you submit through our qualification form may be shared anonymously with healthcare providers in your local area who perform non-invasive knee treatments such as GAE. This sharing is limited to providers who may be able to help you — your information is never distributed broadly or shared with unrelated parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Provider Contact</h2>
            <p>
              By submitting the qualification form on this site, you grant permission for a local provider to contact you regarding your knee pain and potential treatment options. Only providers in your area who specialize in relevant treatments will receive your information and may reach out to you directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Your Consent</h2>
            <p>
              Submitting the form on this website constitutes your consent to the data practices described on this page. You acknowledge that a qualified local provider — and only a local provider — may contact you about treatment options. Your information will not be shared broadly or used for unrelated purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Questions?</h2>
            <p>
              If you have any questions about how your information is used, please reach out to us through the contact information provided on this site.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/">
            <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <footer className="py-8 text-center text-muted-foreground/60 text-sm font-light">
        <p>© {new Date().getFullYear()} Knee Relief Connect. Dedicated to your mobility.</p>
      </footer>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Home = () => {
  return (
    <main className="h-[calc(100vh-5rem)]">
      <div className="py-10 px-8 lg:px-28 ">
        <h1 className="text-6xl">
          Your Companion for Convenient Therapy Support.
        </h1>
        <p className="py-8">
          Access professional therapists at your convenience with our intuitive
          therapy chatbot. Whether you need immediate support or want to
          schedule a session, our chatbot is here to help you navigate your
          mental health journey. Experience compassionate guidance, personalized
          resources, and 24/7 accessibility tailored to your needs.
        </p>
        <Button asChild size="lg">
          <Link href="/chat" className="gap-1">
            Get Started
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default Home;

import Link from "next/link";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Dashboard App</h1>
          <p className="py-6">
            We are thrilled to have you here. Explore, navigate, and make the
            most of this seamless experience. Enjoy your journey!
          </p>
          <Link href={"/dashboard"} className="btn btn-sm btn-neutral">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

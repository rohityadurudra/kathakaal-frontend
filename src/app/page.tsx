export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-4xl font-bold">Welcome to KathaKaal</h1>
      <p className="mt-4 text-lg text-gray-600">
        A Credit Scoring Platform for India's Underserved Communities
      </p>
      <a
        href="/predict"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Get Started
      </a>
    </main>
  );
}

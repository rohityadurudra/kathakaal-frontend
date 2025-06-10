export default function HomePage() {
  // Sample data (you can replace with real data or fetch dynamically)
  const institutions = [
    {
      name: "SBI Bank",
      loanTypes: "Home, Personal, Car",
      interestRate: "From 8.5% p.a.",
      contact: "1800-123-456",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/SBI_logo.svg",
    },
    {
      name: "HDFC Bank",
      loanTypes: "Personal, Education, Business",
      interestRate: "From 9.0% p.a.",
      contact: "1800-654-321",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png",
    },
    {
      name: "Bajaj Finserv",
      loanTypes: "Personal, Consumer Durable",
      interestRate: "From 12.5% p.a.",
      contact: "1800-789-123",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Bajaj_Finserv_Logo.svg/1200px-Bajaj_Finserv_Logo.svg.png",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      feedback: "KathaKaal helped me get a loan quickly with a clear credit score!",
    },
    {
      name: "Rajiv Menon",
      feedback: "The platform is easy to use and really helped me understand my credit standing.",
    },
    {
      name: "Sneha Gupta",
      feedback: "Thanks to KathaKaal, I secured a personal loan with low interest rates.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 max-w-full mx-auto flex flex-col gap-12">
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold">Welcome to KathaKaal</h1>
        <p className="mt-4 text-lg text-gray-700">
          A Credit Scoring Platform for India's Underserved Communities
        </p>
        <a
          href="/predict"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition hover:bg-blue-700"
        >
          Get Started
        </a>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Institutions Offering Loans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {institutions.map((inst) => (
            <div
              key={inst.name}
              className="border rounded-lg p-6 flex flex-col items-center text-center shadow hover:shadow-lg transition"
            >
              <img src={inst.logo} alt={inst.name} className="h-16 mb-4 object-contain" />
              <h3 className="text-xl font-semibold mb-1">{inst.name}</h3>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Loan Types:</span> {inst.loanTypes}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Interest Rate:</span> {inst.interestRate}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Contact:</span> {inst.contact}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Customers Say</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {testimonials.map(({ name, feedback }) => (
            <blockquote
              key={name}
              className="bg-gray-100 p-6 rounded-lg shadow text-center italic text-gray-800"
            >
              <p>“{feedback}”</p>
              <footer className="mt-4 font-semibold text-gray-900">— {name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}


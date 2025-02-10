export default function Tokenomics() {
    return (
      <section className="text-center space-y-6 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Tokenomics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "1B Supply", desc: "Total token supply" },
            { title: "LP Locked", desc: "Liquidity locked" },
            { title: "LP Fees", desc: "TOP 50 earn LP fees" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-1">
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  

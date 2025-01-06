export default function Hero() {
  const memeImages = [
    "https://i.imgur.com/xsTJT2o.png",
    "https://i.imgur.com/LBm3ZgU.png",
    "https://cdn-useast1.kapwing.com/static/templates/im-just-a-chill-guy-meme-template-background-removed-utNndWSncvZLXrdD-full.jpg",
    "https://i.imgur.com/HZRGuAI.png"
  ];

  return (
    <div className="min-h-screen relative py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-50"></div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 py-12">
            <div className="lg:w-1/2">
              <h1 className="text-6xl font-bold text-blue-400 mb-6">
                Welcome to Chill Coin!
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Chillcoin (CHILL) is PoW memecoin powered by Chill Guy meme, which brings relaxed vibe and care about nothing. 
                Chillcoin having own L1 network which using Scrypt algo, same to Dogecoin.
                <span className="block mt-4 font-semibold text-green-400">
                  No premine, ICO, presale
                </span>
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://i.postimg.cc/Gp3WstVh/image.png"
                alt="Chill Guy Meme"
                className="rounded-2xl shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform w-full h-auto"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
  {memeImages.map((src, i) => (
    <div key={i} className="p-4 aspect-square">
      <img
        src={src}
        alt={`Chill Meme ${i + 1}`}
        className="rounded-lg shadow-lg hover:scale-105 transition-transform w-full h-full object-contain"
      />
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  )
}


export default function Community() {
  const communityItems = [
    { 
      title: "Stay Chill", 
      desc: "Join the chillest community in crypto", 
      image: "https://i0.wp.com/www.cultr.com/wp-content/uploads/2024/11/im-just-a-chill-guy-20.jpeg?resize=696%2C838&ssl=1" 
    },
    { 
      title: "Share Memes", 
      desc: "Create and share your Chill Guy memes", 
      image: "https://i.imgur.com/bPqTGF6.png" 
    },
    { 
      title: "Have Fun", 
      desc: "Because that's what Chill Coin is about", 
      image: "https://i.imgur.com/h7RM8W7.png" 
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">
          Join our Community
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Join our Community and follow social networks to spread art and get fun with Chill Guy memes!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {communityItems.map((item, i) => (
            <div 
              key={i} 
              className="p-6 bg-gray-800/50 backdrop-blur rounded-xl shadow-lg hover:scale-105 transition-transform border border-blue-500/20 flex flex-col h-full"
            >
              <div className="flex-grow flex items-end">
                <img
                  src={item.image}
                  alt={`Chill Meme ${i + 1}`}
                  className="w-full h-auto object-contain mb-4"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


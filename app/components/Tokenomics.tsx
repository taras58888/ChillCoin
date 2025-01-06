'use client'

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from "@/components/ui/card"
import { ComputerIcon as Windows, LaptopIcon as Linux, Github } from 'lucide-react'
import Link from 'next/link'

const tokenomicsData = [
  { supply: "500m", blocks: "100000", reward: "5000" },
  { supply: "750m", blocks: "200000", reward: "2500" },
  { supply: "875m", blocks: "300000", reward: "1250" },
  { supply: "937.5m", blocks: "400000", reward: "625" },
  { supply: "968.75m", blocks: "500000", reward: "312.5" },
  { supply: "984.375m", blocks: "600000", reward: "156.25" },
];

// Calculate supply over time data points
const supplyChartData = [
  { month: 1, supply: 216 },
  { month: 2, supply: 432 },
  { month: 3, supply: 574 },
  { month: 4, supply: 682 },
  { month: 5, supply: 770 },
  { month: 6, supply: 824 },
  { month: 7, supply: 876.5 },
  { month: 8, supply: 903.5 },
  { month: 9, supply: 930.5 },
  { month: 10, supply: 947.5 },
  { month: 11, supply: 961 },
  { month: 12, supply: 971.6 },
  { month: 13, supply: 978.3 },
  { month: 14, supply: 984.8},
  { month: 15, supply: 989.1 },
  { month: 16, supply: 993.3 },
  { month: 17, supply: 997.8 },
];


export default function Tokenomics() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Tokenomics Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/2">
            <img
              src="https://i.imgur.com/x45AbUc.png"
              alt="Tokenomics Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">Chill Tokenomics</h2>
            <div className="mb-6">
              <p className="text-2xl text-gray-300">Total supply: 1,000,000,000 coins</p>
              <p className="text-xl text-gray-300 mt-2">Block time: 60 seconds</p>
            </div>
            <div className="overflow-x-auto rounded-lg shadow-xl">
              <table className="min-w-full bg-gray-800 border-collapse">
                <thead className="bg-blue-900">
                  <tr>
                    <th className="py-4 px-6 text-center text-blue-300 font-medium">Supply</th>
                    <th className="py-4 px-6 text-center text-blue-300 font-medium">Blocks</th>
                    <th className="py-4 px-6 text-center text-blue-300 font-medium">Reward</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenomicsData.map((row, index) => (
                    <tr 
                      key={index}
                      className={`
                        ${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}
                        hover:bg-blue-800 transition-colors
                      `}
                    >
                      <td className="py-4 px-6 text-center text-gray-300">{row.supply}</td>
                      <td className="py-4 px-6 text-center text-gray-300">{row.blocks}</td>
                      <td className="py-4 px-6 text-center text-gray-300">{row.reward}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-300 text-center">
              After 600,000 blocks, reward will be 100 coins until the end of emission
            </p>
          </div>
        </div>

        {/* Supply Chart Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center">Supply Chart</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={supplyChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="month" 
                  label={{ value: 'Time (Months)', position: 'bottom', fill: '#9CA3AF' }}
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  label={{ value: 'Supply (Millions)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #3B82F6' }}
                  labelStyle={{ color: '#9CA3AF' }}
                  itemStyle={{ color: '#93C5FD' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="supply" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>


        {/* Wallets Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Windows, title: "Windows Wallet", link: "#" },
              { icon: Linux, title: "Linux Wallet", link: "#" },
              { icon: Github, title: "Source Code", link: "https://github.com/chillcoin-project/chillcoin" }
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-gray-800/50 hover:bg-gray-800 transition-colors border-blue-500/20">
                <div className="flex flex-col items-center">
                  <item.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h3>
                  <Link href={item.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                    Download
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mining Pools Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-blue-400 mb-8">Mine on Mining Pools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Mining Pool 1", link: "#" },
              { name: "Mining Pool 2", link: "#" },
              { name: "Mining Pool 3", link: "#" }
            ].map((pool, i) => (
              <Card key={i} className="p-6 bg-gray-800 hover:bg-gray-700 transition-colors border-blue-500/20">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-blue-400">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{pool.name}</h3>
                  <Link href={pool.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                    Start Mining
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

.


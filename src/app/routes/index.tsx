import GameGrid from "@/components/games/GameGrid"

export default function HomePage() {
  const games = [
    {
      appid: "730",
      title: "Counter-Strike 2",
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
      price: 9.99,
      originalPrice: 19.99,
      discountPercent: 50,
    },
    {
      appid: "570",
      title: "Dota 2",
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
      price: null,
      originalPrice: null,
      discountPercent: null,
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Juegos con descuento</h2>
      <GameGrid
        games={games}
        onAddToCart={(appid) => console.log("Agregar al carrito:", appid)}
      />
    </div>
  )
}

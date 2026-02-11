import GameCard from "./GameCard"

type Game = {
  appid: string
  title: string
  imageUrl: string
  price?: number | null
  originalPrice?: number | null
  discountPercent?: number | null
}

type Props = {
  games: Game[]
  onAddToCart?: (appid: string) => void
}

export default function GameGrid({ games, onAddToCart }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {games.map((g) => (
        <GameCard
          key={g.appid}
          appid={g.appid}
          title={g.title}
          imageUrl={g.imageUrl}
          price={g.price ?? null}
          originalPrice={g.originalPrice ?? null}
          discountPercent={g.discountPercent ?? null}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

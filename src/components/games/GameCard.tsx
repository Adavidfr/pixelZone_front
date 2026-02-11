import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type GameCardProps = {
  appid: string
  title: string
  imageUrl: string
  price?: number | null
  originalPrice?: number | null
  discountPercent?: number | null
  onAddToCart?: (appid: string) => void
}

export default function GameCard({
  appid,
  title,
  imageUrl,
  price = null,
  originalPrice = null,
  discountPercent = null,
  onAddToCart,
}: GameCardProps) {
  const hasDiscount = !!discountPercent && discountPercent > 0 && !!originalPrice
  const showPrice = price !== null && price !== undefined

  return (
    <Card className="overflow-hidden border-white/10 bg-[#0D171F] text-white transition hover:-translate-y-1 hover:border-[#2993FA]/50 hover:shadow-[0_0_0_1px_rgba(41,147,250,.25),0_12px_30px_rgba(0,0,0,.45)]">
      {/* Imagen */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-44 w-full object-cover"
          loading="lazy"
        />

        {hasDiscount && (
          <Badge className="absolute left-3 top-3 bg-[#2993FA] text-white">
            -{discountPercent}%
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="line-clamp-1 text-base font-semibold">{title}</h3>

        <div className="mt-3 flex items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="text-sm text-white/60 line-through">
                ${originalPrice?.toFixed(2)}
              </span>
              <span className="text-lg font-bold text-white">
                ${price?.toFixed(2)}
              </span>
            </>
          ) : showPrice ? (
            <span className="text-lg font-bold">${price?.toFixed(2)}</span>
          ) : (
            <span className="text-sm text-white/60">Precio no disponible</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button asChild className="w-full bg-[#2993FA] hover:bg-[#2993FA]/90">
          <Link to={`/game/${appid}`}>Ver detalles</Link>
        </Button>

        <Button
          variant="secondary"
          className="w-full bg-white/10 text-white hover:bg-white/15"
          onClick={() => onAddToCart?.(appid)}
          type="button"
        >
          Agregar
        </Button>
      </CardFooter>
    </Card>
  )
}

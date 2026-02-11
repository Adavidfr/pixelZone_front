import { useParams } from "react-router-dom"

export default function GameDetailPage() {
  const { appid } = useParams()
  return <div className="p-6">Detalle del juego: {appid}</div>
}

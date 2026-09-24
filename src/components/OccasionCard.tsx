interface OccasionCardProps {
  name: string
  image: string
  onClick: () => void
}

export default function OccasionCard({ name, image, onClick }: OccasionCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
    >
      <img 
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
        <h3 className="text-white text-xl font-serif font-bold">{name}</h3>
      </div>
    </button>
  )
}

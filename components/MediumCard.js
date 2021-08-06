import Image from 'next/image'

const MediumCard = ({ item }) => {
  const { img, title } = item
  return (
    <article className="transition duration-300 ease-out transform cursor-pointer hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </article>
  )
}

export default MediumCard

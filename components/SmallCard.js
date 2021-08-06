import Image from 'next/image'

const SmallCard = ({ item }) => {
  const { img, location, distance } = item
  return (
    <article className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105">
      <div className="relative w-16 h-16">
        <Image src={img} alt={location} layout="fill" className="rounded-lg" />
      </div>
      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </article>
  )
}

export default SmallCard

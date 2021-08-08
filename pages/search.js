import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'
// import { format, parseISO } from 'date-fns'

const search = ({ searchResult }) => {
  const router = useRouter()
  const { location, startDate, endDate, numberOfGuests } = router.query

  // const formattedStartDate = format(new Date(), 'yyyy-MM-dd')
  // const formattedEndDate = format(new Date(endDate), 'MM/dd/yyyy')
  const range = `${startDate} - ${endDate}`

  return (
    <>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            <span className="px-4 py-2 text-white bg-red-400 rounded-full">
              {range}
            </span>{' '}
            - from {numberOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="hidden mb-5 space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map((result) => (
              <InfoCard result={result} key={result.img} />
            ))}
          </div>
        </section>
        {/* map */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResult={searchResult} />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default search

export const getServerSideProps = async () => {
  const searchResult = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )
  return {
    props: {
      searchResult,
    },
  }
}

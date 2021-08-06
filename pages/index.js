import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <>
      <Head>
        <title>Airbnb clone</title>
        <meta
          name="description"
          content="This is Airbnb clone site created with next.js, tailwindCSS, "
        />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* main */}
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard item={item} key={item.img} />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="pb-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="flex p-3 -ml-3 space-x-3 overflow-x-scroll scrollbar-hide">
            {cardsData?.map((item) => (
              <MediumCard item={item} key={item.img} />
            ))}
          </div>
        </section>

        <div>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}

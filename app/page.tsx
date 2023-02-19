import Result from "../components/Result"
import Summary from "../components/Summary"

const HomePage = () => {
  return (
    <main>
      {/* Result */}
      <div className="space-y-5 flex flex-col md:flex-row justify-center md:h-screen md:items-center">
        <div className="bg-white flex flex-col md:flex-row md:shadow-2xl rounded-3xl">
          <Result />
          <Summary />
        </div>
      </div>
    </main>
  )
}

export default HomePage

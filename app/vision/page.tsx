import Header from "../../components/header"
import Footer from "../../components/footer"
import VisionContent from "./vision-content"

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] flex flex-col">
      <Header />
      <main className="flex-grow">
        <VisionContent />
      </main>
      <Footer />
    </div>
  )
}


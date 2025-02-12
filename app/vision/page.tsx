
import Footer from "../components/Footer"
import VisionContent from "./vision-content"

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] flex flex-col">
      <main className="flex-grow">
        <VisionContent />
      </main>
      <Footer />
    </div>
  )
}


import { HeroSection } from '@/components/home/HeroSection'
import { OfferSection } from '@/components/home/OfferSection'
import { GuaranteeSection } from '@/components/home/GuaranteeSection'
import { HelloBar } from '@/components/home/HelloBar'

export default function Live() {
  return (
    <div className="flex flex-col min-h-screen">
      <HelloBar />
      <HeroSection />
      <OfferSection />
      <GuaranteeSection />
    </div>
  )
}

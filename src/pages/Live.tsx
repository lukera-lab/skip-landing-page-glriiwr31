import { HeroSection } from '@/components/home/HeroSection'
import { OfferSection } from '@/components/home/OfferSection'
import { GuaranteeSection } from '@/components/home/GuaranteeSection'

export default function Live() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <OfferSection />
      <GuaranteeSection />
    </div>
  )
}

import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Philosophy } from '@/components/philosophy'
import { MenuSection } from '@/components/menu-section'
import { TechLounge } from '@/components/tech-lounge'
import { LabSection } from '@/components/lab-section'
import { FranchisePortal } from '@/components/franchise-portal'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-petrol">
      <SiteHeader />
      <main>
        <Hero />
        <Philosophy />
        <MenuSection />
        <TechLounge />
        <LabSection />
        <FranchisePortal />
      </main>
      <SiteFooter />
    </div>
  )
}

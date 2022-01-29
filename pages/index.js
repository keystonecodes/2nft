import GalleryFooter from '../components/Gallery/GalleryFooter'
import GalleryHeader from '../components/Gallery/GalleryHeader'
import GalleryHome from '../components/Gallery/GalleryHome'

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-auto justify-between scroll-smooth">
      <GalleryHeader />
      <GalleryHome />
      <GalleryFooter />
    </div>
  )
}

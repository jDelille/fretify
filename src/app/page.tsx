import Home from '@/components/home/Home'
import Sidebar from '@/components/sidebar/Sidebar'

const HomePage = () => {
  return (
    <div className="page">
        <Sidebar />
        <div className="content">
            <Home />
        </div>
    </div>
  )
}

export default HomePage
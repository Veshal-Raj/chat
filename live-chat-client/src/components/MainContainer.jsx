import { Sidebar } from './Sidebar'
import WorkArea from './WorkArea'
import './myStyles.css'

export const MainContainer = () => {
  return (
    <div className='main-container'>
        <Sidebar />
        <WorkArea />
    </div>
  )
}

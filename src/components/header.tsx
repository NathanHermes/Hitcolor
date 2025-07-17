import logoHitcolor from '../assets/logo-hitcolor.svg'
import { Drawer } from './Drawer'

export const Header = () => {
  return (
    <header className='w-full flex items-center justify-between p-4 border border-hitcolor-800'>
      <div className='w-auto h-6 flex items-center justify-center'>
        <img src={logoHitcolor} className='w-auto h-full' />
      </div>

      <Drawer />
    </header>
  )
}
import logoHitcolor from '@assets/logo-hitcolor.svg'
import { Bag, Menu } from 'iconsax-reactjs'

export const Header = () => {
  const handleMenu = () => {
    console.log('Menu button clicked')
  }

  return (
    <header className='w-full flex items-center justify-between'>
      <button
        onClick={() => handleMenu()}
        className='w-auto h-auto flex items-center justify-center p-2 rounded-4xl duration-300 active:bg-hitcolor-100'>
        <Menu size={20} className='text-hitcolor-800' />
      </button>

      <div className='w-auto h-10 flex items-center justify-center'>
        <img src={logoHitcolor} className='w-auto h-full' />
      </div>

      <button className='w-auto h-auto flex items-center justify-center p-2 border border-hitcolor-800 rounded-4xl duration-300 ease-in-out active:bg-hitcolor-800 '>
        <Bag size={20} className='w-auto h-auto text-hitcolor-800 duration-300 ease-in-out active:text-white' />
      </button>
    </header>
  )
}
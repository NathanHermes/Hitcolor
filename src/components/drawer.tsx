import { Add, Bag, CallCalling, Home, Menu, People, Shop, User } from 'iconsax-reactjs';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Drawer() {
  const [ open, setOpen ] = useState<boolean>(false);
  const [ display, setDisplay ] = useState<string>();
  const path = useLocation().pathname;

  useEffect(() => {
    setDisplay(open ? 'flex' : 'hidden');
  }, [ open ])

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className='w-auto h-auto flex items-center justify-center p-1
        text-hitcolor-800 active:bg-hitcolor-800 active:text-white duration-300 ease-in-out'
      >
        <Menu size='20' variant='TwoTone' />
      </button>

      <section
        className={
          `w-full h-full ${display} items-start justify-end fixed top-0 left-0 z-10 backdrop-brightness-50`
        }
      >
        <article className='w-10/12 h-full flex flex-col items-start justify-start gap-8 p-4 bg-hitcolor-800'>
          <header className='w-full h-auto flex items-center justify-start'>
            <button
              className='w-auto h-auto flex items-center justify-center p-1 
              text-zinc-50 active:bg-white active:text-hitcolor-800 duration-300 ease-in-out'
              onClick={() => setOpen(false)}
            >
              <Add size='24' variant='TwoTone' className='rotate-45' />
            </button>
          </header>


          <section className='w-full h-full flex flex-col items-start justify-start gap-4 px-2'>
            <Link
              to='/'
              className={`w-full h-auto flex items-center justify-start gap-4 p-4 border border-zinc-50
                ${path === '/'
                  ? 'bg-zinc-50 text-hitcolor-800 active:bg-hitcolor-800 active:text-zinc-50'
                  : 'text-zinc-50 active:bg-zinc-50 active:text-hitcolor-800'
                } duration-300 ease-in-out`
              }
            >
              <Home size='20' variant='TwoTone' />

              <span>Principal</span>
            </Link>

            <Link
              to='/products'
              className={`w-full h-auto flex items-center justify-start gap-4 p-4 border border-zinc-50
                ${path === '/products'
                  ? 'bg-zinc-50 text-hitcolor-800 active:bg-hitcolor-800 active:text-zinc-50'
                  : 'text-zinc-50 active:bg-zinc-50 active:text-hitcolor-800'
                } duration-300 ease-in-out`
              }
            >
              <Shop size='20' variant='TwoTone' />

              <span>Produtos</span>
            </Link>

            <Link
              to='/about'
              className={`w-full h-auto flex items-center justify-start gap-4 p-4 border border-zinc-50
                ${path === '/about'
                  ? 'bg-zinc-50 text-hitcolor-800 active:bg-hitcolor-800 active:text-zinc-50'
                  : 'text-zinc-50 active:bg-zinc-50 active:text-hitcolor-800'
                } duration-300 ease-in-out`
              }
            >
              <People size='20' variant='TwoTone' />

              <span>Sobre nós</span>
            </Link>

            <Link
              to='/contact'
              className={`w-full h-auto flex items-center justify-start gap-4 p-4 border border-zinc-50
                ${path === '/contact'
                  ? 'bg-zinc-50 text-hitcolor-800 active:bg-hitcolor-800 active:text-zinc-50'
                  : 'text-zinc-50 active:bg-zinc-50 active:text-hitcolor-800'
                } duration-300 ease-in-out`
              }
            >
              <CallCalling size='20' variant='TwoTone' />

              <span>Contato</span>
            </Link>
          </section>

          <section className='w-full h-auto flex items-center justify-between px-2 py-4'>
            <div className='w-full h-full flex items-center justify-start border border-zinc-50'>
              <button className='w-auto h-auto flex items-center justify-center px-4 text-zinc-50'>
                <User size='24' variant='TwoTone' />
              </button>

              <div className='w-auto h-auto flex flex-col items-start justify-start'>
                <span className='font-work-sans text-base text-zinc-50'>Hitcolor</span>

                <span className='font-work-sans text-sm text-hitcolor-600'>user@email.com</span>
              </div>
            </div>

            <button className='w-auto h-auto flex items-center justify-center p-4 bg-zinc-50 text-hitcolor-800 border border-zinc-50 duration-300 ease-in-out active:bg-hitcolor-800'>
              <Bag size='20' variant='TwoTone' />
            </button>
          </section>
        </article>
      </section>
    </>
  )
}
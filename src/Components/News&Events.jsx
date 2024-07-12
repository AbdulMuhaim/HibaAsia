import React from 'react'
import { useTranslation } from 'react-i18next';

function NewsEvents() {

  const { t } = useTranslation();

  return (
    <div 
      className="flex items-center justify-center py-32"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/5428267/pexels-photo-5428267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"),linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))', 
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-[1100px] flex flex-col gap-10 items-center justify-center">
        <h1 className='uppercase font-bold text-3xl text-white text-center'>{t('News & Events')}</h1>
        <h2 className='text-lg text-white px-7 text-center'>{t('News & Events Text')}</h2>
        <button className="bg-transparent text-white hover:bg-white hover:text-sky-800 text-xs uppercase px-6 py-4 border-2 border-white rounded shadow-lg transition duration-500 ease-in-out overflow-hidden">
          {t('Click here to know more')}
        </button>     
      </div>
    </div>
  )
}

export default NewsEvents

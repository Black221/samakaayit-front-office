import React from 'react'

function Notifications() {
  return (
    <div className='px-4'>
      <h1 className='text-2xl font-semibold'>Notifications</h1>
      <hr className='my-4 h-[1px] bg-black' />

      <div className='w-1/2 mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Parametres de notifications</h2>
  
        <div className='flex items-center justify-between mb-2'>
          <p className='text-lg font-medium'> Notifications par email</p>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={false} value="" className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>
  
        <div className='flex items-center justify-between'>
          <p className='text-lg font-medium'> Notifications push</p>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={true} value="" className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>
      </div>

      <div className='w-1/2'>
        <h2 className='text-xl font-semibold mb-4'>Fréquences notifications</h2>

        <div className="flex flex-col gap-5">
          <div className="inline-flex items-center">
            <label className="relative flex items-center cursor-pointer" htmlFor="html">
              <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" checked={true} id="html" />
              <span className="absolute bg-primary-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              </span>
            </label>
            <label className="ml-2 text-slate-600 cursor-pointer" htmlFor="html">Immédiate</label>
          </div>
        
          <div className="inline-flex items-center">
            <label className="relative flex items-center cursor-pointer" htmlFor="react">
              <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="react" />
              <span className="absolute bg-primary-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              </span>
            </label>
            <label className="ml-2 text-slate-600 cursor-pointer" htmlFor="react">Quotidienne</label>
          </div>
        
          <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="hebdommadaire">
                <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="hebdommadaire" />
                <span className="absolute bg-primary-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                </span>
              </label>
              <label className="ml-2 text-slate-600 cursor-pointer" htmlFor="hebdommadaire">Hebdommadaire</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Notifications;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setshowMode } from '../appstore/reducers/accesblity';

export const Search = () => {
    const view=useSelector(state=>state.tools.showMode);
    // const view='grid'
    const dispatch=useDispatch();
  return (
    <div className='h-10 bg-white flex p-1 gap-2 justify-around'>
        <div className='  rounded-sm gap-2 p-2 flex items-center justify-around border-gray-700 border-[1px]'>
            <button 
                className={`material-symbols-outlined text-zinc-900 border-[1px]  ${view === 'grid' ? 'bg-zinc-300 border-zinc-600 rounded-sm' : ''}`}
                onClick={() => dispatch(setshowMode('grid'))}
            >
                grid_view
            </button>
            <button 
                className={`material-symbols-outlined text-zinc-900 border-[1px]  ${view === 'list' ? 'bg-zinc-300 border-zinc-600 rounded-sm' : ''}`}
                onClick={() => dispatch(setshowMode('list'))}
            >
                view_list
            </button>
        </div>

    <div className=' w-full max-w-[800px] flex'>
        <input placeholder='Search' className='px-3 placeholder:text-indigo-950 bg-primary2 w-full rounded-l-3xl  focus:outline-1 focus:outline-blue-600  outline-gray-300 outline-1 outline ' type="text" name="" id="" />
        <button className='bg-primary3 w-10 flex items-center justify-center rounded-r-full active:bg-black ' ><span className="material-symbols-outlined">search</span></button>
    </div>
</div>
  )
}

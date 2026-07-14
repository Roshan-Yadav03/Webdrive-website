import classNames from 'classnames';
import React,{useState} from 'react'

const Links = ({data,deleteLink,view}) => {
  const [showdesc,setshowdesc]=useState(false);
  const d=new Date(data.createdAt.seconds*1000);

  return (
    <div className={classNames('  bg-black h-fit overflow-auto m-2 p-2 rounded-md ',{'max-w-96 mx-auto ':view=="grid"})}>
      <div className='flex flex-wrap justify-between gap-4'>
          <a className='w-fit text-purple-400 hover:text-yellow-200  ' href={data.url}>{data.title}</a>
          <article className='w-full sm:w-fit justify-center text-[0.8rem] font-light gap-2 flex'>
          <button onClick={()=>deleteLink("notpath",data.id)} className="text-red-500 material-symbols-outlined">Delete</button>
          <span className=''>{ d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear() }</span>
              <span>{d.getHours()+":"+d.getMinutes()}</span>
              <button className=' float-right active:bg-gray-100 text-blue-800 h-fit px-2 rounded-md bg-white' onClick={()=>setshowdesc(!showdesc)}>{showdesc?"hide":"show description"}</button>
          </article>
          
      </div>
      <div className=' bg-white text-black'>
        {showdesc && <p className=' m-2 rounded-md max-h-32 overflow-auto p-3'>{data.description}</p>}
      </div>
    </div>
  )
}

export default Links
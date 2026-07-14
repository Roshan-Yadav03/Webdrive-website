import React, { useEffect, useState } from 'react';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {Model} from './Model';
import { useSelector } from 'react-redux';
import { Search } from './Search';
export const Layout=()=>{
    const isopen=useSelector(state=>state.tools.isSidebaropen);
   
    useEffect(()=>{
        console.log("layout rendered");
    })
    return(
        <>  
        <Header/>   
            <div className='bg-white flex h-full  '>
            <div className={`absolute overflow-hidden md:static w-44 transition-all h-[calc(100vh-56px)] border-[1px_1px_0px_0px] bg-[#000000] border-r-[1px] border-t-[1px] border-zinc-600 ${!isopen && ' -translate-x-44 md:translate-x-0 md:w-12'}`}><SideBar /></div>

            <div className='flex-1  h-[calc(100vh-56px)] bg-blue-500 text-white flex-col flex '>
                <Search/>
            <div style={{backgroundImage:"url(https://vis-australia.com.au/wp-content/uploads/2020/06/Data-Storage.jpg)"}} className='bg-primary1 flex-1 overflow-auto text-white flex flex-wrap p-3 pt-5 md:p-5'>
                <Outlet/>
            </div>
            </div>
        </div> 
        </>
    );
}
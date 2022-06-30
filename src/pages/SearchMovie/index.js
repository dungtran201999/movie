import React, { useState, useRef } from 'react';
import { MovieSearch } from '../../helpers/utils';

const SearchMovie=({submitIdMovie})=>{
    const [searchValue,setSearchValue]=useState('')
    const [dataSearch,setDataSearch]=useState([])
    const [showDropdownMenu,setShowDropdownMenu] =useState(false)
    const typingTimeoutRef=useRef(null)

    const handleSearchOnChange=(e)=>{
        const value = e.target.value
        setSearchValue(value)

        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }
        if(value.length <2 ) return;

        typingTimeoutRef.current= setTimeout(async()=>{
            const {results}= await MovieSearch(value)
            if(results.length>0){
                setShowDropdownMenu(true)
                setDataSearch(results.slice(0,5))
            }else{
                setShowDropdownMenu(false)
            }
        },300)
    }
    const handleOnClickIdMovie=(value)=>{
        submitIdMovie(value)
        setShowDropdownMenu(false)
        setSearchValue(value.title)
    }
    return (
        <div className="relative">
            <div className="text-right mb-10 mt-5">
                <input 
                    type="text" 
                    className="border-b border-[#fff] py-2 px-3 w-[58%] bg-transparent text-white outline-none" 
                    placeholder="Search Movie Title..." 
                    value={searchValue}
                    onChange={handleSearchOnChange}
                    />
            </div>
            <div className={`${showDropdownMenu ? 'translate-y-0 visible opacity-100 transition-all duration-[1000ms]': 'translate-y-5 invisible opacity-0'}  absolute w-[58%] top-full right-0 bg-[#000000c2] pt-1`}>
                {dataSearch?.map((items,index)=>(
                    <p key={index} onClick={()=>handleOnClickIdMovie({id:items.id,title:items.title})} className="text-[#c0c6d0] mb-1 hover:bg-[#00FC87] py-1 px-3 hover:text-[#000] text-[17px] cursor-pointer">{items.title}</p>
                ))}
            </div>
        </div>
    );
}

export default SearchMovie;
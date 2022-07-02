import React ,{useEffect} from 'react';

const Card = ({infoMovie}) => {
    useEffect(() => {
        document.body.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${infoMovie?.backdrop_path}')`
        document.body.style.backgroundSize = "cover"
      }, [infoMovie])
    return (
        <div className="bg-[#000000d9] rounded inline-block mb-8 md:mb-0 md:flex">
            <div className="w-full md:w-2/5"><img src={`https://image.tmdb.org/t/p/w500${infoMovie?.poster_path}`} alt="" /></div>
            <div className="w-full md:w-3/5 p-4">
                <h1 className="text-[40px] font-bold ">{infoMovie?.original_title}</h1>
                <span className="font-[Oswald,sans-serif] text-[#00FC87] text-xl mb-2 block">{infoMovie?.tagline}</span>
                <p className="text-base mb-4 ">{infoMovie?.overview}</p>
                <div className="mt-9">
                    <span className="font-[Oswald,sans-serif] text-[#00FC87] text-xl">{infoMovie?.genres.map((items,key)=>items.name +', ')}</span>
                    <p className="font-[Oswald,sans-serif] text-base mb-5">{infoMovie?.production_companies.map((items,key)=>items.name +', ')} </p>
                    <div className="flex font-[Oswald,sans-serif] text-base">
                        <div className="w-1/2">
                            Original Release:
                            <span className="block text-2xl text-[#00FC87]">{infoMovie?.release_date}</span>
                        </div>
                        <div className="w-1/2">
                            Running Time:
                            <span className="block text-2xl text-[#00FC87]">{infoMovie?.runtime} mins</span>
                        </div>
                    </div>
                    <div className="flex font-[Oswald,sans-serif] text-base mt-4">
                        <div className="w-1/2">
                            Box Office:
                            <span className="block text-2xl text-[#00FC87]">${infoMovie?.revenue}</span>
                        </div>
                        <div className="w-1/2">
                            Vote Average:
                            <span className="block text-2xl text-[#00FC87]">{infoMovie?.vote_average} / 10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
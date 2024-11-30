import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../assets/Hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


const Tag = () => {

    // const [gif, setGif] = useState('')
    // const [loading, setLoading] = useState(false)
    const [tag, setTag] = useState('car')
    const {gif, loading , fetchData} = useGif(tag);
    

   
    // async function fetchData() {
    //     setLoading(true); 
    //     // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     // const {data} = await axios.get(url);
    //     // const imageSource = data.data.images.downsized_large.url;
    //     // setGif(imageSource);    
    //     setLoading(false); 
    // }
    
    // useEffect(() => {
    //     // fetchData();
        
    // }, [])
    function clickHandler(){
        fetchData(tag);
    }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl font-bold underline uppercase'>Random {tag} GIF</h1>
        {loading ? (<Spinner/>):( <img src={gif} width='450' />)
        }

        <input type="text"
        className='w-10/12 bg-yellow-500 rounded-lg text-lg text-center py-2 mb-[3px]' 
        onChange={(e) => setTag(e.target.value)}
        value={tag}/>
       
        <button onClick={clickHandler}
        className='w-10/12 bg-yellow-500 rounded-lg py-2 text-lg mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag
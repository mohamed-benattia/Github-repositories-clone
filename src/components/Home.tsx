import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Home() {
      
    return (
        <div className="home">
        
            <div className='home-title'>
                <span>
                    Enter your GitHub name to get all the repositories
                </span>
                <div className='home-input-container'>
                    <input className={'home-input'} type="text"  />
                    <div className={'search-icon-container'}>
                        <FontAwesomeIcon className={'search-icon'} icon={ faSearch } color={'#192330'} />
                    </div>
                </div>

                <button className={'btn-custom btn-search'} >
                    Start searching !
                </button>
            </div>     
         </div>
        
    )
}
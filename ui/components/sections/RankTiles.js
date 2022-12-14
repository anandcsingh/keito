import Link from 'next/link';
import React from 'react';
import RankItem from './partials/RankItem';
import { useEffect, useState } from "react";

const RankTiles = () => {

    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  var address = "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";

    // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {

    
    fetch(`api/user/${address}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.martialArts);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )                                     
  }, [])
    
 

    return (
        <section className="section">
            <div className="container">
                <div className="section-inner">
                    <div className="tiles-wrap">
                        {items.map((i, index) => (
                    <RankItem key={index} martialArtShortName={i.martialArtShortName} rank={i.rank} martialArt={i.martialArt} certified={i.certified} />
                        
                        ))}


                        <Link href="addrank">
                            <div className="tiles-item" title='Add new Martial Art'>
                                <div className="ma-add-btn">
                                    <div className='pl-8 pt-8 text-sm'>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default RankTiles;
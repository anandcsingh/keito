import Link from 'next/link';
import React from 'react';
import RankItem from './partials/RankItem';

const RankTiles = () => {
    const items = [
        { certified: true, shortName: "ibjjf", rank: "Red Belt", martialArt: "Brazilian Jiu Jitsu" },
        { certified: false, shortName: "itf", rank: "Green Belt", martialArt: "Taekwon-Do" },
        { certified: true, shortName: "wkf", rank: "Yellow Belt", martialArt: "Karate" }
    ];
     const tiles = items.map((i,index) =>
         <RankItem key={index} martialArtShortName={i.shortName} rank={i.rank} martialArt={i.martialArt} certified={i.certified} />
    );

    return (
        <section className="section">
            <div className="container">
                <div className="section-inner">
                    <div className="tiles-wrap">
                         {tiles} 
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
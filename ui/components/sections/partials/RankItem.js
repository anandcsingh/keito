import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {
    martialArtShortName: PropTypes.string,
    rank: PropTypes.string,
    martialArt: PropTypes.string,
    certified: PropTypes.bool
  }
  
  const defaultProps = {
    martialArtShortName: '',
    rank: '',
    martialArt: '',
    certified: false
  }

const RankItem = ({
    martialArtShortName,
    rank,
    martialArt,
    certified,
    ...props
  }) => {
    const verifiedClasses = certified ? "verified-bjj gold" : "unverified-bjj";
    const verifiedCheckClasses = certified ? "check" : "uncheck";
    return (
        <div className="tiles-item">
            <div className={verifiedClasses}>
                <div className={`pl-8 pt-8 ${verifiedCheckClasses}`}>
                    <img src={`/${martialArtShortName}.png`} className="p-4" width={50} height={50} />
                    <div className="mt-24 tt-u">{rank}</div>
                    <div className="text-xs">{martialArt}</div>
                </div>
            </div>
        </div>
    );
}

export default RankItem;

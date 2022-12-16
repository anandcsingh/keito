import React from 'react';
import PropTypes from 'prop-types';
import Authentication from '../../../modules/Authentication';
import { Rank } from '../../../modules/Rank';
import {RankedV1ContractVerifier} from '../../../modules/RankedV1ContractVerifier';
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

    const rankVerifier = new RankedV1ContractVerifier(Authentication.zkClient);
    const ma = new Rank();
    ma.address = Authentication.address;
    ma.martialArt = martialArtShortName;
    ma.rank = rank; 

    const verified =true;// rankVerifier.verify(new Rank());
    const verifiedClasses = verified ? "verified-ma" : "unverified-ma";
    const verifiedCheckClasses = verified ? "check" : "uncheck";
    return (
        <div className="tiles-item">
            <div className={verifiedClasses}>
              <div className={martialArtShortName}>
                <div className={`pl-8 pt-8  ${verifiedCheckClasses}`}>
                    <div className='mt-auto mb-8'>
                    <div className="mt-24 fw-500 tt-u">{rank}</div>
                    <div className="text-xs">{martialArt}</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default RankItem;

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AuthPage from '../components/auth/AuthPage'
import RankTiles from '../components/sections/RankTiles';
import Input from '../components/elements/Input';
import Select from '../components/elements/Select';
import Checkbox from '../components/elements/Checkbox';
import Radio from '../components/elements/Radio';
import Button from '../components/elements/Button';
import { useEffect, useState } from "react";

export default function AddRank() {

  let [addFinished, setState] = useState(false);

  const addClicked = (event) => {
    event.preventDefault();
    const { martialArt, rank } = event.target.elements
    console.log(`adding ${martialArt.value} @ ${rank.value}`);

    //setState(true);

  }

  return (


    <AuthPage>

      <section className="section">
        <div className="container">
          <div className="section-inner">
            <div className="section-header">
              <div className="container-xs">
                <h2 className="mt-0 mb-16">Add Martial Art and Rank</h2>
              </div>
            </div>
            <div>
              {!addFinished ?
                <form onSubmit={addClicked}>
                  <fieldset>
                    <div className="mb-16">
                      <Select id="martialArt" label="Martial Art" required>
                        <option hidden>Choose your Martial Art</option>
                        <option>Brazilian Jiu Jitsu</option>
                        <option>Taekwon-Do</option>
                        <option>Karate</option>
                      </Select>
                    </div>
                    <div className="mb-16">
                      <Select id="rank" label="Rank" required>
                        <option hidden>Choose your Rank</option>
                        <option>White</option>
                        <option>Yellow</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Purple</option>
                        <option>Brown</option>
                        <option>Black</option>
                        <option>Coral</option>
                      </Select>
                    </div>
                    <div className="mt-24">
                      <div className="button-group">
                        <button type='submit' className="button button-primary button-wide-mobile">Submit</button>
                        <Link href="rank" className="button-link text-xs">Cancel</Link>
                      </div>
                    </div>
                  </fieldset>
                </form>
                :
                <h3></h3>
              }
            </div>
          </div>
        </div>
      </section>
    </AuthPage>
  )

}

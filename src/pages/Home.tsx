
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import MainControls from '../components/Controls/MainControls/MainControls';
import Fretboard from '../components/Fretboard/Fretboard';
import MobileControls from '../components/Controls/MobileControls/MobileControls';
import { ScaleModal, SoundModal, TuningModal } from '../components/Modals';
import GuitarConstants from '../constants/@GuitarConstants';
import { Scale } from 'tonal';

import React from 'react';

type HomeProps = {
  theme: string;
 }
const Home: React.FC<HomeProps> = ({theme}) => {
  const guitarNames: string[] = GuitarConstants.guitars;
  const scaleNames: string[] = Scale.names();

  const { tunings } = GuitarConstants;

  console.log(theme)

  return (
    <>
      <div className="page">

        {/* Modals */}
        <SoundModal sounds={{ name: guitarNames }} />
        <TuningModal tunings={tunings}/>
        <ScaleModal scales={{ name: scaleNames }} />

        <MainControls />
        <SimpleBar className="fretboardWrapper">
          <Fretboard />
        </SimpleBar>
        <MobileControls />
        {/* <FretboardData /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;


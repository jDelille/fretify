import '../Controls.scss';
import RootNote from './RootNote';
import Scales from './Scales';
import Tuning from './Tuning';

function MainControls() {
  return (
    <div className="controlContainerPill">
      <Tuning />
      <Scales />
      <RootNote />
    </div>
  );
}

export default MainControls;

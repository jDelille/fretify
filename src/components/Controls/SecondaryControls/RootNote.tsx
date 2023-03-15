import { observer } from 'mobx-react';
import Store from '../../../mobx/Store';
import Toggle from '../../Toggle/Toggle';
import '../Controls.scss';

const RootNote = observer(() => {
  const { isRootNoteVisible } = Store;
  const toggleRootNote = (isToggled: boolean) =>
    Store.toggleRootNoteVisibility(isToggled);

  return (
    <Toggle
      isToggled={isRootNoteVisible}
      onToggle={toggleRootNote}
      label="Root note"
    />
  );
});

export default RootNote;

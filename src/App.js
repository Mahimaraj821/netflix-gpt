import { memo } from 'react';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appstore from './utils/appStore';

function App() {
  return (
    <div>
     <Provider store={appstore}><Body/></Provider> 
    </div>
  );
}

export default memo(App);

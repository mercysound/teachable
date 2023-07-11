import Changefuture from './component/ChangeYourFuture/Changefuture';
import Escape from './component/Escapecom/Escape';
import Footer from './component/Footer/Footer';
import FreetoStartSec from './component/FreeToStart/FreetoStartSec';
import Herosec from './component/Herosec/Herosec';
import Lesstresssec from './component/LessStressSec/Lesstresssec';
import Needhelp from './component/NeedHelp/Needhelp';
import Eatingwo from './component/TestimonySec/Eatingwo';
import Testimonycaro  from './component/TestimonySec/Testimonycaro';
import Unmarchfea from './component/UnmatchFeature/Unmarchfea';
import Waytosee from './component/Waytosee/Waytosee';
import Header from './component/header/Header';

const Parentui = () => {
  return (
    <>
      <Header/>
      <Herosec/>
      <Escape/>
      <Waytosee/>
      <FreetoStartSec/>
      <Lesstresssec/>
      <Unmarchfea/>
      <Needhelp/>
      <Testimonycaro/>
      <Eatingwo/>
      <Changefuture/>
      <Footer/>
    </>
  )
}

export default Parentui;
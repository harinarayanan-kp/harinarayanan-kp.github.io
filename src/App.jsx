import Cards from "./Components/Cards/Cards";
import Coffee from "./Components/Coffee/Coffee";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"
import Socials from "./Components/Socials/Socials";
import TechStack from "./Components/Techstack";
import comic1 from "./assets/images/comic-1.png";
import comic3 from "./assets/images/comic-3.png";

import resume from './assets/Resume.pdf';

function App() {
  // To avoid right click
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // overflow:"hidden",
    }}>
      <ResumeButton/>
      <TechStack/>
      <Cards />
      <img src={comic3} style={{maxWidth:'500px' , width: '100%', mixBlendMode: 'multiply' }} onContextMenu={handleContextMenu} />
      <Contact/>
      <Socials />
      <Coffee />
      {/* <img src={comic1} width="100%" style={{ mixBlendMode: 'multiply' }} onContextMenu={handleContextMenu} /> */}
      <Footer />
    </div>
  )
}

export default App

const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume ;
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload} style={{ padding: '10px 20px', borderRadius: '20px', border: '1px solid black', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      Resume
      <span style={{ marginLeft: '8px' }}>📄</span> {/* Icon */}
    </button>
  );
};

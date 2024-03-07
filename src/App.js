import './App.css';
import QRCodeGenerator from './components/QR Code Generator';
import TicTacToe from './components/Tic_Tac_Toe';
import ProfileDetailsSection from './components/profilepure/profile';

function App() {
  return (
    <div className="App">
      {/*------- QR CodeGenerator ------*/ }
      {/* <QRCodeGenerator/> */}

      {/*----------Tic Tac Toe ----------*/}
      <TicTacToe/>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  const alertInputValue = () => { 
    alert(document.getElementById('inputForButton').value)
  }

  const headerElems = ['logo', 'menu', 'about us']
  return (
    <div className='wrapper'>
      <Header headerElements={headerElems}></Header>
      <div className='main'>
        <Button onClick={alertInputValue}>Alert input value!</Button>
        <Input placeholder='type here!' id='inputForButton'></Input>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  const sayHi = () => {
    alert('Hi')
  }

  const headerElems = ['logo', 'menu', 'about us']
  return (
    <div className='wrapper'>
      <Header headerElements={headerElems}></Header>
      <Button onClick={sayHi}>Say hi!</Button>
    </div>
  );
}

export default App;

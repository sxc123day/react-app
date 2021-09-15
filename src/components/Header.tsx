import logo from '@/assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="app-header" >
      <h1>我是Header</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Header;
import Dashboard from './components/Dashboard';
import './style.css'
function App() {
  return (
    <>
       
        <div className="container">
          <header><div style={{fontFamily:'sans-serif', fontSize:'2rem', color:'#dbe4ee', textShadow: '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000', fontWeight:'Bolder', textAlign:'left', margin:'1rem'}}>Socializr</div></header>
          <nav><Dashboard/></nav>
          <main>main</main>
          <aside>aside</aside>
          <footer>footer</footer>
        </div>
    </>
  );
}

export default App;

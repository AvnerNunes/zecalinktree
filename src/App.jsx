import './index.css';
import logo from './img/LOGO.png';
import zdcirculo from './img/zdcirculo.png';
import Lista from './Componentes/Lista';
import ptnacamara from './img/ptnacamara.png';

function App() {
  return (
  <div className="area">
      <div className='posicao'>
        <h1>Confira a <mark className='destaque'>atuação de zeca dirceu pelo município</mark> e da bancada do pt na câmara dos deputados em 2024</h1>
        <div className="quadrado">
          <ul>
            <h2 className='tituloh2'>Acesse:</h2>
            <Lista url="https://ptnacamara.org.br/" nome="Liderança do pt na câmara" />
            <Lista url="https://www.canva.com/design/DAGYRYJUFkQ/TpvBXslLtxh99cJcVA71_Q/watch?utm_content=DAGYRYJUFkQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5cd793feb0" nome="Assista o vídeo que o zeca fez para você (umuarama)" />
            <Lista url="https://www.canva.com/design/DAGZGkZsnag/xXeoHEGdr0IjcYA9cqGJwQ/watch?utm_content=DAGZGkZsnag&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h67453c9c5d" nome="Assista o vídeo que o zeca fez para você (Cianorte)" />
            <Lista url="https://www.canva.com/design/DAGZGrDKGTw/0Ax6ZnreZFs6NrY7nPv2qQ/watch?utm_content=DAGZGrDKGTw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4972455027" nome="Assista o vídeo que o zeca fez para você (Cruzeiro do Oeste)" />
            <Lista url="https://zecadirceu.com.br/" nome="Acesse nosso site" network="dribbble"/>
          </ul>
        </div>
        <div className='rodape'>
            <img src={logo} className='logozeca' alt="Logo Zeca Dirceu" />
            <img src={ptnacamara} className='ptnacamara' alt="pt na camara"/>
          </div>
      </div>
  </div>
  );
}
export default App;

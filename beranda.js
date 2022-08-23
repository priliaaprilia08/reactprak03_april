import "./Beranda.css";
import logo from '../Img/logo.png';
import kemendikbud from '../Img/kemendikbud.png';
import rumahbelajar from '../Img/rumahbelajar.png';
import ristekdikti from '../Img/ristekdikti.png';

const Beranda = () => {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h1 className="i-name">Buku Jendela Dunia</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
              </div>
            </div>
            <p className="i-desc">
              “YO"
            </p>
   
          </div>

        </div>

        <div className="i-right">
          <div className="i-bg"></div>
          <img src={logo} alt="" className="i-img" />
        </div>
        

      </div>
      <div className="hal__brand">
        <div>
          <img src={kemendikbud} style={{ display: 'block' }} />
        </div>
        <div>
          <img src={rumahbelajar} style={{ display: 'block' }} />
        </div>
        <div>
          <img src={ristekdikti} style={{ display: 'block' }} />
        </div>

      </div>
    </>
  );
}

export default Beranda;
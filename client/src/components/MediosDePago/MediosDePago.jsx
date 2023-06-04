import React from 'react';
import './MediosDePago.css';
import Efectivo from '../../assets/mediosDePago/efectivo.png'
import TarjetasDeCredito from '../../assets/mediosDePago/tarjetasDeCredito.png'
import TarjetasDeDebito from '../../assets/mediosDePago/tarjetasDeDebito.png'



const MediosDePago = () => {
  return (
    <div id="mediosDePago" className="mediosDePago">
      <h2 className="titlemediosDePago">Medios de pago</h2>
      <p>Aceptamos lo siguientes métodos de pago:</p>
      <div className='imgContainer'>
        <div>
            <img src={Efectivo} className='imgEfectivo' alt=''/>
            <p>Efectivo.</p>
        </div>
        <div>
            <img src={TarjetasDeCredito} className='imgTarjetasDeCredito' alt=''/>
            <p>Todas las tarjetas de Crédito.</p>
        </div>
        <div>
            <img src={TarjetasDeDebito} className='imgTarjetasDeDebito' alt=''/>
            <p>Tarjetas de Débito.</p>
        </div>
      </div>
    </div>
  );
}

export default MediosDePago;

import React from 'react';
import mediosDePago from'./MediosDePago.module.css';
import Efectivo from '../../assets/mediosDePago/efectivo.png'
import TarjetasDeCredito from '../../assets/mediosDePago/tarjetasDeCredito.png'
import TarjetasDeDebito from '../../assets/mediosDePago/tarjetasDeDebito.png'



const MediosDePago = () => {
  return (
    <div id="mediosDePago" className={mediosDePago.mediosDePago}>
      <h2 className={mediosDePago.titlemediosDePago}>Medios de pago</h2>
      <p>Aceptamos lo siguientes métodos de pago:</p>
      <div className={mediosDePago.imgContainerWeb}>
        <div>
            <img src={Efectivo} className={mediosDePago.imgEfectivo} alt=''/>
            <p>Efectivo.</p>
        </div>
        <div>
            <img src={TarjetasDeCredito} className={mediosDePago.imgTarjetasDeCredito} alt=''/>
            <p>Todas las tarjetas de Crédito.</p>
        </div>
        <div>
            <img src={TarjetasDeDebito} className={mediosDePago.imgTarjetasDeDebito} alt=''/>
            <p>Tarjetas de Débito.</p>
        </div>
      </div>
      <div className={mediosDePago.imgContainerMobile}>
        <div>
            <img src={Efectivo} className={mediosDePago.imgEfectivo} alt=''/>
            <p>Efectivo.</p>
        </div>
        <div>
            <img src={TarjetasDeCredito} className={mediosDePago.imgTarjetasDeCredito} alt=''/>
            <p>Todas las tarjetas de Crédito.</p>
        </div>
        <div>
            <img src={TarjetasDeDebito} className={mediosDePago.imgTarjetasDeDebito} alt=''/>
            <p>Tarjetas de Débito.</p>
        </div>
      </div>
    </div>
  );
}

export default MediosDePago;

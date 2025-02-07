import React from 'react'
import "./Home.css";
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className="home_image" src='https://cdn2.steamgriddb.com/hero_thumb/5e7cefa9b606dcd7b0faa082d82cdb1d.jpg'/>
            <div className='home_row'>
              <Product  id="123" title='Nieuwe Amazon Kindle Paperwhite (16 GB) Onze snelste Kindle ooit, met een nieuw 7 -inch ontspiegeld scherm en een batterijduur van meerdere weken – Zwart
' price={179.99} image='https://m.media-amazon.com/images/I/51vRJc7zIrL._AC_SX679_.jpg' rating={4}/>
               <Product title='PlayStation Portal™ Remote-Player' price={235.99} image='https://m.media-amazon.com/images/I/61WqF0ubWRL._AC_SX679_.jpg' rating={4}/>
            </div>
            <div className='home_row'>
            <Product  id="679" title='Ribelli 5-traps metalen plantenstandaard in halve maanvorm, 172 cm, plantenrek met 5 planken en haken, hoge bloemenstandaard, plantentrap met kantelbeveiliging voor balkon, woonkamer, terras (1 stuk,
' price={78.99} image='https://m.media-amazon.com/images/I/91VFE9g62EL._AC_SX522_.jpg' rating={5}/>
              <Product  id="776" title='OFFCUP Hangende Raamdecoratie, 5st, Boom, Uilen, Kolibrie, Vlinder, Feeënhanger, Zonnevanger, Kristal, Opknoping, Windspel, Regenboog, Zon, Maan, Hanger, Ornament, Kristallen Ballen
' price={16.99} image='https://m.media-amazon.com/images/I/714wkLjTUpL._AC_SX679_.jpg' rating={4}/>
              <Product  id="788" title='Maanfaseslinger, Muurdecoratie Boho, Maanlichtketting, Maanslinger Esthetische Kamer Muurketting Decor Woonkamer, Slaapkamer, Slingers Boho Deko Goud 144cm 13 Manen, met LED Lichtketting
' price={17.99} image='https://m.media-amazon.com/images/I/81Zpu-QuhJL._AC_SX679_.jpg' rating={5}/>
            </div>
            <div className='home_row'>
            <Product  id="198" title='Set van 4 koffielepels voor katten, roestvrij staal, hangende design, theelepel, dessertlepels voor water, thee, melk, koffie, dessert, dranken, milkshake, om op te hangen, beker, lepel, keuken,
' price={7.99} image='https://m.media-amazon.com/images/I/61uBkJoYMXL._AC_SX679_.jpg' rating={4}/>
            </div>
        </div>
    </div>
  )
}

export default Home
import React, { useState } from 'react';
import './SelectItemPage.css';
import DeatilsBox from './DeatilsBox';

const SelectItemPage = () => {

  const [currentExpandedBox, setCurrentExpandedBox] = useState(null);

  const [boxData1, setBoxData1] = useState([
    { id: 0, size: 'Small', color: 'Red' },
  ]);

  const [boxData2, setBoxData2] = useState([
    { id: 0, size: 'Small', color: 'Red' },
    { id: 1, size: 'Medium', color: 'Blue' },
    
  ]);


  const [boxData3, setBoxData3] = useState([
    { id: 0, size: 'Small', color: 'Red' },
    { id: 1, size: 'Medium', color: 'Blue' },
    { id: 2, size: 'Medium', color: 'Blue' },
  ]);

  let box1 ={
    id:'box1',
    title:"1 Pair",
    price:'DKK 195.00',
    discount:'50% OFF'
  }

  let box2 ={
    id:'box2',
    title:"2 Pair",
    price:'DKK 345.00',
    discount:'40% OFF'
  }

  let box3 ={
    id:'box3',
    title:"3 Pair",
    price:'DKK 528.00',
    discount:'60% OFF'
  }

  const [optionsVisible, setOptionsVisible] = useState({
    box1: false,
    box2: false,
    box3: false,
  });

  const toggleOptions = (boxId) => {
    setOptionsVisible((prevOptions) => {
      const newOptions = { ...prevOptions, [boxId]: !prevOptions[boxId] };
      if (currentExpandedBox && currentExpandedBox !== boxId) {
        newOptions[currentExpandedBox] = false;
      }
      setCurrentExpandedBox(newOptions[boxId] ? boxId : null);

      return newOptions;
    });
  };
  
    return (
      <div className="app">
        <div className='title-box'>
              <div className='title-line'></div>
              <div className='title-text'>Bundle & Save</div>
              <div className='title-line'></div>
        </div>
        <DeatilsBox  data={boxData1} setData={setBoxData1} boxDeatil={box1}  toggleOptions={toggleOptions} isExpande={optionsVisible.box1}/>
        <DeatilsBox data={boxData2} setData={setBoxData2} boxDeatil={box2} popular={true} toggleOptions={toggleOptions} isExpande={optionsVisible.box2}/>
        <DeatilsBox data={boxData3} setData={setBoxData3} boxDeatil={box3}  toggleOptions={toggleOptions} isExpande={optionsVisible.box3}/>
        <div className='shipping-info'>
          <span className='shipping-time'>Free 2 Day Shipping</span>
          <span className='shipping-price'>Total : DKK 360.00</span>
        </div>
        <div className='cart-box'>
          <span className='cart-button'>+ Add to Cart</span>
        </div>
        <div className='copy-right-box'>         
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="3.83333" stroke="black" strokeWidth="0.333333"/>
            <text x="50%" y="50%"  textAnchor="middle" alignmentBaseline="middle" fill="black" className='copy-right-symbol'>c</text>
          </svg>
          <span className='copy-right-text'>Powered by Pumper</span>  
        </div>
      </div>
    );
  };

export default SelectItemPage;
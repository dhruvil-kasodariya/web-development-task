import React ,{useState} from 'react';
import './DeatilsBox.css'

function DeatilsBox({data,setData,boxDeatil,popular,toggleOptions,isExpande}) {

    const handleSizeChange = (index, newSize) => {
        const newData = [...data];
        newData[index].size = newSize;
        setData(newData);
      };
    
      const handleColorChange = (index, newColor) => {
        const newData = [...data];
        newData[index].color = newColor;
        setData(newData);
      };
    

  return (
    <div className={`box ${isExpande ? 'expanded' : ''}`} onClick={() => toggleOptions(boxDeatil.id)}>
    <div className='radio-box'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='box-button'>
            <circle cx="7.92151" cy="8.20799" r="6.77852" stroke={isExpande?'#007F61':"#DADADA"} strokeWidth="0.903803" fill={isExpande?'#007F61':"#ffff"}/>
        </svg>
    </div>
    <div className='box-deatils'>
      <div className='box-info'>          
        <div className='box-deatils-head'>
          <span className='box-deatils-head-title'>{boxDeatil.title}</span>
          <span className='box-deatils-head-price'>{boxDeatil.price}</span>
        </div>
        {popular ? <div className='discount-box'><span className='discount-text'>DKK 195.00</span></div>:null}           
        <div className={`box-deatils-off ${popular?'box-deatils-off-expanded':''}`}>
            {popular?<span className='popular'>Most Popular</span>:null}
          <span className='box-deatils-off-1'>{boxDeatil.discount}</span>
        </div>
      </div>

      <div id="options1" className={isExpande ? 'options' : 'options hidden'}>
        <table className='styled-table'>
          <thead>
            <tr>
            <th></th>
            <th>size</th>
            <th>color</th>
            </tr>
          </thead>
          <tbody>
            {data.map((info,index)=>{
              return(
                <tr key={info.id}>
                  <td>#{info.id+1}</td>
                  <td>
      <select
        value={info.size}
        onChange={(e) => handleSizeChange(info.id, e.target.value)}
      >
        <option value="Small">S</option>
        <option value="Medium">M</option>
        <option value="Large">L</option>

      </select>
    </td>
    <td>
      <select
        value={info.color}
        onChange={(e) => handleColorChange(info.id, e.target.value)}
      >
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
 
      </select>
    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>

</div>
  )
}

export default DeatilsBox
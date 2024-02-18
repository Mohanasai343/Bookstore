import React,{useState} from "react";
import data from './Phone.json'
import './Heading.css'

const Heading=()=>{

    const [products,setProducts] = useState(data);
    const [country,setCountry] = useState(data.Accessories.AUSTRALIA)
    const [access,setAccess] = useState(data.Accessories)
    const [home,setHome] = useState(data.Home)
    const [ipad,setIpad] = useState(data.iPad)
    const [iphone,setIphone] = useState(data.iPhone)
    const [mac,setMac] = useState(data.Mac)
    const [na,setNA] = useState(data.NA)
    return(
        <div>
        <div>
                  <div className='products'>
                {Object.keys(products).map((key)=>(
                    <table>
                        <tr>
                        <th>{key}</th>
                        </tr>
                        <tr  className="sub_head">
                         {Object.keys(country).map((key)=>(
                        <div>
                            <td>{key}</td>
                            </div>
                    ))}
                        </tr>
                    </table>
                ))}
                </div>
                <table className="main">
                <div className="value">
                    <tr>
                    {Object.values(access).map((value)=>(
                        <div className="access">
                        <td>{value.QTD}</td>
                        <td>{value.Q3}</td>
                        <td>{value.WOW}</td>
                        <td>{value.YOY}</td>
                        </div>
                    ))}
                    </tr>
                </div>
                <div>
                <tr>
                    {Object.values(home).map((value)=>(
                        <div className="home">
                        <td>{value.QTD}</td>
                        <td>{value.Q3}</td>
                        <td>{value.WOW}</td>
                        <td>{value.YOY}</td>
                        </div>
                    ))}
                    </tr>
                </div>
                <div>
                <tr>
                    {Object.values(ipad).map((value)=>(
                        <div className="ipad">
                        <td>{value.QTD}</td>
                        <td>{value.Q3}</td>
                        <td>{value.WOW}</td>
                        <td>{value.YOY}</td>
                        </div>
                    ))}
                    </tr>
                </div>
                <div>
                <tr>
                    {Object.values(iphone).map((value)=>(
                        <div className="iphone">
                        <td>{value.QTD}</td>
                        <td>{value.Q3}</td>
                        <td>{value.WOW}</td>
                        <td>{value.YOY}</td>
                        </div>
                    ))}
                    </tr>
                </div>
                <div>
                <tr>
                    {Object.values(mac).map((value)=>(
                        <div className="mac">
                        <td>{value.QTD}</td>
                        <td>{value.Q3}</td>
                        <td>{value.WOW}</td>
                        <td>{value.YOY}</td>
                        </div>
                    ))}
                    </tr>
                </div>
                <div>
                <tr>
                    {Object.values(na).map((value)=>(
                        <div className="na">
                        <td>{value.QTD}</td>
                        <td>{value.Q3}</td>
                        <td>{value.WOW}</td>
                        <td>{value.YOY}</td>
                        </div>
                    ))}
                    </tr>
                </div>
                </table>
        </div>
        </div> 
    )
}

export default Heading
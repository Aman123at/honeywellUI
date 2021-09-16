import React, { useState } from 'react'

import './Body.css';
import EveryRow from './EveryRow';

import ViewSection from './ViewSection';
function Body() {
    const [allData,setAllData] = useState([{id: 79, key: "Testing", value: "11"},
    {id: 35, key: "sbuhrl.default", value: "6+6"},
    {id: 39, key: "Test2", value: "3+9"},
    {id: 40, key: "Test3", value: "4+8"},
    {id: 41, key: "Test4", value: "5+7"},
    {id: 49, key: "testing", value: "8+4"}
    ])
    // let allData = [{id: 79, key: "Testing", value: "11"},
    // {id: 35, key: "sbuhrl.default", value: "6+6"},
    // {id: 39, key: "Test2", value: "3+9"},
    // {id: 40, key: "Test3", value: "4+8"},
    // {id: 41, key: "Test4", value: "5+7"},
    // {id: 49, key: "testing", value: "8+4"}
    // ]

    const [showCard,setShowCard] = useState(false)
    const [cardData,setCardData] = useState()
    const handleClickView =(e:any,value:any)=>{
        e.preventDefault()
        setShowCard(true)
        setCardData(value)
    }

    const handleDelete =(e:any,id:number)=>{
        e.preventDefault()
        setAllData(allData.filter(item => item.id.toString() !== id.toString())) 
        // console.log("delId",allData)

    }
    
    return (
        <div className="body">
            <div className="body__main">
                
                <table className="table table-borderless ">
                    <thead>
                        <tr>
                        
                        <th scope="col">KEY</th>
                        <th scope="col">VALUE</th>
                        <th scope="col">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allData.map((val:any)=>
                            <EveryRow handleDelete={handleDelete} value={val} handleClickView={handleClickView}/>
                            )}
                        
                     
                       
   
                    </tbody>
                    </table>
            </div>
                {showCard &&
            <div className="body__right">
                
                <ViewSection  setShowCard={setShowCard} value={cardData} />
                
            </div>
                }
        </div>
    )
}

export default Body





// [{id: 79, key: "Testing", value: "11"}, {id: 35, key: "sbuhrl.default", value: "6+6"},…]
// 0: {id: 79, key: "Testing", value: "11"}
// id: 79
// key: "Testing"
// value: "11"
// 1: {id: 35, key: "sbuhrl.default", value: "6+6"}
// 2: {id: 39, key: "Test2", value: "3+9"}
// 3: {id: 40, key: "Test3", value: "4+8"}
// 4: {id: 41, key: "Test4", value: "5+7"}
// 5: {id: 49, key: "testing", value: "8+4"}

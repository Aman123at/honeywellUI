import React from 'react'

function EveryRow({value,handleClickView,handleDelete}:any) {
    console.log(value)
    return (
        <tr>
                        
                        <td>{value.key}</td>
                        <td>{value.value}</td>
                        <td style={{display:'flex',alignItems:'center'}}>
                        <button onClick={(e)=>handleClickView(e,value)} type="button" className="btn btn-primary">VIEW</button>
                        <button onClick={(e)=>handleDelete(e,value.id)} type="button" className="btn btn-primary ml-2">DELETE</button>
                        </td>
                        </tr>
    )
}

export default EveryRow

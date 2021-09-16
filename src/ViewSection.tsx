import React,{useState} from 'react'

function ViewSection({value,setShowCard}:any) {
    const [showEdit,setShowEdit] = useState(false)
    const [newKey,setNewKey] = useState(value.key)
    const [newValue,setNewValue] = useState(value.value)
    const handleEdit =(e:any)=>{
        e.preventDefault()
        setShowEdit(false)
    }
    return (
        <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
{showEdit ? 
<div style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
<input style={{width:"100px",marginTop:'20px',marginLeft:'20px',marginBottom:'10px'}} type="text" value={newKey} onChange={e=>setNewKey(e.target.value)} />
<input style={{width:"100px",marginLeft:"50px",marginTop:'20px',marginBottom:'10px'}}  type="text" value={newValue} onChange={e=>setNewValue(e.target.value)}/>
</div>
:<>

<p style={{paddingTop:'20px'}} className="ml-4 ">{newKey}</p>
<p style={{paddingTop:'20px'}} className="mr-4 ">{newValue}</p>
</>}
</div>
<hr style={{marginTop:"0px"}} />
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    {showEdit ?
<button onClick={handleEdit} type="button" className="btn btn-success ml-4">Done</button>
    
    :
<button onClick={()=>setShowEdit(true)} type="button" className="btn btn-primary ml-4">EDIT</button>
    }
    
<button onClick={()=>setShowCard(false)} type="button" className="btn btn-primary mr-4">CANCEL</button>

</div>
            
        </div>
    )
}

export default ViewSection

import './Dialog.css'
const Dialog = ({ Dialogclose ,msg})=>{
  const close_dia = ()=>{
    console.log("thier")
    Dialogclose(); 
  }
  return (
    <>
    {/* <button  onClick={openDialog}>Open Dialog</button> */}
    <div className='dialog' >
        <div className="dialog-content">
            <span className="close" onClick={close_dia}>&times;</span>
            <h2>Warning</h2>
            <p>{msg}</p>
        </div>
    </div>
    </>
  )
}
export default Dialog;
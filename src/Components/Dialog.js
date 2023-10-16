import './Dialog.css';
import ReactDom from 'react-dom';
const DiaRoot = props =>{
  return (
    <>
    <div className='dialog' >
        <div className="dialog-content">
            <span className="close" onClick={props.close_dia}>&times;</span>
            <h2>Warning</h2>
            <p>{props.msg}</p>
        </div>
    </div>
    </>
  )
}
const Dialog = ({ Dialogclose ,msg})=>{
  const close_dia = ()=>{
    console.log("thier")
    Dialogclose(); 
  }
  return (
    <>
   {
     ReactDom.createPortal(<DiaRoot close_dia = {close_dia} msg = {msg} /> , document.getElementById('dialog_root'))
    }

    </>
  )
}
export default Dialog;
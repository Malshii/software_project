
import react , {useRef}from 'react';
import Popup from 'reactjs-popup';
import Signaturepad from 'react-signature-canvas';
import 'react-signature-canvas'
import './sigCanvas.css'
function Signaturepadarea() {
    const sigCanvas =useRef({});
    const clear =()=>sigCanvas.current.clear();
    const save =()=> console.log(sigCanvas.getTrimmedcanvas().toDataURL("image/png"));
  
  return (
      
      <div className='sigapp'>
          <div >
          <p className='abovetext'>Digital Signature</p>
          <Popup modal trigger={<button>Open Signaturepad</button>} closeOnDocumentClick={false}>
          {close =>(
              <>
              <Signaturepad ref={sigCanvas} canvasProps={{className :"signatureCanva"}}/>
              <button onClick={save}>Save</button>
              <button onClick={clear}>Clear</button>
              <button onClick={close}>Close</button>
              </>
          )}
          
          </Popup>
          <p className='belowtext'> You are able to add digital signature using signaturepad </p>
       
      </div>
      </div>
      
   
  );
}

export default Signaturepadarea;
//https://console.firebase.google.com/project/firechat-b2c9f/overview
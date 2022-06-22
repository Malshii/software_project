// import React,{useState} from "react";
// import axios from "axios"; 
// import '../../Styles/index.css';
// import HeaderUsers from "../HeaderUsers";
// import { useNavigate } from "react-router-dom";

// export default function ForgotPassword() {  

//   const navigate = useNavigate();

//   const [email,setEmail] = useState("");    
//   const [password,setPassword] = useState("");     
//   const [confirmPassword,setConfirmPassword] = useState("");     
  
//     function sendData(e){
//       e.preventDefault();
  
//       const forgotPassword = {        
//         email,       
//         password,
//         confirmPassword       
//       }      
      
//       axios.put("http://localhost:4000/user/forgot-password",forgotPassword).then(()=>{        
//         navigate("/login");
//       }).catch((err)=>{
//         alert(err)
//       })     
//     }

//   return(    
//     <div>

//     <HeaderUsers/>

//       <div class="shadowLogin shadow-lg p-4 mb-5 bg-white">
//       <form onSubmit={sendData}> 
//       <h6>New Member? <a href="/signup">Register here</a></h6>     
//         <h1></h1>
//         <h2>FORGOT PASSWORD</h2>
//         <h1></h1>
        
//         <div class="form-row">
//           <div class="col-12">
//             <label for="validationCustom03">Email</label>
//             <input type="text" class="form-control" id="validationCustom03" placeholder="Email" required
//             onChange={(e)=>{
//               setEmail(e.target.value);
//             }}
//             />
//             <div class="invalid-feedback">
//               Please provide a valid email.
//             </div>
//           </div>
                    
//           <div class="col-12">
//             <label for="validationCustom03">New Password</label>
//             <input type="text" class="form-control" id="validationCustom03" placeholder="New Password" required
//             onChange={(e)=>{
//               setPassword(e.target.value);
//             }}
//             />
//             <div class="invalid-feedback">
//               Please provide a valid password.
//             </div>
//           </div>  
          
//           <div class="col-12">
//             <label for="validationCustom03">Confirm New Password</label>
//             <input type="text" class="form-control" id="validationCustom03" placeholder="Confirm New Password" required
//             onChange={(e)=>{
//               setConfirmPassword(e.target.value);
//             }}
//             />
//             <div class="invalid-feedback">
//               Please provide a valid password.
//             </div>
//           </div>  
          
//         </div>

//         <div class="form-group">
//           <div class="form-check">           
//           </div>
//         </div>

//         <button class="signup btn btn-primary" type="submit">Change my password</button>
        
//         <div class="row align-items-start">

//           <div class="col">          
//             <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
//             <label class="form-check-label" for="invalidCheck">Remember me</label>        
//           </div>           

//         </div>        
        
//       </form>
//       </div>       

//       </div>       
     
//   )    
  
// };


// // import axios from 'axios';
// // import React,{ useState } from 'react';
// // import styles from '../ForogtPassword/style.module.css';

// // const ForogtPassword = () => {
// //     const [email,setEmail] = useState("");
// //     const [msg,setMsg] = useState("");
// //     const [error,setError] = useState("");    
        
// //     const handleSubmit = async(e) =>{
// //         e.preventDefault();
// //         try{
// //             const url = 'http://localhost:4000/password-reset';
// //             const data = await axios.post(url,{email});
// //             setMsg(data.message);
// //             setError("")
// //         } catch (error){
// //             if(
// //                 error.response && 
// //                 error.response.status >= 400 &&
// //                 error.response.status <= 500 
// //             ) {
// //                 setError(error.response.data.message);
// //                 setMsg("")
// //             }
// //         }
// //     }

// //     return(
// //         <div className={styles.container}>
// //             <form className={styles.form_container} onSubmit={handleSubmit}>
// //                 <h1>Forgot Password</h1>
                
// //                 <input
// //                     type="email"
// //                     placeholder='Email'
// //                     name='email'
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     value={email}     
// //                     required
// //                     className={styles.input}           
// //                 />

// //                 {error && <div className={styles.error_msg}>{error}</div>}
// //                 {msg && <div className={styles.success_msg}>{msg}</div>}

// //                 <button type='submit' className={styles.green_btn}>Submit</button>
// //             </form>
// //         </div>
// //     )
// // };

// // export default ForogtPassword;


import React, {useState,useEffect} from 'react';
import * as Yup from "yup";
import styled from 'styled-components';

const formSchema = Yup.object().shape({
    isim: Yup
      .string()
      .required("*İsim alanı zorunludur")
      .min(5, "İsim en az 5 karakter olmalı"),
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    kosulKabul: Yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
      
  });

export default function Formolustur(){

    const[formInfo, setFormInfo]=useState({
        isim:"initalValue",
        soyisim:"",
        email:"",
        password:"",
        kosulKabul:false
    })

    const [buttonDisabled, setButtonDisabled]=useState(true);
    
    const [errors, setErrors] = useState({
        isim:"",
        email: "",
        password: "",
        kosulKabul: ""
      });

      useEffect(() => {
        formSchema.isValid(formInfo).then((valid) => 
          setButtonDisabled(!valid));
        
      }, [formInfo]);


      const checkFormErrors = (name, value)=>{

        Yup
        .reach(formSchema, name)
        
        .validate(value)
        
        .then(() => {
          setErrors({
            ...errors, [name]: ""
          });
        })
        .catch(err => {
          setErrors({
            ...errors, [name]: err.errors[0]
          });
        });
        
        };   
        
        
     
        

    const handleChange=event=>{
        let valueToUse=
        event.target.type==="checkbox"?event.target.checked : event.target.value;
        /*const {name, type, value, checked}=event.target;
        const updatedInfo=type==='checkbox'?checked:value;
        setFormInfo({...formInfo, [name]:updatedInfo})*/
        
        checkFormErrors(event.target.name, valueToUse);
        setFormInfo({
            ...formInfo,
            [event.target.name]: valueToUse
        })
    
    }

    const handleReset=()=>{
        setFormInfo({
            isim:"",
            soyisim:"",
            email:"",
            password:"",
            kosulKabul:false
        })
    }
const Ayarla=styled.div`
    font-size:1.5rem;
    display:flex;
    justify-content:center;
    align-content:baseline;
    
`

    return (
        <div className='formDiv'>
            <h3>Giriş yapabilmek için bilgileri eksiksiz doldurunuz...</h3>
            <Ayarla>
            <form>
             <fieldset>
                <legend style={{color:'white',fontFamily:"sans-serif", fontSize:"25px"}}>Yeni Kisi</legend>
                
                 <label>İsim:</label>
                 <input type="text" id="name" name="isim" value={formInfo.isim} onChange={handleChange} style={{marginLeft:"10px"}}></input>
                 {errors.isim !=="" &&  <div style={{color:"red", fontSize:"15px"}}>{errors.isim}</div>}
                 <p>
                 <label>Soyisim:</label>
                 <input type="text" id="surname" name="soyisim" value={formInfo.soyisim} onChange={handleChange} style={{marginLeft:"10px"}}></input>
                 </p> 
                <p>
                 <label>E-mail:</label>
                 <input type="text" id="mail" name="email" value={formInfo.email} onChange={handleChange} style={{marginLeft:"10px"}}></input>
                 {errors.email.length>0 && <div style={{color:"red", fontSize:"15px", textAlign:"center"}}>{errors.email}</div>}                  
                </p>
                <p>
                 <label>Şifre:</label>
                 <input type="password" id="sifre" name="password" value={formInfo.password} onChange={handleChange} style={{marginLeft:"10px"}}></input>
                {errors.password.length>0 && <div style={{color:"red", fontSize:"15px"}}>{errors.password}</div>}
                </p>
              </fieldset>
                <p>
                <label>Kullanım şartlarını kabul ediyor musunuz?</label><br />
                <label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="kosulKabul"
                    value="yes"
                    checked={formInfo.kosulKabul}
                 />
                    Evet
                </label><br/>
                <button type='submit' disabled={buttonDisabled} value="Gönder">SON KARARIM</button>
                </p>
                <button type="reset" onClick={handleReset}>Sil baştan başlamak gerek bazen</button>
            </form>
            </Ayarla>
        </div>
    )
}
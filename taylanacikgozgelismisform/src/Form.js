import React, {useState} from 'react';
import * as Yup from "yup"

export default function Formolustur(){

    const[formInfo, setFormInfo]=useState({
        isim:"initalValue",
        soyisim:"",
        email:"",
        password:"",
        kosulKabul:false
    })

    const handleChange=event=>{
        const {name, type, value, checked}=event.target;
        const updatedInfo=type==='checkbox'?checked:value;
        setFormInfo({...formInfo, [name]:updatedInfo})
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


    return (
        <div className='formDiv'>
            <h3>Giriş yapabilmek için bilgileri eksiksiz doldurunuz...</h3>
            <form>
             <fieldset>
                <legend style={{color:'white',fontFamily:"sans-serif", fontSize:"30px"}}>Yeni Kisi</legend>
                <p>
                 <label>İsim Soyisim</label>
                 <input type="text" id="name" name="isim" value={formInfo.isim} onChange={handleChange}></input>
                 <input type="text" id="surname" name="soyisim" value={formInfo.soyisim} onChange={handleChange}></input>
                </p>
                <p>
                 <label>E-mail</label>
                 <input type="text" id="mail" name="email" value={formInfo.email} onChange={handleChange}></input>
                </p>
                <p>
                 <label>Şifre</label>
                 <input type="password" id="sifre" name="password" value={formInfo.password} onChange={handleChange}></input>
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
                <input type='button' value="Gönder"></input>
                </p>
                <button type="reset" onClick={handleReset}>Sil baştan başlamak gerek bazen</button>
            </form>
            
        </div>
    )
}
import React, {useState} from 'react';


export default function Formolustur(){



    return (
        <div className='formDiv'>
            <h3>Giriş yapabilmek için bilgileri eksiksiz doldurunuz...</h3>
            <form>
             <fieldset>
                <legend style={{color:'white',fontFamily:"sans-serif", fontSize:"30px"}}>Yeni Kisi</legend>
                <p>
                 <label>İsim Soyisim</label>
                 <input type="text" id="isim" name="isim" value="isim"></input>
                 <input type="text" id="soyisim" name="soyisim" value="soyisim"></input>
                </p>
                <p>
                 <label>E-mail</label>
                 <input type="text" id="email" name="email" value="email"></input>
                </p>
                <p>
                 <label>Şifre</label>
                 <input type="password" id="password" name="password" value="password"></input>
                </p>
              </fieldset>
                <p>
                <label>Kullanım şartlarını kabul ediyor musunuz?</label><br />
                <label>
                  <input
                    type="checkbox"
                    name="kosulKabul"
                    value="evet"
                 />
                    Evet
                </label><br/>
                <input type='button' value="Gönder"></input>
                </p>
            </form>
            
        </div>
    )
}
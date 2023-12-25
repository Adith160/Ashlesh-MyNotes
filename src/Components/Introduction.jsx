import React from 'react'
import encryptImg from '../Assets/Images/encrypted.svg'
import homeImg from '../Assets/Images/home.png'


function Introduction() {

  return (
    <>
    <div style={{
       display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "74%",
        backgroundColor: "#DAE5F5",
        position: "relative",
}}>

    <div>
        <img src={homeImg} alt='home Images' style={{
            height: "100%",
            width: "100%"
        }}></img>
        <h1 style={{
            paddingLeft: "30%",
            margin: 0,
            padding: 0,
            
        }}> Pocket Notes</h1>


        <p style={{
            paddingLeft: "10%",
        }}>Send and receive messages without keeping your phone online. <br/>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>



    <div style={{
        left: "40%",
      fontSize: "1rem",
      fontStyle: "normal",
      position: "absolute",
      bottom: "4%",
     
      fontWeight: "600",
    }}> 


    <img src={encryptImg} alt='imgencrypt' style={{
      width:"5%",
      height:"5%",
    }}></img> end-to-end encrypted
    </div>
    </div>
    </>
  )
}

export default Introduction
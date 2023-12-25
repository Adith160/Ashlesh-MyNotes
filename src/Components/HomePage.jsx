import React, { useEffect, useState } from 'react';
import styles from './Styles/HomePage.module.css';
import Introduction from './Introduction';
import AddNote from './AddNote';
import ComponentDetails from './ComponentDetails';

const HomePage = () => {
  const [Detail, showDetail] = useState(null);
  const [Phone, setPhone] = useState(window.innerWidth <= 768);
 
  const [NoteSelected, setNoteSelected] = useState('');
 const [GroupAdd, showGroupAdd] = useState(false);
  const [DataGrp, setDataGrp] = useState([]);
  

  useEffect(() => {
    const storedDataGrp = JSON.parse(localStorage.getItem('groups'));
    setDataGrp(storedDataGrp);
  }, []);



  useEffect(() => {

    const handleResize = () => {
      setPhone(window.innerWidth <= 768);
    };



    window.addEventListener('resize', handleResize);

    return () => {


      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClickDetail = (grp) => {
    showDetail(





      <ComponentDetails gkey={grp.key} color={grp.color} name={grp.groupName} />
    );

    setNoteSelected(grp.key);


    console.log('key is', grp.key, grp.color, grp.groupName);
  };

    const getLogo = (n) => {

        return n.split(" ").map(word => word.charAt(0)).join("");
    };

    const handleCickAdd = () => {


        showGroupAdd(true); 
    };

    return (
        <>
          <div className={styles.home}>

            <div className={styles.NotesSaved}>

              <h3 className={styles.title}>Pocket Notes</h3>


                    {
                     DataGrp && DataGrp.map((grp) => (
                         <div className={styles.NamingCard} key={grp.key} 


                              style={{backgroundColor: NoteSelected===grp.key?"#2F2F2F2B":''}}
                              onClick={() => handleClickDetail(grp)}>

                             <div className={styles.DP} style={{ backgroundColor: `${grp.color}` }}>
                                 {getLogo(`${grp.groupName}`)}
                             </div>
                             <span className={styles.Namespanning}>{grp.groupName}</span>
                         </div>
                     ))
                    }

                   
</div>
        <div className={styles.adding} onClick={handleCickAdd}>
          +
        </div>
        {!Phone && (Detail || <Introduction />)}
      </div>


      {GroupAdd && (
        <div
          onClick={() => {
            showGroupAdd(false);
            const storedDataGrp = JSON.parse(localStorage.getItem('groups'));
            setDataGrp(storedDataGrp);
          }}

          style={{


            backgroundColor: "rgba(47, 47, 47, 0.75)",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            height: "100vh",
            width: "100vw",
            position: "absolute",
            left: "0",
            top: "0",
            
        }}

        >
          <AddNote />
        </div>
      )}
    </>
  );
};

export default React.memo(HomePage);
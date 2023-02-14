import { collection, getDocs,addDoc  } from "firebase/firestore";
import { db } from '../FirebaseConfig';
import { useState, useEffect } from 'react';

export default function ListaDatos() {

    const [datos, setDatos] = useState([]);

    const leerDatosFirestore = async () => {

        await getDocs(collection(db, "productos"))
            .then((querySnapshot) => {
                const listado = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                    setDatos(listado);
                //console.log(todos, newData);
            })

    }

    useEffect(() => {
        leerDatosFirestore();
    }, [])

    const escribeDatosFirestore = async () => {       
        try {
            const docRef = await addDoc(collection(db, "productos"), {
              title: "prueba",  
              category: "none"  
            });
            leerDatosFirestore();
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    return (
        <section>
            <h1>ListaDatos</h1>
            <button onClick={escribeDatosFirestore}>Escribe datos</button>
            <div>
                {
                    datos.map((dato) => (
                        <p key={dato.id}>
                            {dato.title}
                        </p>
                    ))
                }
            </div>
        </section>
    );
}
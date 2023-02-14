import { collection, getDocs } from "firebase/firestore";
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

    return (
        <section>
            <h1>ListaDatos</h1>
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
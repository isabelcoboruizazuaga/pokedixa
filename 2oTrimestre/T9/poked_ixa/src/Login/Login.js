import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Inicio() {
    const [email, setEmai] = setState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }

    return (
        <section>
            <input 
            type="email"/>

        </section>
    );
}
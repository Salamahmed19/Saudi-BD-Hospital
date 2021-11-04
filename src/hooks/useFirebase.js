import { useEffect, useState } from "react"
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleNameChange = e => {
      setName(e.target.value);
    }

    const handleEmailChange = e => {
      setEmail(e.target.value);
    }
  
    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }
  
    const handleRegistration = e => {
      e.preventDefault();
      if (password.length < 6) {
        setError('Password Must be at least 6 characters long.')
        return;
      }
      if (!/(?=.*[A-Z].*[a-z])/.test(password)) {
        setError('Password Must contain upper case & lower case');
        return;
      }
      registerNewUser(email, password,);
  
    }
    const handleLogin = e => {
      e.preventDefault();
      if (password.length < 6) {
        setError('Password Must be at least 6 characters long.')
        return;
      }
      if (!/(?=.*[A-Z].*[a-z])/.test(password)) {
        setError('Password Must contain upper case & lower case');
        return;
      }
      processLogin(email, password);
    }
  
    const processLogin = (email, password) => {
      setIsLoading(true);
     return signInWithEmailAndPassword(auth, email, password)
        .catch(error => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  
    const registerNewUser = (email, password) => {
      setIsLoading(true);
    return  createUserWithEmailAndPassword(auth, email, password)
        .catch(error => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  
    const setUserName = () => {
      updateProfile(auth.currentUser, { displayName: name })
        .then(result => { })
    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    }

    const signInUsingGithub = () => {
        setIsLoading(true);
    return signInWithPopup(auth, githubProvider)
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);

    return {
        user,
        setUser,
        name,
        setUserName,
        error,
        isLoading,
        signInUsingGoogle,
        signInUsingGithub,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogin,
        processLogin,
        registerNewUser,
        handleNameChange

    }
}

export default useFirebase;
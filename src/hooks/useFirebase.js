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
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          setUser(result.user);
          setError('');
        })
        .catch(error => {
          setError(error.message);
        })
    }
  
    const registerNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          setUser(result.user);
          setError('');
          setUserName();
        })
        .catch(error => {
          setError(error.message);
        })
    }
  
    const setUserName = () => {
      updateProfile(auth.currentUser, { displayName: name })
        .then(result => { })
    }

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({})
            }
        })
    }, []);

    return {
        user,
        name,
        error,
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
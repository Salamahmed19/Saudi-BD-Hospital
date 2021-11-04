import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router";

const SignUp = () => {
    const { handleEmailChange, handleNameChange, error, setError, setUser, setUserName, handleRegistration, handlePasswordChange, signInUsingGoogle, signInUsingGithub } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri);
        })
    };

    const handleGitHubLogin = () =>{
        signInUsingGithub()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri);
        })
    };
    

    const handleUserLogin = () =>{
        handleRegistration()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri);
            setError('');
            setUserName();
          })
    };

    return (
        <Container>
            <Row className="justify-content-center my-5 p-2">
                <Col md={6} sm={12}>
                    <form onSubmit={handleUserLogin}>
                        <h3 className="mb-5">User Registration Form</h3>
                        <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" placeholder="Your Name" />
                        </div>
                        </div>
                        <div className="row mb-4">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Your Email" required />
                        </div>
                        </div>
                        <div className="row mb-4">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" placeholder="Your Password" required />
                        </div>
                        </div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>

                    </form>
                </Col>
            </Row>
            <Row className="justify-content-center mb-5">
                <Col md={6} sm={12}>
                    <Button onClick={handleGoogleLogin}>Google Sign In</Button>
                    <Button className="ms-3" onClick={handleGitHubLogin}>GitHub Sign In</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
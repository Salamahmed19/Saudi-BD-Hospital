import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router";

const SignIn = () => {
    const { handleEmailChange, handleLogin, error, setError, setUser, handlePasswordChange, signInUsingGoogle, signInUsingGithub } = useAuth();
    
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
        handleLogin()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri);
            setError('');
          })
    };

    return (
        <Container>
            <Row className="justify-content-md-center my-5 p-2">
                <Col md={6} sm={12}>
                    <form onSubmit={handleUserLogin}>
                        <h3 className="mb-3">User Login Form</h3>
                        <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Your Email" required />
                        </div>
                        </div>
                        <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" placeholder="Your Password" required />
                        </div>
                        </div>
                        <div className="row mb-2 text-danger">{error ? "Invalid User" : ""}</div>
                        <button type="submit" className="btn btn-primary">Sign In</button>

                    </form>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={6} sm={12}>
                    <Button onClick={handleGoogleLogin}>Google Sign In</Button>
                    <Button className="ms-3" onClick={handleGitHubLogin}>GitHub Sign In</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;
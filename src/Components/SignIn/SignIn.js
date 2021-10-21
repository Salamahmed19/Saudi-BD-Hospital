import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { handleEmailChange, toggleLogin, handleNameChange, isLogin, error, handleRegistration, handlePasswordChange, signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <Container>
            <Row className="m-5">
                <Col className="m-5">
                    <form onSubmit={handleRegistration}>
                        <h3 className="mb-5"> { isLogin ? 'Sign In' : 'Sign Up'}</h3>
                        {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" placeholder="Your Name" />
                        </div>
                        </div>}
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
                        <div className="row mb-4">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <button type="submit" className="btn btn-primary">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                        </button>

                    </form>
                </Col>
                <Col className="my-5 p-5">
                    <Button onClick={signInUsingGoogle}>Google Sign In</Button>
                    <br />
                    <Button onClick={signInUsingGithub} className="mt-5">GitHub Sign In</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;
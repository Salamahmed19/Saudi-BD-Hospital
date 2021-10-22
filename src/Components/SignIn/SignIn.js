import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { handleEmailChange, handleLogin, error, handlePasswordChange, signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <Container>
            <Row className="m-5">
                <Col className="m-5">
                    <form onSubmit={handleLogin}>
                        <h3 className="mb-5">Sign In</h3>
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
                        <div className="row mb-3 text-danger">{error ? "Invalid User" : ""}</div>
                        <button type="submit" className="btn btn-primary">Sign In</button>

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
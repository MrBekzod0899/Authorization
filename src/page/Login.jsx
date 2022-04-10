import React from 'react';

const Login = () => {

    return (
        <>
            <div className="container forms">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <main className="form-signin">
                            <div className="card bg-secondary text-light">
                                <div className="card-header p-0 m-0 ">
                                    <h1 className="h3 text-center fw-normal"> sign in</h1>
                                </div>
                                <div className="card-body">
                                    <form method='post'>
                                        <div className="form-floating">
                                            <input type="email"  className="form-control text-dark mb-3" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div>

                                        <div className="checkbox mt-3 mb-3 d-flex align-items-center ">
                                            <input  type="checkbox" style={{width:'20px',height:'20px',marginRight:'10px' }} value="remember-me" />
                                            <label  >
                                                 Remember me
                                            </label>
                                        </div>
                                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

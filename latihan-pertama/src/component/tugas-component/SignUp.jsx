import Input from "./input"
import Button from "./button"

const SignUp = () => {
    return(
        <>
            <div id="login-box">
                <div className="left">
                    <h1>Sign Up</h1>

                    <Input type={'text'} name={'username'} placeholder={'Username'}></Input>
                    <Input type={'text'} name={'email'} placeholder={'Email'}></Input>
                    <Input type={'password'} name={'password'} placeholder={'Pasword'}></Input>
                    <Input type={'password'} name={'pasword2'} placeholder={'Retype password'}></Input>

                    <Input type={'submit'} name={'signup_submit'} value={'Sign me up'}></Input>
                </div>

                <div className="right">
                    <span className="loginwith">Sign in with <br />Social network</span>

                    <Button kelas={'social-signin facebook'} description={'Log in with facebook'}></Button>
                    <Button kelas={'social-signin twitter'} description={'Log in with twitter'}></Button>
                    <Button kelas={'social-signin google'} description={'Log in with Google'}></Button>
                </div>

                <div className="or">OR</div>
            </div>
        </>
    )
}

export default SignUp
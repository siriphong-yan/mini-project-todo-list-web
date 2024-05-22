import { useAuthMethod, useAuthUser } from "@/authHooks";
import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

const SignInPage = () => {
    const { signIn } = useAuthMethod();
    const { error } = useAuthUser();
    const initailFormSignin = {
        email:"test@email.com",
        password:"12345678"
    }
    const [formSignin, setFormSignin] = useState(initailFormSignin);

    const onSubmitform = () => {
        signIn(formSignin);
    }

    return(
        <div className="wraper-signin">
            <h4>เข้าสู่ระบบ</h4>
            <div className="signin-container">
                { error?(
                    <Alert variant={"danger"}>
                        {error}
                    </Alert>
                ):null }
                <Form.Group className="field-group">
                    <Form.Control
                        type="email"
                        name="eamil"
                        placeholder="กรุณากรอกอีเมล์"
                        defaultValue={formSignin.email}
                        onChange={(e)=>{
                            setFormSignin({
                                ...formSignin,
                                email : e.target.value
                            })
                        }}
                    />
                </Form.Group>
                <Form.Group className="field-group">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="กรุณากรอกรหัสผ่าน"
                        defaultValue={formSignin.password}
                        onChange={(e)=>{
                            setFormSignin({
                                ...formSignin,
                                password : e.target.value
                            })
                        }}
                    />
                </Form.Group>
                <Button variant="dark" disabled={formSignin.email == "" || formSignin.password == ""} onClick={()=>{
                    onSubmitform();
                }}>เข้าสู่ระบบ</Button>
            </div>
        </div>
    )
}

export default SignInPage;
import React, { useEffect, useState, useReducer, useContext } from "react";
import AuthContext from "../store/auth-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

interface EmailState {
    value: string;
    isValid: boolean;
}

interface EmailAction {
    type: string;
    val?: any;
}

interface PasswordState {
    value: string;
    isValid: boolean;
}

const emailReducer = (state: EmailState, action: EmailAction) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val!.includes("@") };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state: PasswordState, action: any) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val!.trim().length > 6 };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
};

const Login = () => {
    const ctx = useContext(AuthContext);
    // const [enteredEmail, setEnteredEmail] = useState<string>("");
    // const [emailIsValid, setEmailIsValid] = useState<boolean>();
    // const [enteredPassword, setEnteredPassword] = useState<string>("");
    // const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: false,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: false,
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form Validation");
            setFormIsValid(
                emailState.value.includes("@") &&
                    passwordState.value.trim().length > 6
            );
        }, 500);

        return () => {
            console.log("CLEAN UP");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setEnteredEmail(event.target.value);
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
        // setFormIsValid(emailState.value.includes("@") && passwordState.isValid);
    };

    const passwordChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        // setEnteredPassword(event.target.value);
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });
        // setFormIsValid(emailState.value.includes("@") && passwordState.isValid);
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(enteredEmail.includes("@"));
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        // setPasswordIsValid(enteredPassword.trim().length > 6);
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        ctx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;

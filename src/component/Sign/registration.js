import css from "./SignIn.module.css"
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { getItemAC } from "../../store/actions/actionsCreators";
import { useDispatch } from "react-redux";


function Registration() {

    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    function openLogin() {
        setOpen(!open)
        reset()
    }


    const {register, handleSubmit, formState: { errors, isValid}, reset, watch } = useForm({
        mode: "onBlur"
    })

    const sendInfo1 = (dataForm1) => {
        reset()
    }

 
    const sendInfo2 = (dataForm2) => {
        localStorage.setItem("text", JSON.stringify(dataForm2));
        localStorage.setItem("token", "abcdefghijklmnopqrstuvwxuz")         
        const data = localStorage.getItem("text")
        const d = JSON.parse(data)
        dispatch(getItemAC(d))
    }
  

    return (
        <div>
            {
                open ?
                    <div className={css.contener}>
                        <form className={css.form} onSubmit={handleSubmit(sendInfo1)}>
                            <label htmlFor="email">
                                Email :
                                <input 
                                    id="email"
                                    type="text"
                                    {...register("email",{
                                        required: "Enter your email",
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Erorr Email"
                                        }
                                    })}    
                                />
                                <span>{errors?.email?.message}</span>
                            </label>
                            <label htmlFor="password">
                                Password :
                                <input 
                                    id="password"
                                    type="password"
                                    {...register("password", {
                                        required: "Enter your password",
                                        minLength : {
                                            value: 10,
                                            message: "Less then 10 letters"
                                        }
                                    })
                                    }
                                />
                                <span>{errors?.password?.message}</span>
                            </label>
                            <div className={css.buttonLogin}>
                                <button onClick={openLogin}>signUp</button>
                                <button disabled={!isValid} >log In</button> 
                            </div>
                        </form>
                    </div>
                    // Form 2 sign Up Form 
                    :
                    <div className={css.contenerSignUp}>
                        <form className={css.registerForm} onSubmit={handleSubmit(sendInfo2)}>
                            <label htmlFor="userName1">
                                UserName :
                                <input 
                                    id="userName"
                                    type="text"
                                    {...register("userName", {
                                        required: "Enter your userName",
                                        pattern : {
                                            value: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
                                            message: "Erorr userName"
                                        }
                                    })}
                                />
                                <span>{errors?.userName?.message}</span>
                            </label>

                            <label htmlFor="firstName">
                                firstName :
                                <input 
                                    id="firstName"
                                    type="text" 
                                    {...register("firstName", {
                                        required: "Enter your firstName",
                                        minLength: {
                                            value: 10,
                                            message: "Less then  10 letters"
                                        }
                                    })}
                                />
                                <span>{errors?.firstName?.message}</span>
                            </label>

                            <label htmlFor="email1">
                                email :
                                <input 
                                    id="email1"
                                    type="text"
                                    {...register("email1", {
                                        required: "Enter your email",
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Error email"
                                        }
                                    })}
                                />
                                <span>{errors?.email1?.message}</span>
                            </label>

                            <label htmlFor="password">
                                password :
                                <input 
                                    id="password"
                                    type="password"
                                    {...register("password",{
                                        required: "Enter your password",
                                        minLength: {
                                            value: 10,
                                            message: "Less then 10 letters"
                                        }
                                    })}
                                />
                                <span>{errors?.password?.message}</span>
                            </label>

                            <label htmlFor="confirm_password">
                                confirm_password :
                                <input 
                                    id="confirm_password"
                                    type="password"
                                    {...register("confirm_password", {
                                        required: "Enter your confirm_password",    
                                        validate : value  => value ===  watch("password")  || "Errorsssssss",   
                                    })}
                                />
                                <span>{errors?.confirm_password?.message}</span>
                            </label>

                            <input type="submit" value="submit" className={css.buton} disabled={!isValid}/>
                            <button onClick={openLogin} className={css.buton}> Log In</button>
                        </form>
                    </div>
            }
        </div>
    )
}

export default Registration;
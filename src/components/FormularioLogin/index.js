import React from 'react';
import "./style.css";

import Logo from './logo-agibooking.png';

// import {useFormik} from "formik";
// import * as Yup from "yup";

// export default function FormularioLogin() 
// {
// const schema = Yup.object({
//     email:Yup.string().email("Digite um email válido").required("Email obrigatório"),
//     senha:Yup.string().min(7, "Sua senha não é segura").required("Senha obrigatória")
// })

//     const formik = useFormik ({
//         initialValues: {
//             email: "",
//             senha: ""
//         },
//         onSubmit: async (values, helpers) => {
//             console.log(values)
//             try {
//                 alert ("Formulario enviado")
//             } catch(error) {
//                 helpers.setErrors({submit:error.message})
//             }
//         },

//         validationSchema: schema
//      })

//     return (
//         <>
//             <div className="box-login">
//                 <div>
//                     <img src={Logo} alt="logo-agibooking" />
//                 </div>

//                 <form onSubmit={formik.handleSubmit}>
//                     <input type="email" placeholder="Digite seu email" name="email" error={formik.errors.email} helperText={formik.errors.email} onChange={formik.handleChange} />
//                     <input type="password" placeholder="Digite sua senha" name="senha" error={formik.errors.senha} helperText={formik.errors.senha} onChange={formik.handleChange} />
//                     <input type="submit" value="entrar" class="botao-enviar" />
//                 </form>

//                 <p className="cadastro">Não tem conta?
//                     <a href="">Cadastre-se</a>
//                 </p>
//             </div>
//         </>
//     )
// }

export default function FormularioLogin() 
{
    return (
        <>
            <div className="box-login">
                <div>
                    <img src={Logo} alt="logo-agibooking" />
                </div>

                <form>
                    <input type="email" placeholder="Digite seu email" />
                    <input type="password" placeholder="Digite sua senha" />
                    <input type="submit" value="entrar" class="botao-enviar" />
                </form>

                <p className="cadastro">Não tem conta?
                    <a href="">Cadastre-se</a>
                </p>
            </div>
        </>
    )
}
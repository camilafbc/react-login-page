import ForgotPasswordForm from "../components/ForgotPasswordForm"
import Layout from "../components/Layout"

function ForgotPassword(){
    return (
        <Layout>
            <div className="text-container">
                <h2>Recuperar Senha</h2>
                <p>Informe o e-mail cadastrado e enviaremos um link para recuperar a senha.</p>
            </div>
            <ForgotPasswordForm />
        </Layout>
    )
}

export default ForgotPassword
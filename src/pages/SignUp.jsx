import Layout from "../components/Layout"
import SignUpForm from "../components/SignUpForm"

function SignUp(){
    return (
        <Layout>
            <div className="text-container">
                <h2>Criar Conta</h2>
                {/* <p>Informe um e-mail e crie uma senha para se cadastrar!</p> */}
            </div>
            <SignUpForm />
        </Layout>
    )
}

export default SignUp
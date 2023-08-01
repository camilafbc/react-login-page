
import Layout from "../../components/Layout"
import LogInForm from "../../components/LogInForm"
// import "./style.css"

function Home(){
    return (

        <Layout>
            <div className="text-container">
                <h2>Bem-vindo!</h2>
                {/* <p>Informe o e-mail e senha cadastrados para acessar o conteúdo.</p> */}
            </div>
            <LogInForm />
        </Layout>
    )
}

export default Home
import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros></BarraLateral>
    <ListaDeTarefas></ListaDeTarefas>
    <BotaoAdicionar></BotaoAdicionar>
  </>
)

export default Home

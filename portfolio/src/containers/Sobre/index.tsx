import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GitHubSecao } from './styles'

function Sobre() {
  return (
    <section>
      <Titulo fontSize={16}>Sobre</Titulo>
      <Paragrafo tipo="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab itaque
        hic at ducimus quos a, nemo pariatur velit. Fugiat voluptatum eveniet
        modi sunt quisquam asperiores in sint neque corporis.
      </Paragrafo>
      <GitHubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=annacbsdev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=annacbsdev&layout=compact&langs_count=7&theme=dracula" />
      </GitHubSecao>
    </section>
  )
}

export default Sobre

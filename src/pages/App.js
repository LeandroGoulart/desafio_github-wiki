import { useState } from 'react';
import gitlogo from '../assets/github.png'

import { Container } from './styles'; 
import Input from '../components/Input'
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepo'

import {api} from '../components/services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState ('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    
    const {data} = await api.get(`repos/${currentRepo}`)
    
    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id)
 
      if (!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      } else {
        alert("Já existe")
      }
    } else {
      alert("Repositório não encontrado")
    }
  }

  const handleRemoveRepo = (id) =>{
    const newRepos = repos.filter(repo => repo.id !== id)
    setRepos(newRepos)
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='Logo Github' />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>  
  );
}

export default App;
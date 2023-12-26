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
    
    const {data} = api.get(`repos/${currentRepo}`)
    
    if(data.id){
      setRepos(prev => [...prev, data]);
    }

  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='Logo Github' />
      <Input />
      <Button />
      {repos.map(repo => <ItemRepo />)}
    </Container>  
  );
}

export default App;

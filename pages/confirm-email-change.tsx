
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { api } from "../services/pocketbase";

function PasswordReset() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash.substring(7);
    setToken(hash);
  }, []);


  const handleResetEmailUser = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    await api.collection('users').confirmEmailChange(
      token,
      password,
    ).then((res) => {
      console.log(res);
      toast.success('Email alterado com sucesso');
    }).catch((err) => {
      console.log(err);
      toast.error('Não foi possível alterar o email');
    }).finally(() => {
      setLoading(false);
    });
  }

  const handleResetEmailCompany = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    await api.collection('company').confirmEmailChange(
      token,
      password,
    ).then((res) => {
      console.log(res);
      toast.success('Email alterado com sucesso');
    }).catch((err) => {
      console.log(err);
      toast.error('Não foi possível alterar o email');
    }).finally(() => {
      setLoading(false);
    });
  }


  return (
    <Center bg={'background'} h="100vh" mx='auto' flexDir="column">
      <Toaster position="top-center" reverseOrder={true} />
      {!token && (
        <Box width={'300px'} >
          <Text color={'white'} fontSize="2xl" fontWeight="bold" mb={4}>ops, algo deu errado</Text>
          <Button width={'full'} size="lg" colorScheme="blue" mt={4} onClick={() => window.location.href = '/'}>
            Voltar
          </Button>
        </Box>
      )}
      {token && (
        <form style={{ width: '300px' }}>
          <Text color={'white'} fontSize="2xl" fontWeight="bold" mb={4}>Confirme sua senha</Text>
          <Input color={"white"} size="lg" mb={2} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Digite sua senha' />
          <Button onClick={(e) => handleResetEmailUser(e)} width={'full'} size="lg" type="submit" colorScheme="blue" mt={4}>
            Alterar e-mail usuário
          </Button>
          <Button onClick={(e) => handleResetEmailCompany(e)} width={'full'} size="lg" type="submit" colorScheme="blue" mt={4}>
            Alterar e-mail empresa
          </Button>
        </form>
      )}
      
    </Center>
  );
}

export default PasswordReset;
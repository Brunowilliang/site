
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { api } from "../services/pocketbase";

function PasswordReset() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash.substring(7);
    setToken(hash);
  }, []);


  const handleResetPassword = async (e: any) => { 
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('As senhas não conferem');
      return;
    }

    await api.collection('users').confirmPasswordReset(
      token,
      password,
      password,
    ).then((res) => {
      console.log(res);
      toast.success('Senha alterada com sucesso');
    }).catch((err) => {
      console.log(err);
      toast.error('Não foi possível alterar a senha');
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
        <form onSubmit={(e) => handleResetPassword(e)} style={{ width: '300px' }}>
          <Input color={"white"} size="lg" mb={2} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' />
          <Input color={"white"} size="lg" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirmar senha' />
          <Button width={'full'} size="lg" type="submit" colorScheme="blue" mt={4}>
            Alterar senha
          </Button>
        </form>
      )}
    </Center>
  );
}

export default PasswordReset;
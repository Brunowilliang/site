
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { api } from "../services/pocketbase";

function PasswordReset() {

  return (
    <Center bg={'background'} h="100vh" mx='auto' flexDir="column">
      <Text color={'white'} fontSize="2xl" fontWeight="bold" mb={4}>
        Conta verificada com sucesso!
      </Text>
      <Button onClick={() => window.location.href = '/'}  size="lg" type="submit" colorScheme="blue" mt={4}>
        Voltar
      </Button>
    </Center>
  );
}

export default PasswordReset;
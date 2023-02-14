import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Text, Stack, UnorderedList, ListItem } from '@chakra-ui/react'
import Image from 'next/image'

const Truco: NextPage = () => {
  return (
    <Box mx="auto" maxWidth="800px">
      <Head>
        <title>Reserves - Política de privacidade</title>
        <meta name="description" content="Aplicativo para AppStore e GooglePlay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack spacing={16} mx={5} maxWidth="800px" alignItems="center" my={16}>
        <Image
          src="/logoReserves.png"
          alt="Reserves app"
          width={200}
          height={200}
        />
        <Stack spacing={8} alignItems="start">
          <Text fontSize='2xl' fontWeight="bold" textAlign="start" color="gray.300">Política de privacidade</Text>
          <Text fontWeight="medium" color="gray.500">
            A privacidade e segurança de dados dos nossos usuários são extremamente importantes para nós. Por isso, esta política de privacidade estabelece como coletamos, utilizamos, protegemos e divulgamos as informações dos nossos usuários.
          </Text>
          <Text fontWeight="medium" color="gray.500" my={2}>
            Ao utilizar nosso site ou serviços, você concorda com esta política de privacidade e com o processamento de suas informações pessoais conforme descrito aqui. Caso você não concorde com esta política, por favor, não utilize nossos serviços.
          </Text>
          <Text fontWeight="medium" color="gray.500" my={2}>
            Coletamos informações como nome, endereço de e-mail, entre outras. Essas informações são utilizadas para oferecer nossos serviços e melhorá-los constantemente.
          </Text>
          <Text fontWeight="medium" color="gray.500" my={2}>
            Não compartilhamos informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou para proteger nossos direitos ou de terceiros.
          </Text>
          <Text fontWeight="medium" color="gray.500" my={2}>
            Nosso site utiliza cookies e outras tecnologias de rastreamento para melhorar a experiência do usuário e coletar informações como o tipo de navegador e dispositivo utilizado, o tempo de acesso, entre outros.
          </Text>
          <Text fontWeight="medium" color="gray.500" my={2}>
            As informações coletadas são armazenadas em servidores seguros e protegidas por medidas de segurança adequadas. Também temos procedimentos internos para proteger essas informações e garantir o acesso somente a pessoas autorizadas.
          </Text>
          <Text fontWeight="medium" color="gray.500" my={2}>
            Nos reservamos o direito de modificar esta política de privacidade a qualquer momento, publicando a versão atualizada em nosso site. Por isso, recomendamos que você verifique esta política regularmente.
          </Text>
          <Text fontWeight="medium" color="gray.500" my={2}>
            Se tiver alguma dúvida ou preocupação sobre nossa política de privacidade, entre em contato conosco.
          </Text>
        </Stack>
      </Stack>
      <Box borderTop="1px solid" borderColor="gray.700" mx={5} textAlign="center" fontWeight="medium" color="gray.300">
          <Text my={5}>Developed by Bruno Garcia 💙</Text>
      </Box>
    </Box>
  )
}

export default Truco

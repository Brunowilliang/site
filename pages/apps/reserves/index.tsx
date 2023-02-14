import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Text, Stack, UnorderedList, ListItem, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { BsWhatsapp } from 'react-icons/bs'

const Truco: NextPage = () => {
  return (
    <>
    <Box mx="auto" maxWidth="800px">
      <Head>
        <title>Reserves</title>
        <meta name="description" content="Aplicativo para AppStore e GooglePlay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack spacing={16} mx={5} maxWidth="800px" alignItems="center" mt={40}>
        <Image
          src="/logoReserves.png"
          alt="Reserves app"
          width={200}
          height={200}
        />
        <Stack spacing={8} alignItems="start" fontWeight="medium" color="gray.500">
          <Text>
            Bem-vindo à Reserves, a revolução no mundo dos agendamentos. Nossa plataforma é projetada para tornar o processo de agendamento mais fácil, rápido e eficiente. Com a Reserves, você pode agendar seus compromissos com poucos cliques, a qualquer momento e de qualquer lugar.
          </Text>
          <Text>
            Não perca mais tempo com filas intermináveis ou ligações frustrantes. A Reserves oferece uma solução simples e intuitiva, permitindo que você escolha o local, data, hora e profissional de sua preferência. Além disso, você pode receber lembretes por WhatsApp e ter acesso a todas as informações importantes sobre seus compromissos em um só lugar.
          </Text>
          <Text>
            Mas não para por aí! Com a Reserves, você também pode expandir sua equipe e oferecer mais serviços a seus clientes. Cadastre profissionais e serviços de maneira fácil e rápida e acompanhe o desempenho de cada um com nossos relatórios detalhados. Além disso, nossos dashboards oferecem informações sobre seus agendamentos, permitindo que você mantenha sua vida organizada e tome decisões informadas.
          </Text>
          <Text>
            Não perca mais tempo com agendamentos tradicionais e experimente a Reserves hoje mesmo. Juntos, vamos revolucionar o seu jeito de realizar agendamentos e transformar sua vida em algo ainda mais fácil e conveniente.
          </Text>
        </Stack>
      </Stack>
      <Box borderTop="1px solid" borderColor="gray.700" mx={5} mt={40} textAlign="center" fontWeight="medium" color="gray.500">
          <Text my={5}>Developed by Bruno Garcia 💙</Text>
      </Box>
    </Box>
    <Button
      position="fixed"
      bottom={20}
      right={10}
      leftIcon={<BsWhatsapp size={20} />}
      colorScheme='whatsapp'
      onClick={() => window.open('https://api.whatsapp.com/send?phone=5518981947070&text=Olá, gostaria de solicitar suporte da equipe reserves.', '_blank')}
    >
      Precisa de ajuda?
    </Button>
    </>
  )
}

export default Truco

import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Text, Stack, UnorderedList, ListItem } from '@chakra-ui/react'
import Image from 'next/image'

const Truco: NextPage = () => {
  return (
    <Box mx="auto" maxWidth="800px">
      <Head>
        <title>Contador de truco</title>
        <meta name="description" content="Aplicativo para AppStore e GooglePlay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack spacing={16} mx={5} maxWidth="800px" alignItems="center" my={16}>
        <Image
          src="/logoTruco.png"
          alt="Contador de truco"
          width={200}
          height={200}
        />
        <Box>
          <Text fontSize='2xl' fontWeight="bold" color="gray.300">Política de privacidade</Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            O site www.brunowillian.com é de propriedade da empresa Bruno Willian Garcia, que é a controladora de seus dados pessoais.
            Nós adotamos esta Política de Privacidade, que determina como nós estamos processando as informações coletadas pelo site www.brunowillian.com e também explica por quais razões nós precisamos coletar dados pessoais sobre você. Portanto, você deve ler esta Política de Privacidade antes de usar o site www.brunowillian.com.
            Nós cuidamos dos seus dados pessoais e assumimos a responsabilidade de garantir a confidencialidade e segurança de suas informações pessiais.
          </Text>
        </Box>
        <Box >
          <Text fontSize='2xl' fontWeight="bold" color="gray.300">Estes são as informações pessoais que coletamos:</Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Quando você visita o site www.brunowillian.com, nós aytumaticamente coletamos certas informações sobre seu dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário e alguns dos cookies instalados no seu sispositivo. Além disso, quando você navega pelo Site, nós coletamos informações sobre as páginas individuais ou produtos que você visualiza, sobre quais sites ou termos de busca redirecionaram você para nosso Site, e sobre como você interage com o Site. Nós nos referimos a essas informações coletadas automaticamente como informações sobre o dispositivo. Além disso, nós podemos coletar dados pessoais que você fornecer (incluindo, mas não limitado a: Nome, Sobrenome, Endereço, informações de pagamento, etc) durante o processo de registro para poder cumprir o acordo.
          </Text>
        </Box>
        <Box>
          <Text fontSize='2xl' fontWeight="bold" color="gray.300">Por que fazemos o processamento dos seus dados?</Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Nossa maior prioridade é a segurança dos dados pessoais dos usuários e, portanto, nós podemos processar apenas dados mínimos, apenas enquanto for absolutamente necessário para a manutenção do site. Informações coletadas automaticamente são usadas para identificar possíveis casos de abuso e estabelecer dados estatísticos sobre o uso do site. Esses dados estatísticos não pe agregada de outras formas que permitam a identificação de usuários específicos do sistema.
          </Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Você pode visitar o site sem nos contar sobre quem você é ou relevar qualquer informação que possa ser usada por outra pessoa para identificar você individualmente. Se, apesar disso, você quiser utilizar algum dos recursos do site, ou quiser receber nossa newsletter, ou quiser conceder outros detalhes através do preencimento e envio de formulários, você poderá fornecer dados pessoais para nós, como seu email, nome, sobrenome, cidade de residência, organização e número de telefone. Você pode escolher não fornecer dados pessoais para nós, mas, dessa forma, talvez você não consiga usar alguns dos resursos do site. Por exemplo, você não vai conseguir receber nossa Newsletter ou entrar em contato conosco diretamente pelo nosso site. Usuários que não tenham certeza sobre quais informações pessoais são obrigatórias são convidados a entrarem em contato conosco pelo e-mail brunowilliang@icloud.com.
          </Text>
        </Box>
        <Box>
          <Text fontSize='2xl' fontWeight="bold" color="gray.300">Seus direitos:</Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Se você morar na Europa, estes são os direitos garantidos quando aos seus dados pessoais:
          </Text>
          <UnorderedList fontWeight="medium" color="gray.500" mt={2}>
            <ListItem>O direito de ser informado.</ListItem>
            <ListItem>O direito ao acesso.</ListItem>
            <ListItem>O direito à retificação.</ListItem>
            <ListItem>O direito de deletar.</ListItem>
            <ListItem>O direito de restringir o processamento.</ListItem>
            <ListItem>O direito da portabilidade de dados.</ListItem>
            <ListItem>Direitos em relação a tomadas de decisão automaticas e à perfilagem.</ListItem>
          </UnorderedList>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Se você quiser exercitar esses direitos, por favor entre em contato conosco usando os dados de contato abaixo.
          </Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Adicionalmente, se você mora na Europa, nós afirmamos que estamos processando suas informações com a finalidade de cumprir contratos que possamos ter firmado com você (por exemplo, se você fizer uma compra no nosso Site), ou para excercer os interesses legítimos da nossa empresa listados acima. Além disso, por favor saiba que suas informações poder ser transferidas para fora da Europa, incluindo para o Canadá e os Estados Unidos da América.
          </Text>
        </Box>
        <Box>
          <Text fontSize='2xl' fontWeight="bold" color="gray.300">Links para outros sites:</Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Nosso site pode conter links para outros sites que não são controlados por nós e/ou não são de nossa propriedade. Por favor esteja ciente de que nós não somos responsáveis pelas políticas de privacidade de tais sites e organizações terceiras. Nós incentivamos você a estar ciente de quando sair do nosso site, e também incentivamos você a ler a política de privacidade de cada um dos sites que podem coletar suas informações pessoais.
          </Text>
        </Box>
        <Box>
          <Text fontSize='2xl' fontWeight="bold" color="gray.300">Segurança das informações:</Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Nós garantimos que as informações que você fornece estão em servidores e computadores armazenados em ambientes seguros e controlados, protegidos de acessos, usos e divulgações não-autorizadas. Nós matemos medidas de segurança administrativas, técnicas e físicas razoáveis, com finalidade de proteger os dados pessoais sob nossa custódia de de acessos, usos, modificações e divulgações não-autorizadas. Apesar disso, nenhuma transmissão de dados pela Internet ou por sistemas sem fio pode ser garantida.
          </Text>
        </Box>
        <Box>
          <Text fontSize='2xl' fontWeight="bold" color="gray.300">Declaração legal:</Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Nós vamos divulgar qualquer informação que coletarmos, usarmos ou recebermos caso tal divulgação seja solicitada ou permitida por lei, de forma a cumprir intimações ou processos judiciais similares, e também quando considerarmos em boa fé que a divulgação é necessária para a proteção de nossos direitos, para a proteção da segurança de outros, para investigações de fraude ou para responder a uma solicitação do governo.
          </Text>
        </Box>
        <Box>
          <Text fontSize='2xl' fontWeight="bold" color="gray.300">Informações de contato:</Text>
          <Text fontWeight="medium" color="gray.500" mt={2}>
            Se você quiser entrar em contato conosco para saber mais sobre esta Política de Privacidade, ou quiser acessar quaisquer informações relativas aos seus direitos individuais e às suas Informações Pessoais, você poderá enviar um e-mail para o endereço brunowilliang@icloud.com.
          </Text>
        </Box>
      </Stack>
      <Box borderTop="1px solid" borderColor="gray.700" mx={5} textAlign="center" fontWeight="medium" color="gray.300">
          <Text my={5}>
            Developed by Bruno Garcia 💙
          </Text>
      </Box>
    </Box>
  )
}

export default Truco

import { Badge, Box, Button, Center, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import { FaWhatsapp, FaLinkedin, FaFigma, FaGithub } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'
import { useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  const year = new Date().getFullYear()
  const [ isMobile ] = useMediaQuery("(max-width: 768px)")

  const linkedin = () => { window.open('https://www.linkedin.com/in/brunowilliang/', '_blank') }
  const github = () => { window.open('https://github.com/brunowilliang', '_blank') }
  const figma = () => { window.open('https://www.figma.com/@brunowilliang', '_blank') }


  const openWhatsapp = () => {
    const phone = '5518996660126'
    const message = 'Olá, tudo bem? Vi seu portfólio e gostaria de conversar com você.'
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank')
  }

  const donwloadResume = () => {
    window.open('/cv_bruno_garcia.pdf', '_blank')
  }

  return (
    <>
      <Head>
        <title>Bruno Garcia</title>
        <meta name="description" content="Olá, meu nome é Bruno Garcia, sou desenvolvedor front-end, mobile e designer UX/UI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMobile ? (
        <Box display='flex' flexDir={['column', 'column', 'row']} px={5} alignItems="center" justifyContent={['center', 'center', 'space-between']} mx="auto" maxW={1000} h="100vh" position="relative">
          <HStack spacing={0} position="absolute" top={10} right={10}>
            <IconButton onClick={linkedin} aria-label='linkedin-bruno-willian' variant='link' icon={<FaLinkedin size={28} color="#2666DE80" />} />
            <IconButton onClick={github} aria-label='github-bruno-willian' variant='link' icon={<FaGithub size={28} color="#2666DE80" />} />
            <IconButton onClick={figma} aria-label='figma-bruno-willian' variant='link' icon={<FaFigma size={28} color="#2666DE80" />} />
          </HStack>
          <VStack spacing={5} alignItems="center" justifyContent="center" h="100%">
            <Box display="flex" maxW={"50%"} mx="auto" alignItems="center" justifyContent="center">
              <Image src="/bruno.png" alt="Bruno Willian Garcia" width={330} height={330} />
            </Box>
            <Badge px={3} py={2} fontSize="md" color="primary" bg="primaryOpacity" borderRadius={"10px"}>
              👋 Saudações!
            </Badge>
            <Text fontSize="43px" fontWeight="bold" textAlign={['center', 'center', 'left']} lineHeight="shorter" color="white">
              Hi, I’am<br/>Bruno Garcia
            </Text>
            <Text fontSize="25px" textAlign={['center', 'center', 'right']} lineHeight="shorter" color="grey">
              Desenvolvedor web,<br/>
              Desenvolvedor mobile<br/>
              e UX/UI Designer.
            </Text>
            <Button bg="primaryOpacity" color='primary' _hover={{bg: 'primaryOpacity'}} _active={{bg: 'primaryOpacityPlus'}} size='lg' rightIcon={<FaWhatsapp size={20} color="#2666DE" />} onClick={openWhatsapp}>
              Vamos conversar?
            </Button>
            <Button bg="primaryOpacity" color='primary' _hover={{bg: 'primaryOpacity'}} _active={{bg: 'primaryOpacityPlus'}} size='lg' rightIcon={<BsDownload size={20} color="#2666DE" />} onClick={donwloadResume}>
              Baixar CV
            </Button>
          </VStack>
      </Box>
      ) : (
        <Box display='flex' flexDir={['column', 'column', 'row']} px={5} alignItems="center" justifyContent={['center', 'center', 'space-between']} mx="auto" maxW={1000} h="80vh">
          <VStack spacing={5} alignItems={['center', 'center', 'flex-start']} maxW={['100%', '100%', '50%']}>
            <Badge px={3} py={2} fontSize="md" color="primary" bg="primaryOpacity" borderRadius={"10px"}>
              👋 Saudações!
            </Badge>
            <Text fontSize="43px" fontWeight="bold" textAlign={['center', 'center', 'left']} lineHeight="shorter" color="white">
              Hi, I’am<br/>Bruno Garcia
            </Text>
            <HStack spacing={2}>
              <IconButton onClick={linkedin} aria-label='linkedin-bruno-willian' variant='link' icon={<FaLinkedin size={35} color="#2666DE80" />} />
              <IconButton onClick={github} aria-label='github-bruno-willian' variant='link' icon={<FaGithub size={35} color="#2666DE80" />} />
              <IconButton onClick={figma} aria-label='figma-bruno-willian' variant='link' icon={<FaFigma size={34} color="#2666DE80" />} />
            </HStack>
          </VStack>
  
          <Box display="flex" maxW={"50%"} mx="auto" alignItems="center" justifyContent="center">
            <Image src="/bruno.png" alt="Bruno Willian Garcia" width={330} height={330} />
          </Box>
  
          <VStack spacing={5} alignItems={['center', 'center', 'flex-end']} maxW={['100%', '100%', '50%']}>
            <Text fontSize="25px" textAlign={['center', 'center', 'right']} lineHeight="shorter" color="grey">
              Desenvolvedor web,<br/>
              Desenvolvedor mobile<br/>
              e UX/UI Designer.
            </Text>
            <Button bg="primaryOpacity" color='primary' _hover={{bg: 'primaryOpacity'}} _active={{bg: 'primaryOpacityPlus'}}  size='lg' rightIcon={<FaWhatsapp size={20} color="#2666DE" />} onClick={openWhatsapp}>
              Vamos conversar?
            </Button>
            <Button bg="primaryOpacity" color='primary' _hover={{bg: 'primaryOpacity'}} _active={{bg: 'primaryOpacityPlus'}}  size='lg' rightIcon={<BsDownload size={20} color="#2666DE" />} onClick={donwloadResume}>
              Baixar CV
            </Button>
          </VStack>
        </Box>
      )}

      <Center flexDir="column" h="60vh" mx='auto' maxW={1000} mb="120px">
        <VStack spacing={5}>
          <Badge px={3} py={2} fontSize="md" color="primary" bg="primaryOpacity" borderRadius={"10px"}>
            🧑‍💻 Skills · Experiências
          </Badge>
          <Text fontSize="43px" textAlign="center" fontWeight="bold" lineHeight="shorter" color="white">
            Tecnologias e habilidades
          </Text>
          <Text fontSize="20px" lineHeight="shorter" color="gray">
            Techs que uso no dia a dia
          </Text>
          <HStack spacing={isMobile ? 3 : 5}>
            <Image src="/stack/react.png" alt="React" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            <Image src="/stack/javascript.png" alt="Javascript" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            <Image src="/stack/typescript.png" alt="typescript" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            <Image src="/stack/nextjs.png" alt="Nextjs" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            <Image src="/stack/github.png" alt="Github" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            <Image src="/stack/expo.png" alt="Expo" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            <Image src="/stack/supabase.png" alt="Supabase" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
          </HStack>
          <HStack spacing={isMobile ? 3 : 5}>
            <Image src="/stack/tailwindcss.png" alt="TailwindCSS" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            <Image src="/stack/figma.png" alt="Figma" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            <Image src="/stack/illustrator.png" alt="Illustrator" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
            <Image src="/stack/photoshop.png" alt="Photoshop" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
          </HStack>
        </VStack>
      </Center>

      <Center h="30px" mx='auto' maxW={1000}>
        <Text fontSize="20px" textAlign="center" lineHeight="shorter" color="gray">
          © {year} Bruno Willian Garcia 💙
        </Text>
      </Center>
    </>
  )
}

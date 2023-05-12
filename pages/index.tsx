import { Badge, Box, Button, Center, HStack, IconButton, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import { BsDownload } from 'react-icons/bs'
import { FaFigma, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useDragToScroll } from 'react-snaplist-carousel'

const MyItem = ({ children }: any) => (
  <div style={{ width: '35vw', height: 200, backgroundColor: '#F00' }}>
    {children}
  </div>
);

export default function Home() {
  const year = new Date().getFullYear()
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const linkedin = () => { window.open('https://www.linkedin.com/in/brunowilliang/', '_blank') }
  const github = () => { window.open('https://github.com/brunowilliang', '_blank') }
  const figma = () => { window.open('https://www.figma.com/@brunowilliang', '_blank') }

  const snapList = useRef(null);
  const { isDragging } = useDragToScroll({ ref: snapList });


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
              👋 GREETINGS!
            </Badge>
            <Text fontSize="43px" fontWeight="bold" textAlign={['center', 'center', 'left']} lineHeight="shorter" color="white">
              Hi, I’am<br />Bruno Garcia
            </Text>
            <Text fontSize="25px" textAlign={['center', 'center', 'right']} lineHeight="shorter" color="grey">
              Web developer,<br />
              Mobile developer,<br />
              and UX/UI designer.
            </Text>
            <Button bg="primaryOpacity" color='primary' _hover={{ bg: 'primaryOpacity' }} _active={{ bg: 'primaryOpacityPlus' }} size='lg' rightIcon={<FaWhatsapp size={20} color="#2666DE" />} onClick={openWhatsapp}>
              Let’s talk?
            </Button>
            <Button bg="primaryOpacity" color='primary' _hover={{ bg: 'primaryOpacity' }} _active={{ bg: 'primaryOpacityPlus' }} size='lg' rightIcon={<BsDownload size={20} color="#2666DE" />} onClick={donwloadResume}>
              Download CV
            </Button>
          </VStack>
        </Box>
      ) : (
        <Box display='flex' flexDir={['column', 'column', 'row']} px={5} alignItems="center" justifyContent={['center', 'center', 'space-between']} mx="auto" maxW={1000} h="80vh">
          <VStack spacing={5} alignItems={['center', 'center', 'flex-start']} maxW={['100%', '100%', '50%']}>
            <Badge px={3} py={2} fontSize="md" color="primary" bg="primaryOpacity" borderRadius={"10px"}>
              👋 GREETINGS!
            </Badge>
            <Text fontSize="43px" fontWeight="bold" textAlign={['center', 'center', 'left']} lineHeight="shorter" color="white">
              Hi, I’am<br />Bruno Garcia
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
              Web developer,<br />
              Mobile developer,<br />
              and UX/UI designer.
            </Text>
            <Button bg="primaryOpacity" color='primary' _hover={{ bg: 'primaryOpacity' }} _active={{ bg: 'primaryOpacityPlus' }} size='lg' rightIcon={<FaWhatsapp size={20} color="#2666DE" />} onClick={openWhatsapp}>
              Let’s talk?

            </Button>
            <Button bg="primaryOpacity" color='primary' _hover={{ bg: 'primaryOpacity' }} _active={{ bg: 'primaryOpacityPlus' }} size='lg' rightIcon={<BsDownload size={20} color="#2666DE" />} onClick={donwloadResume}>
              Download CV
            </Button>
          </VStack>
        </Box>
      )}

      <Center flexDir="column" h="60vh" mx='auto' maxW={1000} mb="120px">
        <VStack spacing={2}>
          <Badge px={3} py={2} fontSize="md" color="primary" bg="primaryOpacity" borderRadius={"10px"}>
            🧑‍💻 SKILLS · EXPERIENCES
          </Badge>
          <Text fontSize="43px" textAlign="center" fontWeight="bold" lineHeight="shorter" color="white">
            Technologies and Skills
          </Text>
          <Text pb={4} fontSize="20px" lineHeight="shorter" color="gray">
            Techs I use on a daily basis.
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

      {/* <Box mx='auto' maxW='1000px' mb="120px">
        <SnapList ref={snapList} direction="horizontal">
          <SnapItem margin={{ left: '20vw', right: '10px' }} snapAlign="start">
            <MyItem>
              Item 0
            </MyItem>
          </SnapItem>
          <SnapItem margin={{ left: '10px', right: '10px' }} snapAlign="center">
            <MyItem>
              Item 1
            </MyItem>
          </SnapItem>
          <SnapItem margin={{ left: '10px', right: '10px' }} snapAlign="center">
            <MyItem>
              Item 2
            </MyItem>
          </SnapItem>
          <SnapItem margin={{ left: '10px', right: '10px' }} snapAlign="center">
            <MyItem>
              Item 3
            </MyItem>
          </SnapItem>
          <SnapItem margin={{ left: '10px', right: '20vw' }} snapAlign="end">
            <MyItem>
              Item 4
            </MyItem>
          </SnapItem>
        </SnapList>
      </Box> */}

      <Center h="30px" mx='auto' maxW={1000}>
        <Text fontSize="20px" textAlign="center" lineHeight="shorter" color="gray">
          © {year} Bruno Willian Garcia 💙
        </Text>
      </Center>
    </>
  )
}

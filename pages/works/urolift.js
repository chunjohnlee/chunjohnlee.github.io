import { Container, Badge, Link, List, ListItem, Text, Box } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="UroLift® Training system - John Lee">
            <Container maxW="container.xl">
                <Title>
                    UroLift® Training system <Badge>2022</Badge>
                </Title>
            </Container>

            <Container maxW="container.md" mt={3}>
                <P>
                    A VR training platform that accelerates the effective use of the Teleflex’s UroLift® 2 System, an innovative technology for treatment of benign prostatic hyperplasia (BPH), commonly known as enlarged prostate.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>VR</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link href="https://investors.teleflex.com/news/news-details/2022/Teleflex-Announces-Collaboration-with-FundamentalVR-to-Improve-Training-ThroughVirtual-Reality-Simulation/default.aspx" isExternal>
                            Press releases <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Features developed</Meta>
                        <span>Internal anatomy visualizer, Treatment position tracking, ghost hand guidance, UI</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="https://www.fundamentalvr.com/blog/rop-simulation" isExternal>
                            Retinopathy of Prematurity simulation <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem> */}
                </List>

                <WorkImage src="/images/urolift.jpg" alt="Ghost hand visual guidance">
                    Ghost hand visual guidance. Appear when available action is in the proximity.
                </WorkImage>
                <WorkImage src="/images/urolift2.jpg" alt="Anatomy visualizer">
                    Anatomy visualizer. Assist users to find the correct angle and depth of the device.
                </WorkImage>
                <WorkImage src="/images/urolift3.jpg" alt="Pop-up label UI"
                >
                    Pop-up label UI. Position-based visual guidance that provides information to the user.
                </WorkImage>
            </Container>
        </Layout >
    )
}

export default Work
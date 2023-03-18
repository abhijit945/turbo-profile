import {
  Avatar,
  Container,
  Flex,
  Group,
  Image,
  List,
  Paper,
  Space,
  Text,
  Title,
} from '@mantine/core';

export const Intro = () => (
  <Container>
    <Image
      maw={300}
      mx="auto"
      radius="xl"
      src="./Profile.png"
      withPlaceholder
      alt="Profile image"
    />
    <Space h="lg" />
    <Paper shadow="lg" radius="lg" p="lg">
      <Text variant="gradient" gradient={{ from: 'red', to: 'teal', deg: 45 }}>
        Hi there! I am a Senior Software Engineer at SparkCognition, where I am
        responsible for driving the development of our &quot;Manufacturing
        Suite&quot; and &quot;Oil & Gas Maintenance Advisor&quot; as the Tech
        Lead. I am experienced in architecting simple workflows for complex
        problems, and as a Product Owner for DeepNLP, I am responsible for
        defining, refining, and negotiating the roadmap to deliver the
        product&apos;s features.
        <Space h="lg" />
        I work closely with multiple Product Managers and Directors to realize
        their vision, adopting a fail-fast and quick prototyping approach.
        Additionally, I manage two offshore contractor teams. I am proud to have
        successfully delivered POCs using existing Data Science technologies and
        ML, showcasing demos to existing and potential customers like Pemex,
        Boeing, and Murphy, helping to gain more contracts for our company.
        <Space h="lg" />I am experienced in building Web Applications that are
        WCAG 2.0 and section 508 guidelines compliant, and I have automated
        deployment jobs in Jenkins and TravisCI using TypeScript. At the
        University of Texas at Dallas, I earned a Master of Science in Computer
        Science between 2012 and 2014. I define and document vision, scope,
        functional requirements, and risk analysis using solution management
        tools and processes, and I also define functional requirements, use case
        models, use case specifications, activity diagrams, and other artifacts
        defined in the requirements workflow of the methodology.
      </Text>
    </Paper>
    <Space h="lg" />
    <Paper shadow="lg" radius="lg" p="md">
      <Title order={4}>Ask me about</Title>
      <List spacing={6} listStyleType="disc">
        <List.Item>React</List.Item>
        <List.Item>Next.js</List.Item>
        <List.Item>Material UI</List.Item>
        <List.Item>D3</List.Item>
        <List.Item>Building a PC</List.Item>
        <Space h="lg" />
        <Group>
          <code>
            <Avatar
              radius="xl"
              color="cyan"
              title="React"
              alt="React"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            />
          </code>
          <code>
            <Avatar
              radius="xl"
              color="cyan"
              title="TypeScript"
              alt="TypeScript"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
            />
          </code>
          <code>
            <Avatar
              radius="xl"
              color="cyan"
              title="Express"
              alt="Express"
              src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"
            />
          </code>
          <code>
            <Avatar
              radius="xl"
              color="cyan"
              title="Azure"
              alt="Azure"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/azure/azure.png"
            />
          </code>
          <code>
            <Avatar
              radius="xl"
              color="cyan"
              title="JavaScript"
              alt="JavaScript"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
            />
          </code>
          <code>
            <Avatar
              radius="xl"
              color="cyan"
              title="Node"
              alt="Node"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
            />
          </code>
          <code>
            <Avatar
              radius="xl"
              color="cyan"
              title="Storybook"
              alt="Storybook"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/storybook/storybook.png"
            />
          </code>
          <code>
            <Avatar
              radius="xl"
              color="cyan"
              title="Webpack"
              alt="Webpack"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"
            />
          </code>
          <code>
            <Avatar
              radius="xl"
              color="cyan"
              title="Git"
              alt="Git"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
            />
          </code>
        </Group>
      </List>
      <Space h="lg" />
      <Flex direction="column" justify="flex-start" align="flex-start">
        <Title order={5}>Get in touch</Title>
        <Space h="sm" />
        <List spacing={6} listStyleType="disc">
          <List.Item>
            <Text component="a" href="https://twitter.com/AbhijitRao_">
              Twitter [@AbhijitRao_]
            </Text>
          </List.Item>
          <List.Item>
            <Text component="a" href="https://github.com/abhijit945">
              GitHub [@abhijit945]
            </Text>
          </List.Item>
          <List.Item>
            <Text component="a" href="https://instagram.com/abhijit945">
              Instagram [@abhijit945]
            </Text>
          </List.Item>
          <List.Item>
            <Text component="a" href="mailto:abhijit945@duck.com">
              Email
            </Text>
          </List.Item>
        </List>
      </Flex>
    </Paper>
  </Container>
);

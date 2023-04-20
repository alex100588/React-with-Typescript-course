import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"

interface Props{
    game:Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard
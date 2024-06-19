import { Avatar, Box, Flex, Heading } from '@chakra-ui/react'
import { ServerUrl } from '../../../constants'



const PlacedObject = ({ data }: any) => {
    return (
        <Box w={"100%"} p={5} shadow={"2xl"} bg={"white"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Heading fontSize={22}>{data.productName}</Heading>
                <Avatar size={"xl"} borderRadius={3} src={ServerUrl + data.avatarUrl} />
            </Flex>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Heading fontSize={16}>Quantity {data.quantity}</Heading>

            </Flex>
        </Box>
    )
}

export default PlacedObject
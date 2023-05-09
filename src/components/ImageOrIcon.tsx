import { IconType } from "react-icons"

type PropsType = {
    Icon: string | IconType,
    alt? : string
}
const ImageOrIcon = ({ Icon, alt }: PropsType) => {
    if (typeof Icon === 'string') {
        return <img src={Icon} alt={alt} />
    }
    return (
        <Icon className=" text-[21px]"/>
    )
}

export default ImageOrIcon
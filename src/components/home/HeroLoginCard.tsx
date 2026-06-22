import { loginAvatar } from "@/assets"
import Button from "../common/btns/Button"

type Props = {}

const HeroLoginCard = (props: Props) => {
    return (
        <div className="w-full h-max bg-primary-light px-2.5 py-3.5 rounded-card flex flex-col gap-2">
            <div className="flex items-center gap-2.5 mb-1">
                <img src={loginAvatar} alt="login_avatar"
                    className="w-[44px] h-[44px]"
                />

                <p className="txt-base whitespace-pre-line">
                    {`Hi, user \n Let's get started`}
                </p>
            </div>

            <Button size="full">Join now</Button>
            <Button variant="white" size="full">Log in</Button>
        </div>
    )
}

export default HeroLoginCard
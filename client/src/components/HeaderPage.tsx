import { TEXT_GRAY_NO2 } from "@/constasts/appConstats";

type HeaderPageProps = {
    title: String,
    subTitle?: String
};

const HeaderPage:React.FC<HeaderPageProps> = ({ title, subTitle }) => {
    return(
        <div
            style={{
                marginBottom:subTitle?20:45
            }}
        >
            <h1
                style={{
                    color:TEXT_GRAY_NO2,
                    fontWeight:"bold"
                }} 
            >{title}</h1>
            {
                subTitle && (
                    <h5
                        style={{
                            color:TEXT_GRAY_NO2,
                            fontWeight:"bold"
                        }} 
                    >{subTitle}</h5>
                )
            }
        </div>
    )
}

export default HeaderPage;
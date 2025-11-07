'use client'
import KnowObj from "./KnowObj";

const KnowHow = ({language}) => {

    return (
        <section 
            className="flex flex-col justify-center items-center top-0 left-0 z-1 bg-[#1b1622] w-full h-screen fixed"
            style={{
                backgroundImage: "linear-gradient(120deg, #1b1622 55%, #F8E559 200%)",
                backgroundSize: "200% 200%",
                animation: "movingGradient 12s ease-in-out infinite",
            }} 
        >
            <div className="flex flex-col justify-center items-center mt-19 gap-2">
                <h1 className="text-[1.2rem] md:text-2xl text-center font-light">
                    {language === "pt" ? "TECNOLOGIAS EM MEU KNOW-HOW:" : "TECHNOLOGIES IN MY KNOW-HOW:"}
                </h1>

                <div className="flex flex-row justify-center flex-wrap gap-6 px-7 [@media(max-width:384px)]:p-[0] md:gap-12 md:p-14">

                    <KnowObj title={"HTML5"} imgUrl={"https://cdn1.iconfinder.com/data/icons/programing-development-7/24/html_html5_web_programing_developer-512.png"}></KnowObj>
                    <KnowObj title={"CSS3"} imgUrl={"https://static.vecteezy.com/system/resources/previews/066/386/006/non_2x/the-css-logo-icon-free-png.png"}/>
                    <KnowObj title={"JavaScript"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"}/>
                    <KnowObj title={"TypeScript"} imgUrl={"https://www.cdnlogo.com/logos/t/96/typescript.svg"}/>
                    <KnowObj title={"React"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"}/>
                    <KnowObj title={"Next.js"} imgUrl={"https://img.icons8.com/fluent-systems-filled/512/EBEBEB/nextjs.png"}/>
                    <KnowObj title={"Tailwind CSS"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"}/>
                    <KnowObj title={"AWS"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"}/>
                    <KnowObj title={"Shopify"} imgUrl={"https://cdn.iconscout.com/icon/free/png-256/free-shopify-226579.png?f=webp"}/>
                    <KnowObj title={"Meta Ads"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg"}/>
                    <KnowObj title={"TikTok Ads"} imgUrl={"https://windsor.ai/wp-content/uploads/2021/06/645a617d56b22f6589338368_6452937893cd842c9881c96b_tiktok_icon.png"}/>
                    <KnowObj title={"Google Ads"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/c/cc/Google_Ads_icon.svg"}/>

                    <KnowObj title={"Python"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"}/>
                    <KnowObj title={"FastApi"} imgUrl={"https://www.cdnlogo.com/logos/f/59/fastapi.svg"}/>
                    <KnowObj title={"TensorFlow"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"}/>
                    <KnowObj title={"Java"} imgUrl={"https://cdn-icons-png.flaticon.com/512/5968/5968282.png"}/>

                    <KnowObj title={"MySql"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1448px-Database-mysql.svg.png"}/>
                    <KnowObj title={"RedisDb"} imgUrl={"https://i.imgur.com/iCyZpr0.png"}/>
                    <KnowObj title={"Grapgh.QL"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"}/>

                    <KnowObj title={"Json"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1024px-JSON_vector_logo.svg.png"}/>
                    <KnowObj title={"Git"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"}/>
                    <KnowObj title={"GitHub"} imgUrl={"https://i.imgur.com/PT4Z6an.png"}/>
                    <KnowObj title={"IntelliJ"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png"}/>
                    <KnowObj title={"Visual Studio Code"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"}/>
                    <KnowObj title={"Jira"} imgUrl={"https://cdn-icons-png.flaticon.com/512/5968/5968875.png"}/>
                    <KnowObj title={"Notion"} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png"}/>

                </div>

                <h1 className="text-[1.2rem] md:text-2xl text-center font-light">
                    {language === "pt" ? "EM CONSTANTE CRESCIMENTO" : "CONSTANTLY IMPROVING"}
                </h1>
            </div>
        </section>
    )
}

export default KnowHow;
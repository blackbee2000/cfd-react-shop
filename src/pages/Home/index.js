import Layout from "../../components/Layout";
import { 
    BestPicks, 
    Brands, 
    Categories, 
    CountDown, 
    Features, 
    TopSellers 
} from "./components";

export default function Home(){
    return (
        <Layout>
            <div className="py-3 bg-dark bg-pattern mb-4">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        {/* Text */}
                        <div className="text-center text-white">
                        <span className="heading-xxs letter-spacing-xl">
                            ⚡️ Happy Holiday Deals on Everything ⚡️
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Categories />
            <Features />
            <BestPicks />
            <TopSellers />
            <CountDown />
            <Brands />
        </Layout>
    )
}
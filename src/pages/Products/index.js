import Breadcrumb from "../../components/Breadcrumb";
import { CustomerReviews, ProductDetail, ProductLike } from "./components";

export default function Products(){
    return(
        <div>
            <Breadcrumb page={`Women's Shoes`} activePage={'Leather Sneakers'} />
            <ProductDetail />
            <ProductLike />
            <CustomerReviews />
        </div>
    )
}
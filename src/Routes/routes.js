import App from "../App";
import Menu from "../Components/Menu/Menu";
import Categories from "../Components/Categories/Categories";
import Index from "../Components/Index/Index"
const routes = [
    {path: "/" , element: <Index />},
    {path: "/:categoryName" , element: <Menu />},
    
];

export default routes;
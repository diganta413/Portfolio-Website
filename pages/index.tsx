import { NextPage } from "next";
import Navbar from "../components/navbar";
import Info from "../components/Info"
import About from "../components/About"

const page: NextPage = () => {
    return (
        <div>
            <Navbar />
			<Info/>
			<About/>
        </div>
    );
};

export default page;

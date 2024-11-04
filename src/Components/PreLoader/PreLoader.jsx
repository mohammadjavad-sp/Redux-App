import logo from "../../assets/images/logo.png";

const PreLoader = () => {
    return ( 
        <>
        <div className="w-full h-screen flex items-center justify-center">
            <img src={logo} className="w-32" data-aos="zoom-in" />
        </div>
        </>
     );
}
 
export default PreLoader;
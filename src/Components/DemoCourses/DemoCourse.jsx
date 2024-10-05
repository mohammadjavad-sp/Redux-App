const DemoCourse = ({courseName , courseLogo}) => {
    return ( 
        <>
        <div className="flex items-center flex-col cursor-pointer">
          <div
            style={{ borderRadius: "58% 42% 42% 58% / 45% 51% 49% 55% " }}
            className=" size-20 bg-gradient-to-r from-[#5C5CBC] to-[#9A9AE8] flex items-center justify-center shadow-2xl"
          >
            
            <span className="text-white">{courseLogo}</span>
          </div>
          <p className="font-yekanB mt-4">{courseName}</p>
        </div>
        </>
     );
}
 
export default DemoCourse;
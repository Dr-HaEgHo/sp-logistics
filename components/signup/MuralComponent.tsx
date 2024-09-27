import Image from "next/image";

const MuralComponent = ({children}: {children?: React.ReactNode}) => {
    return (
      <>
        { children && (
  
  
          <div className="h-full flex flex-col ">
            {/* <div className="w-full aspect-square">
              <Image
                src={require("../../assets/images/halfmural.svg")}
                alt="full mural vector"
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="w-full aspect-square">
              <div className="w-full h-full">
                { children }
              </div>
            </div>
          </div>
        )}



        { !children && (
  
          <div className="w-full h-full">
            <Image
              src={require("../../assets/images/full-mural.svg")}
              alt="full mural vector"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </>
    );
  };

  export default MuralComponent;
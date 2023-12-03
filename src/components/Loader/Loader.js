import { ModalWrapper } from "./Loader.styled";

const { InfinitySpin } = require("react-loader-spinner");
export const Loader = () => {
    return (
        <ModalWrapper>
          <InfinitySpin 
  width='200'
  color="#4fa94d"
/>
        </ModalWrapper>        
    );
};
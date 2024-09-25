import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { ModalContainer } from "@/components/ModalComponents";
import { useModal } from "@/hooks/useModal";

const Layout = () => {
  
  const onCloseModal = (modalRef: any, e: any) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
          closeModal();
      }
  }

  const {
      modalElement,
      modalOpen,
      closeModal,
  } = useModal();


  return (<>
    <ModalContainer open={modalOpen} onClose={onCloseModal}>
        {modalElement}
    </ModalContainer>

    <div className="flex h-screen py-6 bg-white overflow-hidden">
      <div className="px-6 h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col pt-6 h-full ">
        <Header />
        <main className="flex-1 px-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  </>);
};

export default Layout;

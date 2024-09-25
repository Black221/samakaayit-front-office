/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRequest } from "./useRequest"
import { useParams } from 'react-router-dom';
import { useModal } from "../../hooks/useModal";
import Modal from "./Reponse/Modal";
import RefuseModal from "./Reponse/RefuseModal";


export default function Details_v2 () {

    const {
        id
    } = useParams();

    const baseUrl = "https://gouvhackaton-1.onrender.com";
    
    const {
        fetchRequestById,
        requestResponse,
        requestLoading,
        requestError
    } = useRequest();

    
    const {
        openModal,
        closeModal
    } = useModal();


    useEffect(() => {
        fetchRequestById(id || "");
        return () => {};
    }, [id]);

    const onResponse = () => {
        openModal(
            <Modal demande={requestResponse?.data} onClose={closeModal} />
        );
    }

    const onRefuse = () => {
        openModal(<RefuseModal onClose={closeModal} demande={requestResponse?.data} />);
    }

    if (requestLoading) {
        return <div>Chargement...</div>
    }

    if (requestError) {
        return <div>Erreur</div>
    }

    if (!requestResponse) {
        return <div>Erreur</div>
    }

    const info: {
        [key: string]: string;
    } = requestResponse.data?.textResponses;

    const doc: {
        [key: string]: string;
    } = requestResponse.data?.documentResponses;

    const citoyen = requestResponse.data?.citoyen;

    return (<>

            {
                requestResponse.data?.state === "en-cours" ? (<>
                    <div className="fixed right-14">
                        <button onClick={onResponse} className="bg-primary-700 text-white px-4 py-2 rounded-md">
                            Repondre
                        </button>

                        <button onClick={onRefuse} className="bg-white border-red-600 border text-red-700 px-4 py-2 rounded-md ml-2">
                            Refuser
                        </button>
                    </div>
                </>) : <></>
            }

        <div className="space-y-10 ">

            <div className="space-y-2">
                <h1 className="text-xl font-bold">
                    {requestResponse.data?.service.name}
                </h1>
                <p>
                    {requestResponse.data?.service.documentName}
                </p>
                <p className="text-base text-gray-500">
                    {requestResponse.data?.service.description}
                </p>
            </div>

            <hr />

            <div className="flex flex-col gap-6">
                <div className="">
                    <h2 className="text-xl font-bold">
                        Résumé de la demande
                    </h2>
                </div>

                <div className="flex flex-col gap-2">
                    <div className=" flex gap-2">
                        <p className="text text-xs">
                            Date de la demande :
                        </p>
                        <p className="text-xs text-white bg-primary-700 px-2 py-1 rounded-full">
                            {requestResponse.data?.createdAt}
                        </p>
                    </div>

                    <div className=" flex gap-2 items-center">
                        <p className="text text-xs">
                            Etat :
                        </p>
                        <p className="text-xs text-white bg-primary-700 px-2 py-1 rounded-full">
                            {requestResponse.data?.state}
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-bold">
                        Informations du citoyen
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                Nom
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.name}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                Prénom
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.surname}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                Sexe
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.sex}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                Téléphone
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.phoneNumber}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                Profession
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.job}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                Adresse
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.address}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                CIN
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.cin}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                Date de naissance
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.birthDate}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                Pays de naissance
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.birthCountry}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                Ville de naissance
                            </p>
                            <p className="text-gray-500 p-4 py-2 text-sm w-72 border rounded-full block">
                                {citoyen?.birthCity}
                            </p>
                        </div>

                    </div>
                        
                        


                </div>

                <div className="">
                    <h2 className="text-lg font-bold">
                        Informations fournies
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {info && Object.keys(info).map((key, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">
                                {key}
                            </p>
                            <p className="text-sm ">
                            <span className="text-gray-500 p-4 w-72 border rounded-full block">
                                    {info[key]}
                            </span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="">
                    {doc && Object.keys(doc).length > 0 && <h2 className="text-lg font-bold">
                        Documents fournis
                    </h2>}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {doc && Object.keys(doc).map((key, index) => (
                            <div key={index} className="flex flex-row gap-4 bg-primary-700 text-white rounded-md w-fit p-4 py-2 mt-2">
                                <a 
                                    href={baseUrl + "/documents/file/" + doc[key]}
                                    target="_blank" rel="noreferrer">
                                    {key}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <hr />

            <div className="flex flex-col gap-4">

                <div className="">
                    <h2 className="text-xl font-bold">
                        Réponse à la demande
                    </h2>
                </div>

                <div className="">
                    <p className="font-semibold">
                        Etat
                    </p>
                    <p>
                        {requestResponse.data?.state}
                    </p>
                </div>

                {requestResponse.data?.state === "terminé" && <>
                
                    <div className="">
                        <p className="font-semibold">
                            Commentaire
                        </p>
                        <p>
                            {requestResponse.data?.commentByAgent}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold">
                            Documents
                        </p>
                        <div className="flex flex-col gap-4">
                            {requestResponse.data?.documentResponses && 
                            (requestResponse.data?.documentsByAgent.map((doc: any, index:number) => (

                                <div key={index} className="flex flex-row gap-4 bg-primary-100 rounded-md w-fit p-4 py-2">
                                    <a 
                                        href={baseUrl + "/documents/file/" + doc}
                                        target="_blank" rel="noreferrer">
                                        Télécharger
                                    </a>
                                </div>
                            )))}
                        </div>
                    </div>
                </>}
            </div>
        </div>
    </>)
}
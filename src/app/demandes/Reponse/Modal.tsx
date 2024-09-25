import InputFile from "@/components/InputFile";
import { ModalBody, ModalFooter, ModalHead } from "@/components/ModalComponents"
import { useEffect, useState } from "react";
import { useRequest } from "../useRequest";
import { IDocument, useDocument } from "../useDocument";
import { useAuth } from "@/hooks/useAuth";



export default function Modal({
    demande,
    onClose
} : {
    demande: any,
    onClose: () => void
}) {

    const [step, setStep] = useState<number>(1);
    const [commentByAgent, setCommentByAgent] = useState<string>("");
    const [documentsByAgent, setDocumentsByAgent] = useState<IDocument[]>([]);
    const [isSending, setIsSending] = useState<"document" | "response" | null>(null);
    const citoyen = demande?.citoyen;

    const onSend = () => {
        
        if (step === 1) {
            setStep(2);
            if (documentsByAgent.length > 0) {
                documentsByAgent.forEach((doc) => {
                    createDocument({
                        ...doc,
                        name: doc.originalname,
                        uploadedBy: getUser()?._id
                    });
                });
            } else {
                updateRequest(demande._id, {
                    state: "terminé",
                    commentByAgent,
                    processedBy: [
                        ...(demande.processedBy || []),
                        getUser()?._id
                    ]
                });
            }
        }
    }

    const {
        updateRequest,
        requestLoading,
        requestError,
        requestResponse
    } = useRequest();

    const {
        createDocument,
        loading: documentLoading,
        error: documentError,
        data : documentData,
    } = useDocument();

    useEffect(() => {
        if (isSending === "document") {
            if (document) {
                setStep(2);
                setIsSending(null);
            }
        }
        // eslint-disable-next-line
    }, [isSending]);

    const {
        getUser,
    } = useAuth();

    useEffect(() => {
        if (documentData) {
            const documentIds = documentData?._id ? [documentData?._id] : documentData.map((doc: any) => doc._id);
            updateRequest(demande._id, {
                state: "Terminé",
                commentByAgent,
                documentsByAgent: documentIds,
                processedBy: [
                    ...(demande.processedBy || []),
                    getUser()?._id
                ]
            });
        }

        // eslint-disable-next-line
    }, [documentData]);

    const onFinished = () => {
        onClose();
        window.location.reload();
    }

    return (<>
        <ModalHead>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">Demande de {demande?.service?.name}</h2>
                    <p className="text-sm text-gray-500">Répondre à la demande de {citoyen?.surname} {citoyen?.name}</p>
                </div>
                <button onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </ModalHead>
        <ModalBody>

            {step === 1 && (<>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <h2 className=" font-semibold">
                            Ajouter un Commentaire
                        </h2>
                        <textarea 
                        value={commentByAgent} onChange={(e) => setCommentByAgent(e.target.value)}
                        rows={4} name="" id="" className="border border-gray-300 rounded-md p-2 w-full" placeholder="Votre réponse">
                        </textarea>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className=" font-semibold">
                            Ajouter des pièces jointes
                        </h2>
                        <InputFile 
                            accept="application/pdf"
                            multiple={true}
                            onChoose={(files) => setDocumentsByAgent(files)}
                            previews={false}
                        />
                    </div>
                </div>
            </>)}

            {step === 2 && (<>

                <div className="flex flex-col items-center justify-center">
                    <p className="text-gray-500">
                        Traitement de la demande en cours
                    </p>
                    { documentLoading && <p className="text-primary-700">Chargement des documents...</p>}
                    { requestLoading && <p className="text-primary-700">Envoi de la réponse...</p>}
                    { documentError && <div>
                        <p className="text-red-500">Erreur lors de l'envoi des documents</p>
                        <button onClick={() => setStep(1)} className="text-primary-700">
                            Réessayer
                        </button>
                    </div> }
                    {
                        requestError && <div>
                            <p className="text-red-500">Erreur lors de l'envoi de la réponse</p>
                            <button onClick={() => {
                                setStep(1);
                                setDocumentsByAgent([]);
                            }} className="text-primary-700">
                                Réessayer
                            </button>
                        </div>
                    }
                </div>
            </>)}

            {step === 3 && (<>
                <div className="flex flex-col gap-4">
                    <h2 className=" font-semibold">
                        Réponse envoyée
                    </h2>
                    <p className="text-gray-500">
                        Votre réponse a été envoyée avec succès
                    </p>
                </div>
            </>)}
           
        </ModalBody>
        <ModalFooter>
            {
                step === 1 &&<button onClick={onClose} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-md mr-2">
                    Fermer
                </button>
            }
            {
                step === 1 && <button onClick={onSend} className="bg-primary-700 text-white px-4 py-2 rounded-md">
                    Envoyer
                </button>
            }
            {requestResponse && <button
                onClick={onFinished}
                className="bg-primary-700 text-white px-6 py-2 rounded-lg"
            >
                Fermer
            </button>}
        </ModalFooter>
    </>)
}
import { ModalBody, ModalFooter, ModalHead } from "@/components/ModalComponents"
import { useAuth } from "@/hooks/useAuth";
import { useRequest } from "../useRequest";





export default function RefuseModal({
    demande,
    onClose
} : {
    demande: any,
    onClose: () => void
}) {

    const citoyen = demande?.citoyen;

    const {
        getUser
    } = useAuth();

    const {
        updateRequest,
        requestLoading,
        requestError,
        requestResponse
    } = useRequest();

    const onRefuse = () => {
        updateRequest(demande._id, {
            state: "rejeté",
            processedBy: [
                ...(demande.processedBy || []),
                getUser()?._id
            ]
        });
    }

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
            </div>
        </ModalHead>
        <ModalBody>
            { requestError && <p>Erreur lors de l'envoi</p>}
            {!requestResponse && <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="comment" className="text-sm font-semibold">
                        Commentaire
                    </label>
                    <textarea
                        id="comment"
                        className="border border-gray-300 rounded-lg p-4"
                        placeholder="Votre commentaire..."
                    />
                </div>
            </div>}

            { requestLoading && <p>Chargement...</p>}

            {requestResponse && <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold">
                    Demande traitée avec succès
                </p>
                <p className="text-sm">
                    La demande a été refusée avec succès
                </p>
            </div>}

        </ModalBody>
        <ModalFooter>
            {!requestResponse && !requestLoading && <button
                onClick={onClose}
                className="bg-white text-primary-700 border border-primary-700 px-6 py-2 rounded-lg"
            >
                Annuler
            </button>}
            {!requestResponse && !requestLoading && <button
                onClick={onRefuse}
                className="bg-primary-700 text-white px-6 py-2 rounded-lg"
            >
                Refuser
            </button>}
            {requestResponse && <button
                onClick={onFinished}
                className="bg-primary-700 text-white px-6 py-2 rounded-lg"
            >
                Fermer
            </button>}

        </ModalFooter>
    </>)
}


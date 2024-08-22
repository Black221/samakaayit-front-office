import { useNavigate } from "react-router-dom";
import Button from "../components_obs/Button";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import illustration from "../assets/illustration-job.png";
import logo2 from "../assets/logo.svg";
import padlock from "../assets/padlock.png";
import eye from "../assets/eye.svg";
import eye2 from "../assets/eye-slash.svg";
import idcard from "../assets/id-card.png";

interface IputProps {
    label: string;
    type: string;
    onChange: any;
    id: string;
    placeholder: string;
    leftImage: React.ReactElement
    rightButton?: React.ReactElement
}

function Input({id, label, type="text", onChange, placeholder, leftImage, rightButton} : IputProps) {
    return (
        <div className="border-b-2 border-[#7B7C7E]">
            <label htmlFor={id} className="block text-base font-medium text-black mb-2">{label} </label>
            <div className="relative flex items-center mb-1">
                {leftImage}
                <input className="w-full px-8 outline-none text-lg bg-white" type={type} id={id} onChange={onChange} placeholder={placeholder}  autoComplete="off"/>
                {rightButton}
            </div>
        </div>
    );
}


export default function Login() {

    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [cni, setCni] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [type, setType] = useState('password');

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleToggle = () => type === 'password' ? setType('text') : setType('password');
    

    const onSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            const user = USERS_TEST.find(user => user.cni === cni && user.password === password);

            if(user) {
                setMessage("");
                login({
                    id: user.id,
                    email: user.cni,
                    role: user.role
                });
                setLoading(false);
                navigate("/app");
            } else {
                setMessage("CNI ou mot de passe incorrect");
                setLoading(false);
            }
        }, 3000);
    }



    return (
        <div className="flex min-h-screen font-body">
            {/* illustration */}
            <div className="w-1/2 p-4">
                <div className="flex flex-col rounded-[22px] h-full bg-secondary-100 px-[80px]">
                    <img src={logo2} alt="logo" className="h-auto w-[155px] absolute top-[39px] left-[50px]" />
                    <img src={illustration} alt="illustration" className="h-auto w-[460px] max-w-full mx-auto mt-[200px] mb-[130px]" />
                </div>
            </div>

            {/* form */}
            <div className="w-1/2">
                <form className="w-[429px] mx-auto mt-[112px] flex flex-col" onSubmit={onSubmit} >
                    <h1 className="font-heading text-center text-black font-semibold text-[36px]/[45px] "> Connexion </h1>
                    {
                        message &&
                        <div className="text-center text-red-500">
                            {message}
                        </div>
                    }

                    <div className="mt-[117px]">
                       <div className="flex flex-col gap-8">
                            <Input
                                label="Numéro de la carte d'indentité"
                                type="text" placeholder="CNI"
                                onChange={(e:any) => setCni(e.target.value)} id="CNI"
                                leftImage={<img src={idcard} alt="padlock"className="h-[16px] w-[16px] absolute left-0" />}
                            />
    
                            <Input
                                label="Mot de passe"
                                type={type}
                                placeholder="Mot de passe"
                                onChange={(e:any) => setPassword(e.target.value)} id="password"
                                leftImage={<img src={padlock} alt="padlock" className="h-[16px] w-[16px] absolute left-0" />}
                                rightButton={<button type="button" onClick={handleToggle} className="absolute right-0"><img src={type === "password" ? eye : eye2} alt="eye" className="h-[20px] w-[20px]"/></button>}
                            />
                       </div>

                        <Button className={`w-full text-lg mt-[77px] font-bold rounded-[32px] h-[60px] ${loading ? "bg-primary-200 pointer-events-none" : "bg-primary-700"}`} label={
                            loading ? (
                                    <svg aria-hidden="true" className="w-8 h-8 mx-auto text-primary-700 animate-spin fill-primary-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                            ) : <span className="text-white">Se connecter</span>
                        } disabled={loading} />
                      
                    </div>
                     
                </form>
            </div>
        </div>
    )
}




const USERS_TEST = [
    {
        id: "1",
        cni: "108819901010",
        password: "admin",
        role: "admin"
    },
    {
        id: "2",
        cni: "108819901011",
        password: "user",
        role: "user"
    }
]
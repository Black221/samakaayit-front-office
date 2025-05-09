import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import illustration from "../assets/illustration-job.png";
import logo2 from "../assets/logo.svg";
import padlock from "../assets/padlock.png";
import eye from "../assets/eye.svg";
import eye2 from "../assets/eye-slash.svg";
import { Toaster, toast } from 'sonner'
import { schemas } from "../utils/validation-shemas";
import axios from "axios";
import { BASE_URL } from "../constants";

interface IputProps {
    type: string;
    onChange: any;
    id: string;
    placeholder: string;
    leftImage: React.ReactElement
    rightButton?: React.ReactElement
}

function Input({id, type="text", onChange, placeholder, leftImage, rightButton} : Readonly<IputProps>) {
    return (
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">{leftImage}</span>
            <input className="w-full px-12 placeholder-gray-300 outline-none text-lg bg-white h-[60px] border focus:border-primary-700 rounded-[32px] focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-40 transition-colors duration-300 ease-in-out font-medium"
                type={type} id={id}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete="off"
                required
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">{rightButton}</span>
        </div>
    );
}



export default function Login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [type, setType] = useState('password');
    const { login } = useAuth();
    const navigate = useNavigate();
    const url = `${BASE_URL}/fonctionnaires/auth/login`;
    const handleToggle = () => type === 'password' ? setType('text') : setType('password');

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const body = {
                email,
                password
            };
            const { value, error } = schemas.loginSchema.validate(body);
            if (error) throw new Error();
            const response = await axios.post(url, value);
            const user =  response.data;
            login({...user.result.fonctionnaire});
            navigate("/");

        } catch (error:any) {
            toast.error("Email ou mot de passe incorrect!");
        } finally {
            setLoading(false);
        }
    }




    return (
        <div className="flex h-screen font-body">
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
                    <div className="mt-[117px]">
                        <div className="flex flex-col gap-8">
                            <Input
                                type="email" placeholder="Email"
                                onChange={(e:any) => setEmail(e.target.value)} id="Email"
                                leftImage={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>}
                            />
                            <Input
                                type={type}
                                placeholder="Mot de passe"
                                onChange={(e:any) => setPassword(e.target.value)} id="password"
                                leftImage={<img src={padlock} alt="padlock" className="h-[20px] w-[20px]" />}
                                rightButton={<button type="button" onClick={handleToggle}><img src={type === "password" ? eye : eye2} alt="eye" className="h-[20px] w-[20px]"/></button>}
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
                        <Toaster richColors position="top-center" />
                    </div>
                </form>
            </div>
        </div>
    )
}



import {useState} from "react";
import Pagination from "./Pagination";
import Input from "./Input";

interface Props {
    readonly data: Data [];
    label: string;
    columns: Column[];
    palette?: Color;
    actions: Action[];
}

interface Column {
    label: string;
    sort: (data: Data[], sens: boolean) => any;
}

interface Action {
    element: React.ReactElement;
    onClick: () => void;
}

interface Color {
    text: string;
    bg: string;
    border: string;
}

interface Data {
    [index: string]: string | number;
}

export const Table = ({label, columns, data, actions}: Props) => {

    const [sens, setSens] = useState<boolean>(false);
    const [current, setCurrent] = useState<Column>();
    const [display, setDisplay] = useState<Data[]>(data)
    const [page, setPage] = useState<number>(0);


    const sort = (column: Column) => {
        setDisplay(column.sort(data, sens));
        
        const nSens = (current === column ? !sens : true);
        setSens(nSens)
        setCurrent(column)
    }


    const onSetPage = (page: string | number, nbRender: number) => {
        setDisplay(() => {
            return data.slice(page as number * nbRender, (page as number + 1) * nbRender)
        })
        setPage(page as number)
    }

    return (<>

        <div className="w-full bg-white space-y-10">
            <div className="flex justify-between items-center px-8">
                <h1 className="flex-1 text-start text-2xl font-bold text-gray-900">{label}</h1>
                <Input className="w-80" placeholder="Rechercher" type="text" label='' onChange={(() => 0)} />
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">

                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            {columns && columns.map((c: Column, index: number) => (
                                <th key={index} scope="col" className="px-3 py-3">
                                    <button className={"uppercase"} onClick={() => sort(c)}>{c.label}</button>
                                </th>
                            ))}
                            <th colSpan={actions.length} scope="col" className="px-3 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {display ? display.map((d, index) => (
                            <tr key={index} className="bg-white border-b">
                                {columns && columns.map((c, index: number) => (
                                    <th key={index} scope="col" className="px-3 py-3">
                                        {d[c.label]}
                                    </th>
                                ))}
                                {actions && actions.map((a, index) => (
                                    <th key={index} scope="col" onClick={a.onClick} className="px-3 py-3 text-light text-blue-400 border-l underline">
                                        {a.element}
                                    </th>
                                ))}
                            </tr>
                        )) : <div>
                            Pas de ressource disponible!
                        </div>}
                    </tbody>
                </table>
            </div>

            <Pagination page={page} length={5} dataCount={data.length} action={onSetPage} />
        </div>
    </>)
}

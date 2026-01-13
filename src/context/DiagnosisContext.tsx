/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { DiagnosisResponse } from "../types/Diagnosis";

type DiagnosisContextType = {
    diagnosis: DiagnosisResponse | null;
    setDiagnosis: (data: DiagnosisResponse) => void;
    clearDiagnosis: () => void;
};

const DiagnosisContext = createContext<DiagnosisContextType | null>(null)

export const DiagnosisProvider = ({ children }: { children: React.ReactNode }) => {
    const [diagnosis, setDiagnosis] = useState<DiagnosisResponse | null>(null);

    return (
        <DiagnosisContext.Provider
            value={{
                diagnosis,
                setDiagnosis,
                clearDiagnosis: () => setDiagnosis(null),
            }}
        >
            {children}
        </DiagnosisContext.Provider>
    );
};


export const useDiagnosis = () => {
    const ctx = useContext(DiagnosisContext);
    if (!ctx) throw new Error("useDiagnosis must be used inside DiagnosisProvider");
    return ctx;
};

export interface DiagnosisResponse {
  message: string;
  error: boolean;
  data: {
    _id: string;
    userId: string;

    symptomsText: string;
    quickSymptoms: string[];
    duration: string;
    severity: string;

    matchedSpecialty: string;

    confidence?: string;
    next_step: string;
    advice: string;
    possible_condition: string;

    createdAt: string;
    updatedAt: string;
  };
};


export interface DiagnosisData {
  _id: string
  possible_condition: string;
  createdAt: string;
  confidence: string
}
export interface DiagnosisAllResponse {
  count: number
  message: string;
  error: boolean;
  data: DiagnosisData[]
}





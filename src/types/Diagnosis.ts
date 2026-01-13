/* eslint-disable @typescript-eslint/no-explicit-any */
export type DiagnosisResponse = {
  message: string;
  error: boolean;
  data: {
    _id: string;
    userId: string;

    symptomsText: string;
    quickSymptoms: string[];
    duration: string;
    severity: string;

    aiResponse?: any;

    matchedSpecialty: string;
    matchedDoctor: {
      _id: string;
      name: string;
      specialty: string;
      city: string;
      province: string;
    }[];

    confidence?: string;
    next_step: string;
    advice: string;
    possible_condition: string;
    status: "pending" | "completed";

    createdAt: string;
    updatedAt: string;
  };
};


export type GetDoctorsParams = {
    specialty: string;
    city?: string;
    province?: string;
};

export type Doctor = {
    _id: string;
    name: string;
    specialty: string;
    rating: number;
    province: string
    image?: {
        url?: string;
    };
};
export type DoctorResponse = {
    message: string,
    error: boolean,
    doctors: Doctor[],
    count: number
}
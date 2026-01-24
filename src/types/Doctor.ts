
export type GetDoctorsParams = {
    specialty: string;
    city?: string;
    province?: string;
};

export type Doctor = {
    _id: string;
    name: string;
    specialty: string;
    experienceYears: number
    rating: number;
    province: string
    contact: {
        email: string
        phone: string
        socialLinks: {
            facebook?: string
            instagram?: string
            linkedin?: string
            portfolio?: string
        },
    },

    education: {
        university: string
    },
    clinicAddress: string
    city: string
    image?: {
        url?: string;
    };
    price: string,
    age: number,
    languages: string[]
};

export type DoctorResponse = {
    message: string,
    error: boolean,
    doctors: Doctor[],
    count: number
}

export type DoctorResponseById = {
    message: string,
    error: boolean,
    doctor: Doctor,
}
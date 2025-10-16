export interface SimpsonCharacter {
    id: number;
    age: number;
    birthdate: string;
    gender: string;
    name: string;
    occupation: string;
    portrait_path: string;
    phrases: string[];
    status: string; 
}

export interface IResponseApi {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
    results: SimpsonCharacter[];
}
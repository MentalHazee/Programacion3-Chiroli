export interface Character {
    id: number;
    age: number;
    birthdate: string;
    gender: string;
    name: string;
    occupation: string;
    portrait_path: string;
    pharses: string[];
    status: string; 
}

export interface ApiResponse {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
    results: Character[];
}
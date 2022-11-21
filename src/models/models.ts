export interface IUser {
    id: string,
    name: string,
    email: string,
    phone: string,
    title: string,
    salary: string,
    address: string,
    benefits: Array<string>,
    location: Object
    pictures: Array<string>,
    createdAt: string,
    updatedAt: string,
    description: string,
    employment_type: Array<string>

}

export interface ServerResponse<T> {
    data: T[], 
    status: number,
    statusText: string, 
    headers: Object,
    config: Object,
    request:XMLHttpRequest,
}
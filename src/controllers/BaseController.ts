export class BaseController{
    public async index(): Promise<any>{
        // Index function of controller
        throw new Error("Method not implemented");
    }

    public async create<T>(): Promise<T>{
        // To create data in a controller
        throw new Error("Method not implemented");
    }

    public async update<T>(): Promise<T>{
        // To update data
        throw new Error("Method not implemented");
    }

    public async destroy<T>(): Promise<T>{
        // To destroy data
        throw new Error("Method not implemented");
    }
}
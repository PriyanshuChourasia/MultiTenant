export class BaseController{
    public async index(req:any,res:any): Promise<any>{
        // Index function of controller
        throw new Error("Method not implemented");
    }

    public async create(req:any,res:any): Promise<any>{
        // To create data in a controller
        throw new Error("Method not implemented");
    }

    public async update(req:any,res:any): Promise<any>{
        // To update data
        throw new Error("Method not implemented");
    }

    public async destroy(req:any,res:any): Promise<any>{
        // To destroy data
        throw new Error("Method not implemented");
    }
}
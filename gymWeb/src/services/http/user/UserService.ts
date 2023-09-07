import { ApiClient, apiClientInstance } from '../ApiClient';
import { IUser, IEditedUser } from '../../../interfaces/User.interface';

export class UserService {
    constructor(private readonly apiClient: ApiClient) {}

    async getAll(): Promise<IUser[]> {
        return await this.apiClient.get('users');
    }

    async getbyId(id: number): Promise<IUser> {
        return await this.apiClient.get('users', { id });
    }

    async newUser(user: IUser): Promise<IUser> {
        return await this.apiClient.post('users', {}, JSON.stringify({ user }));
    }

    async delete(id: number): Promise<void> {
        const url = `users/${id}`;
        return await this.apiClient.delete(url);
    }

    async edit(user: IEditedUser): Promise<IEditedUser> {
        return await this.apiClient.put(
            `users/edit/`,
            {},
            JSON.stringify({ user })
        );
    }
}

export const userServiceInstance = new UserService(apiClientInstance);
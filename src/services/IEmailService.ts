import { User } from "../entities/User";

export interface IEmailService {
    notifyTwoItemsRemaining(user: User): Promise<void>;
}
import { Manager } from '../../index'
import { IExtendable } from '../typings/Interfaces'

const structures: IExtendable = {};
export abstract class Structure {
    public manager: Manager;
    public initialize(manager: Manager) {
        this.manager = manager;
    }
    public static extend<K extends keyof IExtendable, T extends IExtendable[K]>(name: K, extender: (target: IExtendable[K]) => T) {
        const extended = extender(structures[name]);
        structures[name] = extended;
        return extended;
    }
    public static get<K extends keyof IExtendable>(name: K): IExtendable[K] {
        return structures[name];
    }
}
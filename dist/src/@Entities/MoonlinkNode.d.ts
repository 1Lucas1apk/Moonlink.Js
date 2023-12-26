/// <reference types="node" />
import { INode, INodeStats } from "../@Typings";
import { MoonlinkRestFul, MoonlinkDatabase, WebSocket } from "../../index";
export declare class MoonlinkNode {
    private _manager;
    private reconnectTimeout?;
    private reconnectAttempts;
    private retryAmount;
    private retryDelay;
    private resumeStatus;
    host: string;
    identifier?: string;
    password: string;
    port: number | null;
    secure: boolean;
    http: string;
    rest: MoonlinkRestFul;
    resume?: boolean;
    resumed?: boolean;
    resumeTimeout?: number;
    sessionId: string;
    socket: WebSocket | null;
    state: string;
    stats: INodeStats;
    calls: number;
    db: MoonlinkDatabase;
    constructor(node: INode);
    get address(): string;
    check(node: INode): void | never;
    request(endpoint: string, params: any): Promise<object>;
    connect(): Promise<any>;
    open(): void;
    private movePlayersToNextNode;
    private reconnect;
    protected close(code: number, reason: any): void;
    protected message(data: Buffer | string): Promise<void>;
    protected error(error: Error): void;
    protected handleEvent(payload: any): Promise<any>;
}

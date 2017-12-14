/// <reference types="node" />
import { UUID } from '../UUID';
import { Packet } from '../Packet';
export declare class JoinGroupRequestExtendedPacket implements Packet {
    name: string;
    flags: number;
    id: number;
    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
        GroupLimit: number;
    };
    GroupData: {
        GroupID: UUID;
    };
    getSize(): number;
    writeToBuffer(buf: Buffer, pos: number): number;
    readFromBuffer(buf: Buffer, pos: number): number;
}
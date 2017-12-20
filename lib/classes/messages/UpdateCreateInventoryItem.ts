// This file has been automatically generated by writeMessageClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {MessageBase} from '../MessageBase';
import {Message} from '../../enums/Message';

export class UpdateCreateInventoryItemMessage implements MessageBase
{
    name = 'UpdateCreateInventoryItem';
    messageFlags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.UpdateCreateInventoryItem;

    AgentData: {
        AgentID: UUID;
        SimApproved: boolean;
        TransactionID: UUID;
    };
    InventoryData: {
        ItemID: UUID;
        FolderID: UUID;
        CallbackID: number;
        CreatorID: UUID;
        OwnerID: UUID;
        GroupID: UUID;
        BaseMask: number;
        OwnerMask: number;
        GroupMask: number;
        EveryoneMask: number;
        NextOwnerMask: number;
        GroupOwned: boolean;
        AssetID: UUID;
        Type: number;
        InvType: number;
        Flags: number;
        SaleType: number;
        SalePrice: number;
        Name: Buffer;
        Description: Buffer;
        CreationDate: number;
        CRC: number;
    }[];

    getSize(): number
    {
        return this.calculateVarVarSize(this.InventoryData, 'Name', 1) + this.calculateVarVarSize(this.InventoryData, 'Description', 1) + ((140) * this.InventoryData.length) + 34;
    }

    calculateVarVarSize(block: object[], paramName: string, extraPerVar: number): number
    {
        let size = 0;
        block.forEach((bl: any) =>
        {
            size += bl[paramName].length + extraPerVar;
        });
        return size;
    }

    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.AgentData['SimApproved']) ? 1 : 0, pos++);
        this.AgentData['TransactionID'].writeToBuffer(buf, pos);
        pos += 16;
        const count = this.InventoryData.length;
        buf.writeUInt8(this.InventoryData.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.InventoryData[i]['ItemID'].writeToBuffer(buf, pos);
            pos += 16;
            this.InventoryData[i]['FolderID'].writeToBuffer(buf, pos);
            pos += 16;
            buf.writeUInt32LE(this.InventoryData[i]['CallbackID'], pos);
            pos += 4;
            this.InventoryData[i]['CreatorID'].writeToBuffer(buf, pos);
            pos += 16;
            this.InventoryData[i]['OwnerID'].writeToBuffer(buf, pos);
            pos += 16;
            this.InventoryData[i]['GroupID'].writeToBuffer(buf, pos);
            pos += 16;
            buf.writeUInt32LE(this.InventoryData[i]['BaseMask'], pos);
            pos += 4;
            buf.writeUInt32LE(this.InventoryData[i]['OwnerMask'], pos);
            pos += 4;
            buf.writeUInt32LE(this.InventoryData[i]['GroupMask'], pos);
            pos += 4;
            buf.writeUInt32LE(this.InventoryData[i]['EveryoneMask'], pos);
            pos += 4;
            buf.writeUInt32LE(this.InventoryData[i]['NextOwnerMask'], pos);
            pos += 4;
            buf.writeUInt8((this.InventoryData[i]['GroupOwned']) ? 1 : 0, pos++);
            this.InventoryData[i]['AssetID'].writeToBuffer(buf, pos);
            pos += 16;
            buf.writeInt8(this.InventoryData[i]['Type'], pos++);
            buf.writeInt8(this.InventoryData[i]['InvType'], pos++);
            buf.writeUInt32LE(this.InventoryData[i]['Flags'], pos);
            pos += 4;
            buf.writeUInt8(this.InventoryData[i]['SaleType'], pos++);
            buf.writeInt32LE(this.InventoryData[i]['SalePrice'], pos);
            pos += 4;
            buf.writeUInt8(this.InventoryData[i]['Name'].length, pos++);
            this.InventoryData[i]['Name'].copy(buf, pos);
            pos += this.InventoryData[i]['Name'].length;
            buf.writeUInt8(this.InventoryData[i]['Description'].length, pos++);
            this.InventoryData[i]['Description'].copy(buf, pos);
            pos += this.InventoryData[i]['Description'].length;
            buf.writeInt32LE(this.InventoryData[i]['CreationDate'], pos);
            pos += 4;
            buf.writeUInt32LE(this.InventoryData[i]['CRC'], pos);
            pos += 4;
        }
        return pos - startPos;
    }

    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjAgentData: {
            AgentID: UUID,
            SimApproved: boolean,
            TransactionID: UUID
        } = {
            AgentID: UUID.zero(),
            SimApproved: false,
            TransactionID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['SimApproved'] = (buf.readUInt8(pos++) === 1);
        newObjAgentData['TransactionID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const count = buf.readUInt8(pos++);
        this.InventoryData = [];
        for (let i = 0; i < count; i++)
        {
            const newObjInventoryData: {
                ItemID: UUID,
                FolderID: UUID,
                CallbackID: number,
                CreatorID: UUID,
                OwnerID: UUID,
                GroupID: UUID,
                BaseMask: number,
                OwnerMask: number,
                GroupMask: number,
                EveryoneMask: number,
                NextOwnerMask: number,
                GroupOwned: boolean,
                AssetID: UUID,
                Type: number,
                InvType: number,
                Flags: number,
                SaleType: number,
                SalePrice: number,
                Name: Buffer,
                Description: Buffer,
                CreationDate: number,
                CRC: number
            } = {
                ItemID: UUID.zero(),
                FolderID: UUID.zero(),
                CallbackID: 0,
                CreatorID: UUID.zero(),
                OwnerID: UUID.zero(),
                GroupID: UUID.zero(),
                BaseMask: 0,
                OwnerMask: 0,
                GroupMask: 0,
                EveryoneMask: 0,
                NextOwnerMask: 0,
                GroupOwned: false,
                AssetID: UUID.zero(),
                Type: 0,
                InvType: 0,
                Flags: 0,
                SaleType: 0,
                SalePrice: 0,
                Name: Buffer.allocUnsafe(0),
                Description: Buffer.allocUnsafe(0),
                CreationDate: 0,
                CRC: 0
            };
            newObjInventoryData['ItemID'] = new UUID(buf, pos);
            pos += 16;
            newObjInventoryData['FolderID'] = new UUID(buf, pos);
            pos += 16;
            newObjInventoryData['CallbackID'] = buf.readUInt32LE(pos);
            pos += 4;
            newObjInventoryData['CreatorID'] = new UUID(buf, pos);
            pos += 16;
            newObjInventoryData['OwnerID'] = new UUID(buf, pos);
            pos += 16;
            newObjInventoryData['GroupID'] = new UUID(buf, pos);
            pos += 16;
            newObjInventoryData['BaseMask'] = buf.readUInt32LE(pos);
            pos += 4;
            newObjInventoryData['OwnerMask'] = buf.readUInt32LE(pos);
            pos += 4;
            newObjInventoryData['GroupMask'] = buf.readUInt32LE(pos);
            pos += 4;
            newObjInventoryData['EveryoneMask'] = buf.readUInt32LE(pos);
            pos += 4;
            newObjInventoryData['NextOwnerMask'] = buf.readUInt32LE(pos);
            pos += 4;
            newObjInventoryData['GroupOwned'] = (buf.readUInt8(pos++) === 1);
            newObjInventoryData['AssetID'] = new UUID(buf, pos);
            pos += 16;
            newObjInventoryData['Type'] = buf.readInt8(pos++);
            newObjInventoryData['InvType'] = buf.readInt8(pos++);
            newObjInventoryData['Flags'] = buf.readUInt32LE(pos);
            pos += 4;
            newObjInventoryData['SaleType'] = buf.readUInt8(pos++);
            newObjInventoryData['SalePrice'] = buf.readInt32LE(pos);
            pos += 4;
            varLength = buf.readUInt8(pos++);
            newObjInventoryData['Name'] = buf.slice(pos, pos + varLength);
            pos += varLength;
            varLength = buf.readUInt8(pos++);
            newObjInventoryData['Description'] = buf.slice(pos, pos + varLength);
            pos += varLength;
            newObjInventoryData['CreationDate'] = buf.readInt32LE(pos);
            pos += 4;
            newObjInventoryData['CRC'] = buf.readUInt32LE(pos);
            pos += 4;
            this.InventoryData.push(newObjInventoryData);
        }
        return pos - startPos;
    }
}


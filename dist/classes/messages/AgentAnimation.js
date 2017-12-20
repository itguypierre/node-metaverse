"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../UUID");
const MessageFlags_1 = require("../../enums/MessageFlags");
const Message_1 = require("../../enums/Message");
class AgentAnimationMessage {
    constructor() {
        this.name = 'AgentAnimation';
        this.messageFlags = MessageFlags_1.MessageFlags.FrequencyHigh;
        this.id = Message_1.Message.AgentAnimation;
    }
    getSize() {
        return ((17) * this.AnimationList.length) + this.calculateVarVarSize(this.PhysicalAvatarEventList, 'TypeData', 1) + 34;
    }
    calculateVarVarSize(block, paramName, extraPerVar) {
        let size = 0;
        block.forEach((bl) => {
            size += bl[paramName].length + extraPerVar;
        });
        return size;
    }
    writeToBuffer(buf, pos) {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        let count = this.AnimationList.length;
        buf.writeUInt8(this.AnimationList.length, pos++);
        for (let i = 0; i < count; i++) {
            this.AnimationList[i]['AnimID'].writeToBuffer(buf, pos);
            pos += 16;
            buf.writeUInt8((this.AnimationList[i]['StartAnim']) ? 1 : 0, pos++);
        }
        count = this.PhysicalAvatarEventList.length;
        buf.writeUInt8(this.PhysicalAvatarEventList.length, pos++);
        for (let i = 0; i < count; i++) {
            buf.writeUInt8(this.PhysicalAvatarEventList[i]['TypeData'].length, pos++);
            this.PhysicalAvatarEventList[i]['TypeData'].copy(buf, pos);
            pos += this.PhysicalAvatarEventList[i]['TypeData'].length;
        }
        return pos - startPos;
    }
    readFromBuffer(buf, pos) {
        const startPos = pos;
        let varLength = 0;
        const newObjAgentData = {
            AgentID: UUID_1.UUID.zero(),
            SessionID: UUID_1.UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        let count = buf.readUInt8(pos++);
        this.AnimationList = [];
        for (let i = 0; i < count; i++) {
            const newObjAnimationList = {
                AnimID: UUID_1.UUID.zero(),
                StartAnim: false
            };
            newObjAnimationList['AnimID'] = new UUID_1.UUID(buf, pos);
            pos += 16;
            newObjAnimationList['StartAnim'] = (buf.readUInt8(pos++) === 1);
            this.AnimationList.push(newObjAnimationList);
        }
        count = buf.readUInt8(pos++);
        this.PhysicalAvatarEventList = [];
        for (let i = 0; i < count; i++) {
            const newObjPhysicalAvatarEventList = {
                TypeData: Buffer.allocUnsafe(0)
            };
            varLength = buf.readUInt8(pos++);
            newObjPhysicalAvatarEventList['TypeData'] = buf.slice(pos, pos + varLength);
            pos += varLength;
            this.PhysicalAvatarEventList.push(newObjPhysicalAvatarEventList);
        }
        return pos - startPos;
    }
}
exports.AgentAnimationMessage = AgentAnimationMessage;
//# sourceMappingURL=AgentAnimation.js.map
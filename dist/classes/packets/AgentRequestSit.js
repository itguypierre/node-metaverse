"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../UUID");
const Vector3_1 = require("../Vector3");
const MessageFlags_1 = require("../../enums/MessageFlags");
class AgentRequestSitPacket {
    constructor() {
        this.name = 'AgentRequestSit';
        this.flags = MessageFlags_1.MessageFlags.Zerocoded | MessageFlags_1.MessageFlags.FrequencyHigh;
        this.id = 6;
    }
    getSize() {
        return 60;
    }
    writeToBuffer(buf, pos) {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.TargetObject['TargetID'].writeToBuffer(buf, pos);
        pos += 16;
        this.TargetObject['Offset'].writeToBuffer(buf, pos, false);
        pos += 12;
        return pos - startPos;
    }
    readFromBuffer(buf, pos) {
        const startPos = pos;
        const newObjAgentData = {
            AgentID: UUID_1.UUID.zero(),
            SessionID: UUID_1.UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjTargetObject = {
            TargetID: UUID_1.UUID.zero(),
            Offset: Vector3_1.Vector3.getZero()
        };
        newObjTargetObject['TargetID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjTargetObject['Offset'] = new Vector3_1.Vector3(buf, pos, false);
        pos += 12;
        this.TargetObject = newObjTargetObject;
        return pos - startPos;
    }
}
exports.AgentRequestSitPacket = AgentRequestSitPacket;
//# sourceMappingURL=AgentRequestSit.js.map
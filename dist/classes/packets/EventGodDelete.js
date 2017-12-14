"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../UUID");
const MessageFlags_1 = require("../../enums/MessageFlags");
class EventGodDeletePacket {
    constructor() {
        this.name = 'EventGodDelete';
        this.flags = MessageFlags_1.MessageFlags.FrequencyLow;
        this.id = 4294901943;
    }
    getSize() {
        return (this.QueryData['QueryText'].length + 1) + 60;
    }
    writeToBuffer(buf, pos) {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt32LE(this.EventData['EventID'], pos);
        pos += 4;
        this.QueryData['QueryID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.write(this.QueryData['QueryText'], pos);
        pos += this.QueryData['QueryText'].length;
        buf.writeUInt32LE(this.QueryData['QueryFlags'], pos);
        pos += 4;
        buf.writeInt32LE(this.QueryData['QueryStart'], pos);
        pos += 4;
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
        const newObjEventData = {
            EventID: 0
        };
        newObjEventData['EventID'] = buf.readUInt32LE(pos);
        pos += 4;
        this.EventData = newObjEventData;
        const newObjQueryData = {
            QueryID: UUID_1.UUID.zero(),
            QueryText: '',
            QueryFlags: 0,
            QueryStart: 0
        };
        newObjQueryData['QueryID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjQueryData['QueryText'] = buf.toString('utf8', pos, length);
        pos += length;
        newObjQueryData['QueryFlags'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjQueryData['QueryStart'] = buf.readInt32LE(pos);
        pos += 4;
        this.QueryData = newObjQueryData;
        return pos - startPos;
    }
}
exports.EventGodDeletePacket = EventGodDeletePacket;
//# sourceMappingURL=EventGodDelete.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../UUID");
const Vector3_1 = require("../Vector3");
const MessageFlags_1 = require("../../enums/MessageFlags");
class EventLocationReplyPacket {
    constructor() {
        this.name = 'EventLocationReply';
        this.flags = MessageFlags_1.MessageFlags.Trusted | MessageFlags_1.MessageFlags.Zerocoded | MessageFlags_1.MessageFlags.FrequencyLow;
        this.id = 4294902068;
    }
    getSize() {
        return 45;
    }
    writeToBuffer(buf, pos) {
        const startPos = pos;
        this.QueryData['QueryID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.EventData['Success']) ? 1 : 0, pos++);
        this.EventData['RegionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.EventData['RegionPos'].writeToBuffer(buf, pos, false);
        pos += 12;
        return pos - startPos;
    }
    readFromBuffer(buf, pos) {
        const startPos = pos;
        const newObjQueryData = {
            QueryID: UUID_1.UUID.zero()
        };
        newObjQueryData['QueryID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        this.QueryData = newObjQueryData;
        const newObjEventData = {
            Success: false,
            RegionID: UUID_1.UUID.zero(),
            RegionPos: Vector3_1.Vector3.getZero()
        };
        newObjEventData['Success'] = (buf.readUInt8(pos++) === 1);
        newObjEventData['RegionID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjEventData['RegionPos'] = new Vector3_1.Vector3(buf, pos, false);
        pos += 12;
        this.EventData = newObjEventData;
        return pos - startPos;
    }
}
exports.EventLocationReplyPacket = EventLocationReplyPacket;
//# sourceMappingURL=EventLocationReply.js.map
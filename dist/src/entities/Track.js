"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
class Track {
    encoded;
    url;
    author;
    duration;
    title;
    position;
    identifier;
    isSeekable;
    isStream;
    artworkUrl;
    isrc;
    time = 0;
    sourceName;
    requestedBy = {
        userData: null,
    };
    constructor(trackData, requester) {
        this.encoded = trackData.encoded;
        this.url = trackData.info.uri;
        this.author = trackData.info.author;
        this.duration = trackData.info.length;
        this.title = trackData.info.title;
        this.position = trackData.info.position;
        this.identifier = trackData.info.identifier;
        this.isSeekable = trackData.info.isSeekable;
        this.isStream = trackData.info.isStream;
        this.artworkUrl = trackData.info.artworkUrl;
        this.isrc = trackData.info.isrc;
        this.sourceName = trackData.info.sourceName;
        if (requester)
            this.requestedBy = { userData: requester };
    }
}
exports.Track = Track;
//# sourceMappingURL=Track.js.map
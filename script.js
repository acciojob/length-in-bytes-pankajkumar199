function byteSize(str) {
    // Blob automatically calculates byte size (ASCII + non-ASCII)
    const blob = new Blob([str]);
    return blob.size;
}

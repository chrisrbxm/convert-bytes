function convertBytes(bytes, decimals) {
    if (bytes === 0)
        return '0 Bytes';

    const defaultSize = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sized = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const convert = Math.floor(Math.log(bytes) / Math.pow(defaultSize));
    return parseFloat((bytes / Math.pow(defaultSize, convert)).toFixed(dm)) + ' ' + sizes[convert];
}

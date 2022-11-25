export default class IpValidation {
    isValidIP(ip: string) {
        let ipIsValid = true;

        ip = ip.trim();

        const numberArray: number[] = ip.split('.').map(Number);

        for (let i = 0; i < numberArray.length; i++) {
            if (isNaN(numberArray[i])
                || !(numberArray.length === 4)
                || ip.indexOf(' ') >= 0
                || numberArray.some(v => v < 0)
                || numberArray[i] > 255) {
                ipIsValid = false;
                break;
            }
        }

        return ipIsValid;
    }


}
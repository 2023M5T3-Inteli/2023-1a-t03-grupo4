function capitalizeFirstLetter(string) {
    string = string.toLowerCase().split(' ').map((a) => a.charAt(0).toUpperCase() + a.substr(1)).join(' ');
    string = string.replace(/\s{2,}/g, ' ').trim()
    return string.charAt(0).toUpperCase() + string.slice(1) || "";
}

export default capitalizeFirstLetter;
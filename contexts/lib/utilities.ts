export const conciseEthAddress = (addr: string, significantCharacters: number = 3) => {
    if (!addr || !addr.substring) return ''
    return addr.substring(0, significantCharacters + 3) + '...' + addr.substring(addr.length - 4, addr.length)
  }
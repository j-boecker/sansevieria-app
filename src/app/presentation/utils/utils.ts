export function getPfennigNumber(pfennigNumber: number): string {
  return 'PF ' + pfennigNumber.toString().padStart(4, '0');
}

export const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'); 

export const validRG = new RegExp('(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1})');

export const validCPF = new RegExp('(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)')

export const validName = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")

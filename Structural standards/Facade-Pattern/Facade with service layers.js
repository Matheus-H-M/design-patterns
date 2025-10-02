function validar(email){
  return email.includes("@");
}
function salvar(email){
  return `Email ${email} salvo com sucesso`;
}
function registrarEmail(email){
  if(!validar(email)) return "Email inválido";
  return salvar(email);
}

console.log(registrarEmail("test@email.com"));